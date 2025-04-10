import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import {generateToken} from './utils/generateToken.js';

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
            const allowedFields = ['id', 'nickname', 'mail', 'style_fav', 'is_premium', 'user_picture'];
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
});