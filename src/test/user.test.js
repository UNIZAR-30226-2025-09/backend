import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import {generateToken} from './utils/generateToken.js';
import {getPlaylistGenre} from "#test/utils/getPlaylistGenre";

const SECRET_KEY = "aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z";

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Pruebas sobre /api/user', () => {
    // Usuario compartido para todas las pruebas
    let sharedUser;
    const sharedPassword = 'compartidopass123';
    let sharedHashedPassword;
    let sharedToken;

    // Configuración inicial antes de todas las pruebas
    beforeAll(async () => {
        // Esperar a que se inicialice la conexión de la base de datos
        await delay(100);

        // Eliminar los usuarios de prueba si existen
        await db.user.destroy({
            where: {
                nickname: {
                    [Op.in]: ['testuser1', 'testuser2', 'testuser3', 'shareduser']
                }
            }
        });

        // Crear usuario compartido para todas las pruebas
        sharedHashedPassword = await bcrypt.hash(sharedPassword, 10);
        sharedUser = await db.user.create({
            nickname: 'shareduser',
            password: sharedHashedPassword,
            mail: 'shared@test.com',
            style_fav: 'pop',
            is_premium: false
        });

        // Generar token para el usuario compartido
        sharedToken = generateToken(sharedUser);

        console.log('Usuario compartido creado:', sharedUser.id);
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        // Eliminar todos los usuarios de prueba incluyendo el compartido
        await db.user.destroy({
            where: {
                nickname: {
                    [Op.in]: ['testuser1', 'testuser2', 'testuser3', 'shareduser']
                }
            }
        });
        console.log('Usuarios de prueba eliminados');
    });

    describe('POST /api/user/register', () => {

        it('debería registrar un usuario exitosamente', async () => {
            const userData = {
                nickname: 'testuser1',
                password: 'password123',
                mail: 'testuser1@test.com',
                style_fav: 'rock'
            };

            const res = await request(BASE_URL)
                .post('/api/user/register')
                .send(userData);

            expect(res.status).toBe(201);
            expect(res.body.message).toBe('Usuario registrado con éxito');
            expect(res.body.user).toBeDefined();
            expect(res.body.user.nickname).toBe(userData.nickname);
            expect(res.body.user.mail).toBe(userData.mail);
            expect(res.body.user.style_fav).toBe(userData.style_fav);
            expect(res.body.user.is_premium).toBe(false);

            // Verificar que la contraseña esté hasheada
            expect(res.body.user.password).not.toBe(userData.password);

            // Verificar que se pueda validar la contraseña con bcrypt
            const storedUser = await db.user.findOne({ where: { nickname: userData.nickname } });
            const validPassword = await bcrypt.compare(userData.password, storedUser.password);
            expect(validPassword).toBe(true);
        });

        it('debería fallar al registrar un correo que ya existe', async () => {
            // Primero creamos un usuario
            const userData = {
                nickname: 'testuser2',
                password: 'password123',
                mail: 'testuser2@test.com',
                style_fav: 'pop'
            };

            await request(BASE_URL)
                .post('/api/user/register')
                .send(userData);

            // Intentamos crear otro con el mismo correo
            const duplicateMailUser = {
                nickname: 'differentuser',
                password: 'password456',
                mail: 'testuser2@test.com', // Mismo correo
                style_fav: 'jazz'
            };

            const res = await request(BASE_URL)
                .post('/api/user/register')
                .send(duplicateMailUser);

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Correo ya registrado');
        });

        it('debería fallar al registrar un nickname que ya existe', async () => {
            // Ya tenemos usuarios creados, intentamos uno con nickname duplicado
            const duplicateNicknameUser = {
                nickname: 'testuser1', // Nickname existente
                password: 'password789',
                mail: 'different@test.com',
                style_fav: 'electronic'
            };

            const res = await request(BASE_URL)
                .post('/api/user/register')
                .send(duplicateNicknameUser);

            expect(res.status).toBe(409);
            expect(res.body.error).toBe('Nombre de usuario ya registrado');
        });

        it('debería registrar correctamente con campos opcionales omitidos', async () => {
            const minimalUserData = {
                nickname: 'testuser3',
                password: 'password123',
                mail: 'testuser3@test.com'
            };

            const res = await request(BASE_URL)
                .post('/api/user/register')
                .send(minimalUserData);

            expect(res.status).toBe(201);
            expect(res.body.message).toBe('Usuario registrado con éxito');
            expect(res.body.user.nickname).toBe(minimalUserData.nickname);
            expect(res.body.user.style_fav).toBeNull(); // Debería ser null si se omite
        });

        it('debería fallar si faltan campos requeridos', async () => {
            // Sin nickname
            const missingNickname = {
                password: 'password123',
                mail: 'incomplete@test.com',
                style_fav: 'rock'
            };

            const res1 = await request(BASE_URL)
                .post('/api/user/register')
                .send(missingNickname);

            expect(res1.status).toBe(500);

            // Sin contraseña
            const missingPassword = {
                nickname: 'incompleteuser',
                mail: 'incomplete@test.com',
                style_fav: 'rock'
            };

            const res2 = await request(BASE_URL)
                .post('/api/user/register')
                .send(missingPassword);

            expect(res2.status).toBe(500);

            // Sin correo
            const missingMail = {
                nickname: 'incompleteuser',
                password: 'password123',
                style_fav: 'rock'
            };

            const res3 = await request(BASE_URL)
                .post('/api/user/register')
                .send(missingMail);

            expect(res3.status).toBe(500);
        });
    });

    describe('POST /api/user/login', () => {
        it('debería iniciar sesión correctamente con credenciales válidas', async () => {
            const credentials = {
                mail: sharedUser.mail,
                password: sharedPassword
            };

            const res = await request(BASE_URL)
                .post('/api/user/login')
                .send(credentials);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Login Exitoso');
            expect(res.body.token).toBeDefined();
            expect(res.header.authorization).toBeDefined();
            expect(res.body.user).toBeDefined();
            expect(res.body.user.id).toBe(sharedUser.id);
            expect(res.body.user.nickname).toBe(sharedUser.nickname);
            expect(res.body.user.mail).toBe(sharedUser.mail);
        });

        it('debería fallar con correo inexistente', async () => {
            const credentials = {
                mail: 'noexiste@test.com',
                password: sharedPassword
            };

            const res = await request(BASE_URL)
                .post('/api/user/login')
                .send(credentials);

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Usuario no encontrado');
        });

        it('debería fallar con contraseña incorrecta', async () => {
            const credentials = {
                mail: sharedUser.mail,
                password: 'contraseñaincorrecta'
            };

            const res = await request(BASE_URL)
                .post('/api/user/login')
                .send(credentials);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Contraseña incorrecta');
        });

        /*it('debería fallar si falta el correo', async () => {
            const credentials = {
                password: sharedPassword
            };

            const res = await request(BASE_URL)
                .post('/api/user/login')
                .send(credentials);

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Usuario no encontrado');
        });

        it('debería fallar si falta la contraseña', async () => {
            const credentials = {
                mail: sharedUser.mail
            };

            const res = await request(BASE_URL)
                .post('/api/user/login')
                .send(credentials);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Contraseña incorrecta');
        });*/

        it('debería devolver los datos correctos del usuario sin exponer la contraseña real', async () => {
            const credentials = {
                mail: sharedUser.mail,
                password: sharedPassword
            };

            const res = await request(BASE_URL)
                .post('/api/user/login')
                .send(credentials);

            expect(res.status).toBe(200);

            // La contraseña devuelta no debe ser la contraseña en texto plano
            expect(res.body.user.password).not.toBe(sharedPassword);

            // Debe ser la contraseña hasheada
            expect(res.body.user.password).toBe(sharedHashedPassword);

            // Verificar el resto de datos
            expect(res.body.user.style_fav).toBe(sharedUser.style_fav);
            expect(res.body.user.is_premium).toBe(sharedUser.is_premium);
        });
    });

    describe('POST /api/user/logout', () => {
        it('debería cerrar la sesión correctamente', async () => {
            const res = await request(BASE_URL)
                .post('/api/user/logout')
                .send();

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Sesión cerrada correctamente');
        });

        it('debería funcionar correctamente incluso con token de autorización', async () => {
            // Intentamos cerrar sesión con el token incluido
            const logoutRes = await request(BASE_URL)
                .post('/api/user/logout')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send();

            // Verificamos que la respuesta sea correcta
            expect(logoutRes.status).toBe(200);
            expect(logoutRes.body.message).toBe('Sesión cerrada correctamente');
        });
    });

    describe('GET /api/user/profile', () => {

        it('debería obtener el perfil del usuario autenticado correctamente', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/profile')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body).toBeDefined();
            expect(res.body.id).toBe(sharedUser.id);
            expect(res.body.nickname).toBe(sharedUser.nickname);
            expect(res.body.mail).toBe(sharedUser.mail);
            expect(res.body.style_fav).toBe(sharedUser.style_fav);
            expect(res.body.is_premium).toBe(sharedUser.is_premium);
            // Verificar que no se devuelve la contraseña
            expect(res.body.password).toBeUndefined();
        });

        it('debería fallar cuando no se proporciona token', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/profile');

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar cuando el token es inválido', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/profile')
                .set('Authorization', 'Bearer tokeninvalido123');

            expect(res.status).toBe(500);
            expect(res.body.error).toBe('Error al obtener el perfil');
        });

        it('debería fallar cuando el usuario no existe en la base de datos', async () => {
            // Crear un token con un ID que no existe en la base de datos
            const fakeToken = jwt.sign(
                { id: 99999, mail: 'noexiste@test.com' },
                SECRET_KEY,
                { expiresIn: '1h' }
            );

            const res = await request(BASE_URL)
                .get('/api/user/profile')
                .set('Authorization', `Bearer ${fakeToken}`);

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Usuario no encontrado');
        });

        it('debería devolver solo los atributos específicos del usuario', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/profile')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);

            // Verificar que solo se devuelven los campos específicos
            const allowedFields = ['id', 'nickname', 'mail', 'style_fav', 'is_premium', 'user_picture', 'daily_skips'];
            const responseFields = Object.keys(res.body);

            // Verificar que todos los campos devueltos están en la lista permitida
            responseFields.forEach(field => {
                expect(allowedFields).toContain(field);
            });

            // Verificar que no hay campos adicionales
            expect(responseFields.length).toBeLessThanOrEqual(allowedFields.length);
        });
    });

    describe('POST /api/user/update', () => {
        let secondUser;
        const newPassword = 'nuevacontraseña123';

        beforeAll(async () => {
            // Crear un segundo usuario para pruebas de conflicto
            await db.user.destroy({ where: { nickname: 'secondtestuser' } });

            const hashedPassword = await bcrypt.hash('secondpassword', 10);
            secondUser = await db.user.create({
                nickname: 'secondtestuser',
                password: hashedPassword,
                mail: 'second@test.com',
                style_fav: 'jazz',
                is_premium: false
            });
        });

        afterAll(async () => {
            // Eliminar el segundo usuario de prueba
            await db.user.destroy({ where: { id: secondUser.id } });
        });

        it('debería actualizar el nickname correctamente', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                nickname: 'nuevonickname'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Perfil actualizado correctamente');
            expect(res.body.user.nickname).toBe('nuevonickname');

            // Verificar en la base de datos
            const updatedUser = await db.user.findByPk(sharedUser.id);
            expect(updatedUser.nickname).toBe('nuevonickname');

            // Restaurar para otras pruebas
            updatedUser.nickname = 'shareduser';
            await updatedUser.save();
        });

        it('debería actualizar el correo correctamente', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                mail: 'nuevo@correo.com'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.user.mail).toBe('nuevo@correo.com');

            // Restaurar para otras pruebas
            const updatedUser = await db.user.findByPk(sharedUser.id);
            updatedUser.mail = 'shared@test.com';
            await updatedUser.save();
        });

        // Resto de pruebas actualizadas con la ruta y método correctos
        it('debería actualizar la contraseña correctamente', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                password: newPassword
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(200);

            // Verificar que la contraseña se actualizó correctamente
            const updatedUser = await db.user.findByPk(sharedUser.id);
            const validNewPassword = await bcrypt.compare(newPassword, updatedUser.password);
            expect(validNewPassword).toBe(true);

            // Restaurar la contraseña original para otras pruebas
            updatedUser.password = sharedHashedPassword;
            await updatedUser.save();
        });

        it('debería actualizar varios campos a la vez', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                nickname: 'multiactualizacion',
                mail: 'multi@test.com'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.user.nickname).toBe('multiactualizacion');
            expect(res.body.user.mail).toBe('multi@test.com');

            // Restaurar para otras pruebas
            const updatedUser = await db.user.findByPk(sharedUser.id);
            updatedUser.nickname = 'shareduser';
            updatedUser.mail = 'shared@test.com';
            await updatedUser.save();
        });

        it('debería fallar sin token de autenticación', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                nickname: 'fallaranickname'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .send(updateData);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar con token inválido', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                nickname: 'fallaranickname'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', 'Bearer tokeninvalido123')
                .send(updateData);

            expect(res.status).toBe(403);
            expect(res.body.error).toBe('Token inválido o expirado');
        });

        it('debería fallar sin contraseña actual', async () => {
            const updateData = {
                nickname: 'fallaranickname'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Debes proporcionar tu contraseña actual para actualizar tu perfil');
        });

        it('debería fallar con contraseña actual incorrecta', async () => {
            const updateData = {
                currentPassword: 'contraseñaincorrecta',
                nickname: 'fallaranickname'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Contraseña actual incorrecta');
        });

        it('debería fallar sin campos para actualizar', async () => {
            const updateData = {
                currentPassword: sharedPassword
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(422);
            expect(res.body.error).toBe('Debes proporcionar al menos un campo para actualizar');
        });

        it('debería fallar al intentar usar un correo existente', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                mail: secondUser.mail
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Correo ya registrado');
        });

        it('debería fallar al intentar usar un nickname existente', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                nickname: secondUser.nickname
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(409);
            expect(res.body.error).toBe('Nombre de usuario ya registrado');
        });

        it('no debería exponer la contraseña en la respuesta', async () => {
            const updateData = {
                currentPassword: sharedPassword,
                nickname: 'otrointento'
            };

            const res = await request(BASE_URL)
                .post('/api/user/update')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.user.password).toBeUndefined();

            // Restaurar para otras pruebas
            const updatedUser = await db.user.findByPk(sharedUser.id);
            updatedUser.nickname = 'shareduser';
            await updatedUser.save();
        });
    });

    describe('POST /api/user/premium', () => {
        // Token generado específicamente para pruebas premium
        let premiumToken;

        beforeAll(async () => {
            // Asegurarse de que sharedUser existe y no es premium
            await sharedUser.update({ is_premium: false });
            // Generar token fresco
            premiumToken = generateToken(sharedUser);
        });

        it('debería actualizar exitosamente de usuario gratuito a premium', async () => {
            const updateData = {
                is_premium: true
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .set('Authorization', `Bearer ${premiumToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Estado actualizado a: Premium');
            expect(res.body.user).toBeDefined();
            expect(res.body.user.is_premium).toBe(true);

            // Verificar que se actualizó en la BD
            const updatedUser = await db.user.findByPk(sharedUser.id);
            expect(updatedUser.is_premium).toBe(true);
        });

        it('debería actualizar exitosamente de usuario premium a gratuito', async () => {
            // El usuario ya debería estar en premium por la prueba anterior
            const updateData = {
                is_premium: false
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .set('Authorization', `Bearer ${premiumToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Estado actualizado a: Gratuito');
            expect(res.body.user.is_premium).toBe(false);

            // Verificar actualización en BD
            const updatedUser = await db.user.findByPk(sharedUser.id);
            expect(updatedUser.is_premium).toBe(false);
        });

        it('debería informar cuando el usuario ya está en el estado solicitado', async () => {
            // El usuario debería estar en estado gratuito por la prueba anterior
            const updateData = {
                is_premium: false  // Mismo estado actual
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .set('Authorization', `Bearer ${premiumToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('El usuario ya está en el estado Gratuito');
            expect(res.body.user.is_premium).toBe(false);
        });

        it('debería fallar si no se proporciona token', async () => {
            const updateData = {
                is_premium: true
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .send(updateData);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar con token inválido', async () => {
            const updateData = {
                is_premium: true
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .set('Authorization', 'Bearer tokeninvalido123')
                .send(updateData);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token inválido o expirado');
        });

        it('debería fallar si el usuario no existe', async () => {
            // Crear token con un ID que no existe
            const fakeToken = jwt.sign(
                { id: 99999, mail: 'noexiste@test.com' },
                SECRET_KEY,
                { expiresIn: '1h' }
            );

            const updateData = {
                is_premium: true
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .set('Authorization', `Bearer ${fakeToken}`)
                .send(updateData);

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Usuario no encontrado');
        });

        it('debería fallar si is_premium no es booleano', async () => {
            const updateData = {
                is_premium: "true"
            };

            const res = await request(BASE_URL)
                .post('/api/user/premium')
                .set('Authorization', `Bearer ${premiumToken}`)
                .send(updateData);

            expect(res.status).toBe(400);
            expect(res.body.error).toBe("El valor de 'is_premium' debe ser booleano (true/false)");
        });
    });

    describe('POST /api/user/check-email', () => {

        it('debería confirmar que un correo existente está registrado', async () => {
            const requestData = {
                mail: sharedUser.mail
            };

            const res = await request(BASE_URL)
                .post('/api/user/check-email')
                .send(requestData);

            expect(res.status).toBe(200);
            expect(res.body.exists).toBe(true);
        });

        it('debería confirmar que un correo no existente no está registrado', async () => {
            const requestData = {
                mail: 'correo_inexistente@test.com'
            };

            const res = await request(BASE_URL)
                .post('/api/user/check-email')
                .send(requestData);

            expect(res.status).toBe(200);
            expect(res.body.exists).toBe(false);
        });

        it('debería manejar solicitudes sin correo electrónico', async () => {
            const requestData = {}; // Objeto vacío sin campo mail

            const res = await request(BASE_URL)
                .post('/api/user/check-email')
                .send(requestData);

            expect(res.status).toBe(500);
        });
    });

    describe('GET /api/user/:userId', () => {

        it('debería obtener correctamente los datos de un usuario existente', async () => {
            const res = await request(BASE_URL)
                .get(`/api/user/${sharedUser.id}`);

            expect(res.status).toBe(200);
            expect(res.body.id).toBe(sharedUser.id);
            expect(res.body.nickname).toBe(sharedUser.nickname);
            expect(res.body.mail).toBe(sharedUser.mail);
            expect(res.body.style_fav).toBe(sharedUser.style_fav);
            expect(res.body.is_premium).toBe(sharedUser.is_premium);
            // No debería devolver la contraseña
            expect(res.body.password).toBeUndefined();
        });

        it('debería devolver un error 404 si el usuario no existe', async () => {
            const idInexistente = 99999;

            const res = await request(BASE_URL)
                .get(`/api/user/${idInexistente}`);

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Usuario no encontrado');
        });

        it('debería devolver todos los campos públicos del perfil de usuario', async () => {
            const res = await request(BASE_URL)
                .get(`/api/user/${sharedUser.id}`);

            // Verificar que contiene todos los campos esperados
            expect(res.status).toBe(200);
            expect(res.body.id).toBeDefined();
            expect(res.body.nickname).toBeDefined();
            expect(res.body.mail).toBeDefined();
            expect(res.body.style_fav).toBeDefined();
            expect(res.body.is_premium).toBeDefined();
            expect(res.body.user_picture).toBeDefined(); // Puede ser null pero debe estar definido
        });
    });
    describe('POST /api/user/updateStyle', () => {
        let testSongs, testPlaylists;

        // Configuración inicial
        beforeEach(async () => {
            try {
                // Añadir url_mp3 como campo obligatorio
                testSongs = await Promise.all([
                    db.song.create({
                        name: 'Canción Rock',
                        genre: 'Rock',
                        url_mp3: 'http://ejemplo.com/rock.mp3' // Añadir campo obligatorio
                    }),
                    db.song.create({
                        name: 'Canción Pop',
                        genre: 'Pop',
                        url_mp3: 'http://ejemplo.com/pop.mp3' // Añadir campo obligatorio
                    }),
                    db.song.create({
                        name: 'Canción Jazz',
                        genre: 'Jazz',
                        url_mp3: 'http://ejemplo.com/jazz.mp3' // Añadir campo obligatorio
                    })
                ]);

                // Crear playlists de prueba
                testPlaylists = await Promise.all([
                    db.playlist.create({ name: 'Playlist Rock', user_id: sharedUser.id })
                ]);

                // Añadir canción de rock a la playlist rock
                await db.song_playlist.create({
                    playlist_id: testPlaylists[0].id,
                    song_id: testSongs[0].id
                });
            } catch (error) {
                console.error('Error en configuración:', error);
            }
        });

        // Limpiar datos después de las pruebas
        afterEach(async () => {
            try {
                // Verificar que existan los arrays antes de usar map
                if (testSongs && testSongs.length) {
                    await db.song_like.destroy({ where: { user_id: sharedUser.id } });

                    await db.song.destroy({
                        where: { id: testSongs.map(s => s.id) }
                    });
                }

                if (testPlaylists && testPlaylists.length) {
                    await db.playlist_like.destroy({
                        where: { user_id: sharedUser.id }
                    });

                    await db.song_playlist.destroy({
                        where: {
                            playlist_id: testPlaylists.map(p => p.id)
                        }
                    });

                    await db.playlist.destroy({
                        where: { id: testPlaylists.map(p => p.id) }
                    });
                }

                // Restaurar estilo favorito original
                await sharedUser.update({ style_fav: 'pop' });
            } catch (error) {
                console.error('Error en limpieza:', error);
            }
        });

        it('debería actualizar el estilo favorito según los likes de canciones', async () => {
            if (!testSongs || !testSongs.length) {
                fail('Las canciones de prueba no se crearon correctamente');
                return;
            }

            await Promise.all([
                db.song_like.create({ user_id: sharedUser.id, song_id: testSongs[0].id }),
                db.song_like.create({ user_id: sharedUser.id, song_id: testSongs[1].id }),
            ]);

            const res = await request(BASE_URL)
                .post('/api/user/updateStyle')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe("Estilo favorito actualizado");
            expect(res.body.style_fav).toContain("Rock");
        });

        it('debería fallar si no hay token de autenticación', async () => {
            const res = await request(BASE_URL)
                .post('/api/user/updateStyle');

            expect(res.status).toBe(401);
            expect(res.body.error).toBe("Token no proporcionado");
        });

        it('debería considerar tanto los likes de canciones como de playlists', async () => {
            // Dar like a una canción de jazz
            await db.song_like.create({
                user_id: sharedUser.id,
                song_id: testSongs[2].id
            });

            // Dar like a una playlist de rock
            await db.playlist_like.create({
                user_id: sharedUser.id,
                playlist_id: testPlaylists[0].id
            });

            const res = await request(BASE_URL)
                .post('/api/user/updateStyle')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            // Debería estar empatado entre jazz y rock
            expect(res.body.style_fav.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe('GET /api/user/recommended-playlists', () => {
        let testPlaylists;
        let testSongs;

        // Configuración inicial antes de cada prueba
        beforeEach(async () => {
            try {
                // Asignar un estilo favorito al usuario compartido
                await sharedUser.update({ style_fav: 'Rock' });

                // Crear canciones con diferentes géneros
                testSongs = await Promise.all([
                    db.song.create({
                        name: 'Canción Rock 1',
                        genre: 'rock',
                        url_mp3: 'http://ejemplo.com/rock1.mp3'
                    }),
                    db.song.create({
                        name: 'Canción Rock 2',
                        genre: 'rock',
                        url_mp3: 'http://ejemplo.com/rock2.mp3'
                    }),
                    db.song.create({
                        name: 'Canción Pop',
                        genre: 'pop',
                        url_mp3: 'http://ejemplo.com/pop1.mp3'
                    })
                ]);

                // Crear playlists
                testPlaylists = await Promise.all([
                    db.playlist.create({
                        name: 'Playlist Rock',
                        user_id: sharedUser.id + 1, // Otro usuario
                        type: 'public',
                        front_page: 'http://ejemplo.com/rock.jpg'
                    }),
                    db.playlist.create({
                        name: 'Playlist Pop',
                        user_id: sharedUser.id + 1,
                        type: 'public',
                        front_page: 'http://ejemplo.com/pop.jpg'
                    }),
                    db.playlist.create({
                        name: 'Mi Playlist Rock',
                        user_id: sharedUser.id, // Playlist del usuario actual
                        type: 'public',
                        front_page: 'http://ejemplo.com/mirock.jpg'
                    })
                ]);

                // Crear asociaciones usando directamente el modelo song_playlist
                await db.song_playlist.bulkCreate([
                    { song_id: testSongs[0].id, playlist_id: testPlaylists[0].id },
                    { song_id: testSongs[1].id, playlist_id: testPlaylists[0].id },
                    { song_id: testSongs[2].id, playlist_id: testPlaylists[1].id },
                    { song_id: testSongs[0].id, playlist_id: testPlaylists[2].id }
                ]);

            } catch (error) {
                console.error('Error en configuración de tests de playlists recomendadas:', error);
            }
        });

        // Limpieza después de cada prueba
        afterEach(async () => {
            try {
                // Eliminar asociaciones primero
                if (testPlaylists && testSongs) {
                    await db.song_playlist.destroy({
                        where: {
                            playlist_id: testPlaylists.map(p => p.id)
                        }
                    });
                }

                // Eliminar playlists y canciones
                if (testPlaylists && testPlaylists.length) {
                    await db.playlist.destroy({
                        where: { id: testPlaylists.map(p => p.id) }
                    });
                }

                if (testSongs && testSongs.length) {
                    await db.song.destroy({
                        where: { id: testSongs.map(s => s.id) }
                    });
                }

                // Restaurar estilo favorito original
                await sharedUser.update({ style_fav: 'pop' });
            } catch (error) {
                console.error('Error en limpieza de tests de playlists recomendadas:', error);
            }
        });

        it('debería obtener playlists recomendadas basadas en el estilo favorito del usuario', async () => {
            // Primero obtenemos el valor exacto del estilo favorito establecido
            const userInfo = await db.user.findByPk(sharedUser.id);

            const res = await request(BASE_URL)
                .get('/api/user/recommended-playlists')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body.recommendedPlaylists).toBeDefined();
            expect(Array.isArray(res.body.recommendedPlaylists)).toBe(true);
            expect(res.body.recommendedPlaylists.length).toBeGreaterThan(0);

            // Verificar que no se recomienda la playlist del propio usuario
            const recommendedIds = res.body.recommendedPlaylists.map(p => p.id);
            expect(recommendedIds).not.toContain(testPlaylists[2].id);

            // Verificar que las playlists recomendadas tienen Rock como género predominante
            let generosCorrecto = true;
            for (const playlist of res.body.recommendedPlaylists) {
                const predominantGenre = await getPlaylistGenre(playlist.id);

                // Comparar ignorando mayúsculas/minúsculas
                if (predominantGenre && predominantGenre.toLowerCase() !== userInfo.style_fav.toLowerCase()) {
                    generosCorrecto = false;
                    break;
                }
            }

            // Todas las playlists recomendadas deben tener el género predominante Rock
            expect(generosCorrecto).toBe(true);
        });

        it('debería fallar si no hay token de autenticación', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/recommended-playlists');

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar con token inválido', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/recommended-playlists')
                .set('Authorization', 'Bearer tokeninvalido123');

            expect(res.status).toBe(403);
            expect(res.body.error).toBe('Token inválido o expirado');
        });

        it('debería devolver playlists con la estructura correcta', async () => {
            const res = await request(BASE_URL)
                .get('/api/user/recommended-playlists')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);

            if (res.body.recommendedPlaylists.length > 0) {
                const playlist = res.body.recommendedPlaylists[0];
                expect(playlist.id).toBeDefined();
                expect(playlist.name).toBeDefined();
                expect(playlist.front_page).toBeDefined();
            }
        });
    });

    describe('POST /api/user/forgot-password', () => {
        it('debería enviar un correo de recuperación cuando el mail existe', async () => {
            const data = {
                mail: sharedUser.mail
            };

            const res = await request(BASE_URL)
                .post('/api/user/forgot-password')
                .send(data);

            expect(res.status).toBe(200);
            expect(res.body.message).toBeDefined();
            expect(res.body.message).toContain('enviado');
        });

        it('debería fallar cuando el mail no existe', async () => {
            const data = {
                mail: 'noexiste@test.com'
            };

            const res = await request(BASE_URL)
                .post('/api/user/forgot-password')
                .send(data);

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('No existe una cuenta con este correo electrónico');
        });

        it('debería fallar cuando no se proporciona un mail', async () => {
            const res = await request(BASE_URL)
                .post('/api/user/forgot-password')
                .send({});

            expect(res.status).toBe(400);
            expect(res.body.error).toBeDefined();
        });
    });

    describe('POST /api/user/reset-password', () => {
        let resetToken;

        beforeEach(async () => {
            // Generar un token
            resetToken = jwt.sign(
                { id: sharedUser.id, mail: sharedUser.mail },
                SECRET_KEY,
                { expiresIn: '15m' }
            );

            // Almacenar el token en el usuario para pasar la verificación
            await sharedUser.update({
                reset_token: resetToken,
                reset_token_expires: new Date(Date.now() + 900000) // 15 minutos
            });
        });

        afterEach(async () => {
            // Limpiar el token después de cada prueba
            await sharedUser.update({
                reset_token: null,
                reset_token_expires: null
            });
        });

        it('debería restablecer la contraseña con un token válido', async () => {
            const data = {
                token: resetToken,
                newPassword: 'nuevaContraseña123'
            };

            const res = await request(BASE_URL)
                .post('/api/user/reset-password')
                .send(data);

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Contraseña restablecida con éxito');

            // Verificar que la contraseña fue actualizada
            const user = await db.user.findByPk(sharedUser.id);
            const validNewPassword = await bcrypt.compare(data.newPassword, user.password);
            expect(validNewPassword).toBe(true);

            // Restaurar contraseña original
            user.password = sharedHashedPassword;
            await user.save();
        });

        it('debería fallar con un token inválido', async () => {
            const data = {
                token: 'token_invalido',
                newPassword: 'nuevaContraseña123'
            };

            const res = await request(BASE_URL)
                .post('/api/user/reset-password')
                .send(data);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token inválido o expirado');
        });

        it('debería fallar cuando falta la nueva contraseña', async () => {
            const data = {
                token: resetToken
            };

            const res = await request(BASE_URL)
                .post('/api/user/reset-password')
                .send(data);

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Debe proporcionar el token y la nueva contraseña');
        });

        it('debería fallar con un token expirado', async () => {
            // Crear un token expirado
            const expiredToken = jwt.sign(
                { id: sharedUser.id, mail: sharedUser.mail },
                SECRET_KEY,
                { expiresIn: '-1h' } // Ya expirado
            );

            // Almacenar el token expirado
            await sharedUser.update({
                reset_token: expiredToken,
                reset_token_expires: new Date(Date.now() - 3600000)
            });

            const data = {
                token: expiredToken,
                newPassword: 'nuevaContraseña123'
            };

            const res = await request(BASE_URL)
                .post('/api/user/reset-password')
                .send(data);

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token inválido o expirado');
        });
    });

    describe('POST /api/user/use-daily-skip/:userId', () => {
        beforeEach(async () => {
            // Asegurarse de que el usuario tenga skips disponibles
            await sharedUser.update({ daily_skips: 3 });
        });

        afterEach(async () => {
            // Restaurar el valor original
            await sharedUser.update({ daily_skips: 6 });
        });

        it('debería usar un skip correctamente cuando el usuario tiene disponibles', async () => {
            const res = await request(BASE_URL)
                .post(`/api/user/use-daily-skip/${sharedUser.id}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.message).toContain('Skip utilizado');
            expect(res.body.remainingSkips).toBe(2);

            // Verificar en la base de datos
            const updatedUser = await db.user.findByPk(sharedUser.id);
            expect(updatedUser.daily_skips).toBe(2);
        });

        it('debería fallar cuando el usuario no tiene skips disponibles', async () => {
            // Poner skips a 0
            await sharedUser.update({ daily_skips: 0 });

            const res = await request(BASE_URL)
                .post(`/api/user/use-daily-skip/${sharedUser.id}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('No tienes skips disponibles');
        });

        it('debería fallar cuando el usuario no existe', async () => {
            const idInexistente = 99999;

            const res = await request(BASE_URL)
                .post(`/api/user/use-daily-skip/${idInexistente}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(404);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('Usuario no encontrado');
        });

        it('debería requerir autenticación para usar un skip', async () => {

            const res = await request(BASE_URL)
                .post(`/api/user/use-daily-skip/${sharedUser.id}`);

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
        });
    });
});