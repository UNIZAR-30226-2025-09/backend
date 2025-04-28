import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import { generateToken } from './utils/generateToken.js';

const SECRET_KEY = process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z';

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Variables compartidas para tests
let sharedToken;
let userId;
let friendId;
let nonFriendId;

describe('Pruebas sobre /api/chat', () => {
    // Configuración inicial antes de todas las pruebas
    beforeAll(async () => {
        await delay(100);

        // Crear usuario principal para pruebas
        const user = await db.user.create({
            nickname: 'usuarioChat',
            mail: 'usuariochat@test.com',
            password: 'Password123',
            style_fav: 'pop',
            is_premium: false
        });
        userId = user.id;

        // Crear otro usuario (será amigo)
        const friend = await db.user.create({
            nickname: 'amigoChat',
            mail: 'amigochat@test.com',
            password: 'Password123',
            style_fav: 'rock',
            is_premium: false
        });
        friendId = friend.id;

        // Crear un tercer usuario (no será amigo)
        const nonFriend = await db.user.create({
            nickname: 'noAmigoChat',
            mail: 'noamigochat@test.com',
            password: 'Password123',
            style_fav: 'jazz',
            is_premium: false
        });
        nonFriendId = nonFriend.id;

        // Establecer amistad entre usuario principal y amigo
        await db.friendship.create({
            user1_id: userId,
            user2_id: friendId,
            state_friend_request: 'accepted'
        });

        // Generar token para el usuario principal
        sharedToken = generateToken(user);
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        // Eliminar solo los mensajes relacionados con los usuarios de prueba
        await db.chat.destroy({
            where: {
                [Op.or]: [
                    { user1_id: { [Op.in]: [userId, friendId, nonFriendId] } },
                    { user2_id: { [Op.in]: [userId, friendId, nonFriendId] } }
                ]
            }
        });

        // Eliminar solo las amistades relacionadas con los usuarios de prueba
        await db.friendship.destroy({
            where: {
                [Op.or]: [
                    { user1_id: { [Op.in]: [userId, friendId, nonFriendId] } },
                    { user2_id: { [Op.in]: [userId, friendId, nonFriendId] } }
                ]
            }
        });

        // Eliminar los usuarios de prueba
        await db.user.destroy({ where: { id: userId } });
        await db.user.destroy({ where: { id: friendId } });
        await db.user.destroy({ where: { id: nonFriendId } });
    });

    describe('POST /api/chat/send', () => {
        it('Debería enviar un mensaje correctamente a un amigo', async () => {
            const response = await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    user2_id: friendId,
                    message: 'Hola amigo, este es un mensaje de prueba'
                });

            expect(response.status).toBe(201);
            expect(response.body.message).toBe('Mensaje enviado correctamente');
            expect(response.body.data.txt_message).toBe('Hola amigo, este es un mensaje de prueba');
            expect(response.body.data.user1_id).toBe(userId);
            expect(response.body.data.user2_id).toBe(friendId);
        });

        it('Debería rechazar el envío si no se proporciona token', async () => {
            const response = await request(BASE_URL)
                .post('/api/chat/send')
                .send({
                    user2_id: friendId,
                    message: 'Este mensaje no debería enviarse'
                });

            expect(response.status).toBe(401);
            expect(response.body.error).toBe('Token no proporcionado');
        });

        it('Debería rechazar el envío si el token es inválido', async () => {
            const invalidToken = 'tokeninvalido123456';

            const response = await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${invalidToken}`)
                .send({
                    user2_id: friendId,
                    message: 'Este mensaje no debería enviarse'
                });

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Error al enviar mensaje');
        });

        it('Debería rechazar el envío a un usuario que no es amigo', async () => {
            const response = await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    user2_id: nonFriendId,
                    message: 'Este mensaje no debería enviarse'
                });

            expect(response.status).toBe(403);
            expect(response.body.error).toBe('No puedes enviar mensajes a este usuario porque no son amigos');
        });

        it('Debería rechazar el envío si no se proporciona ID del destinatario', async () => {
            const response = await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    message: 'Este mensaje no debería enviarse'
                });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Se requiere ID de destinatario y mensaje');
        });

        it('Debería rechazar el envío si no se proporciona mensaje', async () => {
            const response = await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    user2_id: friendId
                });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Se requiere ID de destinatario y mensaje');
        });
    });

    describe('GET /api/chat/conversation/:friendId', () => {
        beforeEach(async () => {
            // Enviar un mensaje para asegurar que hay algo que recuperar
            await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    user2_id: friendId,
                    message: 'Mensaje de prueba para conversación'
                });
        });

        it('Debería obtener la conversación con un amigo correctamente', async () => {
            const response = await request(BASE_URL)
                .get(`/api/chat/conversation/${friendId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.messages)).toBe(true);
            expect(response.body.count).toBeGreaterThan(0);
            // Verificar que al menos contiene el mensaje que acabamos de enviar
            expect(response.body.messages.some(msg =>
                msg.txt_message === 'Mensaje de prueba para conversación'
            )).toBe(true);
        });

        it('Debería rechazar la obtención de conversación si no hay token', async () => {
            const response = await request(BASE_URL)
                .get(`/api/chat/conversation/${friendId}`);

            expect(response.status).toBe(401);
            expect(response.body.error).toBe('Token no proporcionado');
        });

        it('Debería rechazar la obtención de conversación si el token es inválido', async () => {
            const invalidToken = 'tokeninvalido123456';

            const response = await request(BASE_URL)
                .get(`/api/chat/conversation/${friendId}`)
                .set('Authorization', `Bearer ${invalidToken}`);

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Error al obtener conversación');
        });

        it('Debería rechazar la obtención de conversación con un usuario que no es amigo', async () => {
            const response = await request(BASE_URL)
                .get(`/api/chat/conversation/${nonFriendId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(response.status).toBe(403);
            expect(response.body.error).toBe('No puedes ver mensajes con este usuario porque no son amigos');
        });

        it('Debería marcar los mensajes como leídos al obtener la conversación', async () => {
            // Enviar mensaje desde el amigo al usuario
            const friendToken = generateToken({id: friendId});

            await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${friendToken}`)
                .send({
                    user2_id: userId,
                    message: 'Mensaje no leído de prueba'
                });

            // Verificar que el mensaje está como no leído
            let messages = await db.chat.findAll({
                where: {
                    user1_id: friendId,
                    user2_id: userId,
                    read: false
                }
            });

            expect(messages.length).toBeGreaterThan(0);

            // Obtener la conversación
            await request(BASE_URL)
                .get(`/api/chat/conversation/${friendId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            // Verificar que ahora están marcados como leídos
            messages = await db.chat.findAll({
                where: {
                    user1_id: friendId,
                    user2_id: userId,
                    read: false
                }
            });

            expect(messages.length).toBe(0);
        });
    });

    describe('GET /api/chat/conversations', () => {
        beforeEach(async () => {
            // Enviar un mensaje para asegurar que hay conversación
            await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    user2_id: friendId,
                    message: 'Mensaje para listado de conversaciones'
                });
        });

        it('Debería obtener todas las conversaciones del usuario correctamente', async () => {
            const response = await request(BASE_URL)
                .get('/api/chat/conversations')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.conversations)).toBe(true);
            expect(response.body.count).toBeGreaterThan(0);
            expect(response.body.conversations[0].friend.id).toBe(friendId);
            expect(response.body.conversations[0].lastMessage).not.toBeNull();
        });

        it('Debería rechazar la obtención de conversaciones si no hay token', async () => {
            const response = await request(BASE_URL)
                .get('/api/chat/conversations');

            expect(response.status).toBe(401);
            expect(response.body.error).toBe('Token no proporcionado');
        });

        it('Debería rechazar la obtención de conversaciones si el token es inválido', async () => {
            const invalidToken = 'tokeninvalido123456';

            const response = await request(BASE_URL)
                .get('/api/chat/conversations')
                .set('Authorization', `Bearer ${invalidToken}`);

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Error al obtener conversaciones');
        });

        it('Debería mostrar el conteo correcto de mensajes no leídos', async () => {
            // Enviar mensaje desde el amigo al usuario
            const friendToken = generateToken({id: friendId});

            await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${friendToken}`)
                .send({
                    user2_id: userId,
                    message: 'Mensaje no leído para verificar conteo'
                });

            const response = await request(BASE_URL)
                .get('/api/chat/conversations')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(response.status).toBe(200);
            const friendConversation = response.body.conversations.find(
                conv => conv.friend.id === friendId
            );
            expect(friendConversation).toBeDefined();
            expect(friendConversation.unreadCount).toBeGreaterThan(0);
        });

        it('Debería ordenar las conversaciones por fecha del último mensaje', async () => {
            // Esperar un momento para asegurar diferencia de tiempo
            await delay(100);

            // Enviar un mensaje más reciente
            await request(BASE_URL)
                .post('/api/chat/send')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({
                    user2_id: friendId,
                    message: 'Mensaje más reciente para verificar orden'
                });

            const response = await request(BASE_URL)
                .get('/api/chat/conversations')
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(response.status).toBe(200);

            // Si hay más de una conversación, verificar el orden
            if (response.body.count > 1) {
                const dates = response.body.conversations.map(
                    conv => new Date(conv.lastMessage.sent_at).getTime()
                );
                // Verificar que estén en orden descendente
                expect(dates[0]).toBeGreaterThanOrEqual(dates[1]);
            }
        });
    });
});