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
                    { user1_id: [userId, friendId, nonFriendId] },
                    { user2_id: [userId, friendId, nonFriendId] }
                ]
            }
        });

        // Eliminar solo las amistades relacionadas con los usuarios de prueba
        await db.friendship.destroy({
            where: {
                [Op.or]: [
                    { user1_id: [userId, friendId, nonFriendId] },
                    { user2_id: [userId, friendId, nonFriendId] }
                ]
            }
        });

        // Eliminar los usuarios de prueba
        await db.user.destroy({ where: { id: userId } });
        await db.user.destroy({ where: { id: friendId } });
        await db.user.destroy({ where: { id: nonFriendId } });
    });

    // Test envío de mensaje exitoso
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

    // Test envío sin token
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

    // Test envío con token inválido
    it('Debería rechazar el envío si el token es inválido', async () => {
        const invalidToken = 'tokeninvalido123456';

        const response = await request(BASE_URL)
            .post('/api/chat/send')
            .set('Authorization', `Bearer ${invalidToken}`)
            .send({
                user2_id: friendId,
                message: 'Este mensaje no debería enviarse'
            });

        // Pilla el catch de 500
        expect(response.status).toBe(500);
        expect(response.body.error).toBe('Error al enviar mensaje');
    });

    // Test envío a un usuario que no es amigo
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

    // Test envío sin ID del destinatario
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

    // Test envío sin mensaje
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