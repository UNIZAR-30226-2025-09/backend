import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import bcrypt from 'bcryptjs';
import { generateToken } from '#test/utils/generateToken';

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Pruebas sobre /api/social', () => {
    let token1, token2;
    let user1, user2, user3;

    // Configuración inicial antes de las pruebas
    beforeAll(async () => {
        // Esperar a que se inicialice la conexión de la base de datos
        await delay(100);

        // Crear usuarios de prueba
        const hashedPassword = await bcrypt.hash('password123', 10);

        user1 = await db.user.create({
            username: 'socialtest1',
            mail: 'socialtest1@test.com',
            nickname: 'socialtest1',
            password: hashedPassword
        });

        user2 = await db.user.create({
            username: 'socialtest2',
            mail: 'socialtest2@test.com',
            nickname: 'socialtest2',
            password: hashedPassword
        });

        user3 = await db.user.create({
            username: 'socialtest3',
            mail: 'socialtest3@test.com',
            nickname: 'socialtest3',
            password: hashedPassword
        });

        // Generar tokens para los usuarios
        token1 = generateToken(user1);
        token2 = generateToken(user2);
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        // Eliminar las solicitudes de amistad creadas durante las pruebas
        await db.friendship.destroy({
            where: {
                user1_id: [user1.id, user2.id, user3.id],
                user2_id: [user1.id, user2.id, user3.id]
            }
        });

        // Eliminar los usuarios de prueba
        await db.user.destroy({
            where: {
                id: [user1.id, user2.id, user3.id]
            }
        });
    });

    describe('POST /api/social/send', () => {
        it('debería enviar una solicitud de amistad exitosamente', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/send')
                .set('Authorization', `Bearer ${token1}`)
                .send({ user2_id: user2.id });

            expect(res.status).toBe(201);
            expect(res.body.message).toBe('Solicitud de amistad enviada correctamente');
            expect(res.body.friendship).toBeDefined();
            expect(res.body.friendship.user1_id).toBe(user1.id);
            expect(res.body.friendship.user2_id).toBe(user2.id);
            expect(res.body.friendship.state_friend_request).toBe('pending');
        });

        it('debería fallar al enviar una solicitud duplicada', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/send')
                .set('Authorization', `Bearer ${token1}`)
                .send({ user2_id: user2.id });

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Ya existe una solicitud de amistad entre estos usuarios');
        });

        it('debería fallar si falta el token', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/send')
                .send({ user2_id: user3.id });

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar si el usuario no existe', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/send')
                .set('Authorization', `Bearer ${token1}`)
                .send({ user2_id: 99999 });

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Uno o ambos usuarios no existen');
        });

        it('debería fallar al enviar solicitud a uno mismo', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/send')
                .set('Authorization', `Bearer ${token1}`)
                .send({ user2_id: user1.id });

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Ya existe una solicitud de amistad entre estos usuarios');
        });

        it('debería fallar cuando faltan parámetros', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/send')
                .set('Authorization', `Bearer ${token1}`)
                .send({});

            expect(res.status).toBe(404);
                expect(res.body.error).toBe('Uno o ambos usuarios no existen');
        });
    });
});