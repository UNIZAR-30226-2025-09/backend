import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { generateToken } from '#test/utils/generateToken';

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Pruebas sobre /api/social', () => {
    let token1, token2, token3, token4;
    let user1, user2, user3, user4;

    // Configuración inicial antes de las pruebas
    beforeAll(async () => {
        // Esperar a que se inicialice la conexión de la base de datos
        await delay(100);

        // Crear usuarios de prueba
        const hashedPassword = await bcrypt.hash('password123', 10);

        // Primero limpiamos usuarios existentes con los mismos nicknames
        await db.user.destroy({
            where: {
                nickname: ['socialtest1', 'socialtest2', 'socialtest3']
            }
        });

        user1 = await db.user.create({
            nickname: 'socialtest1',
            mail: 'socialtest1@test.com',
            password: hashedPassword
        });

        user2 = await db.user.create({
            nickname: 'socialtest2',
            mail: 'socialtest2@test.com',
            password: hashedPassword
        });

        user3 = await db.user.create({
            nickname: 'socialtest3',
            mail: 'socialtest3@test.com',
            password: hashedPassword
        });

        user4 = await db.user.create({
            nickname: 'socialtest4',
            mail: 'socialtest4@test.com',
            password: hashedPassword
        });

        // Generar tokens para los usuarios
        token1 = generateToken(user1);
        token2 = generateToken(user2);
        token3 = generateToken(user3);
        token4 = generateToken(user4);

        // Crear una amistad aceptada entre user1 y user4 que persistirá durante todas las pruebas
        await db.friendship.create({
            user1_id: user1.id,
            user2_id: user4.id,
            state_friend_request: 'accepted'
        });
    });

    beforeEach(async () => {
        // Limpiamos solicitudes existentes EXCEPTO la relación aceptada entre user1 y user4
        await db.friendship.destroy({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            { user1_id: [user1?.id, user2?.id, user3?.id].filter(Boolean) },
                            { user2_id: [user1?.id, user2?.id, user3?.id].filter(Boolean) }
                        ]
                    },
                    {
                        [Op.not]: [
                            {
                                [Op.and]: [
                                    { user1_id: user1?.id },
                                    { user2_id: user4?.id },
                                    { state_friend_request: 'accepted' }
                                ]
                            }
                        ]
                    }
                ]
            }
        });

        // Crear una solicitud de amistad de user3 a user2 para los tests que necesitan
        // una solicitud preexistente
        if (user2 && user3) {
            await db.friendship.create({
                user1_id: user3.id,
                user2_id: user2.id,
                state_friend_request: 'pending'
            });
        }
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        if (user1 && user2 && user3 && user4) {
            // Eliminar TODAS las solicitudes de amistad incluyendo la aceptada
            await db.friendship.destroy({
                where: {
                    [Op.or]: [
                        { user1_id: [user1.id, user2.id, user3.id, user4.id] },
                        { user2_id: [user1.id, user2.id, user3.id, user4.id] }
                    ]
                }
            });

            // Eliminar los usuarios de prueba
            await db.user.destroy({
                where: {
                    id: [user1.id, user2.id, user3.id, user4.id]
                }
            });
        }
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
            // Primero creamos una solicitud
            await request(BASE_URL)
                .post('/api/social/send')
                .set('Authorization', `Bearer ${token1}`)
                .send({ user2_id: user2.id });

            // Luego intentamos crear otra igual
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

    describe('POST /api/social/accept', () => {
        it('debería aceptar una solicitud de amistad correctamente', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/accept')
                .set('Authorization', `Bearer ${token2}`)
                .send({ user1_id: user3.id });

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Solicitud de amistad aceptada correctamente');
            expect(res.body.friendship.state_friend_request).toBe('accepted');
        });

        it('debería fallar si falta el token', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/accept')
                .send({ user1_id: user3.id });

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar si la solicitud no existe', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/accept')
                .set('Authorization', `Bearer ${token2}`)
                .send({ user1_id: 99999 });

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Solicitud de amistad no encontrada o no tienes permisos para aceptarla');
        });

        it('debería fallar si otro usuario intenta aceptar la solicitud', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/accept')
                .set('Authorization', `Bearer ${token1}`)
                .send({ user1_id: user3.id });

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Solicitud de amistad no encontrada o no tienes permisos para aceptarla');
        });
    });

    describe('POST /api/social/reject', () => {

        it('debería permitir al receptor rechazar una solicitud', async () => {
            // Creamos una solicitud de user1 a user2 para este test específico
            await db.friendship.create({
                user1_id: user1.id,
                user2_id: user2.id,
                state_friend_request: 'pending'
            });

            const res = await request(BASE_URL)
                .post('/api/social/reject')
                .set('Authorization', `Bearer ${token2}`)
                .send({ friendId: user1.id });

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Solicitud de amistad eliminada correctamente');
        });

        it('debería permitir al emisor cancelar su solicitud', async () => {
            // Creamos una solicitud de user1 a user2 para este test
            await db.friendship.create({
                user1_id: user1.id,
                user2_id: user2.id,
                state_friend_request: 'pending'
            });

            const res = await request(BASE_URL)
                .post('/api/social/reject')
                .set('Authorization', `Bearer ${token1}`)
                .send({ friendId: user2.id });

            expect(res.status).toBe(200);
            expect(res.body.message).toBe('Solicitud de amistad eliminada correctamente');
        });

        it('debería fallar si falta el token', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/reject')
                .send({ friendId: user1.id });

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar si la solicitud no existe', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/reject')
                .set('Authorization', `Bearer ${token1}`)
                .send({ friendId: 99999 });

            expect(res.status).toBe(404);
            expect(res.body.error).toBe('Solicitud de amistad no encontrada');
        });

        it('no debería permitir eliminar una relación de amistad ya aceptada', async () => {
            // Intentamos eliminar la relación de amistad aceptada entre user1 y user4
            const res = await request(BASE_URL)
                .post('/api/social/reject')
                .set('Authorization', `Bearer ${token1}`)
                .send({ friendId: user4.id });

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('No se puede eliminar una relación de amistad ya establecida');

            // Verificamos que la amistad sigue existiendo
            const checkFriendship = await db.friendship.findOne({
                where: {
                    user1_id: user1.id,
                    user2_id: user4.id
                }
            });
            expect(checkFriendship).not.toBeNull();
            expect(checkFriendship.state_friend_request).toBe('accepted');
        });
    });

    describe('POST /api/social/searchNewFriends', () => {
        it('debería buscar usuarios por nickname sin incluir amigos', async () => {
            const searchTerm = 'socialtest';

            const res = await request(BASE_URL)
                .post('/api/social/searchNewFriends')
                .set('Authorization', `Bearer ${token1}`)
                .query({ search: searchTerm });

            expect(res.status).toBe(200);
            expect(res.body.users).toBeDefined();
            expect(Array.isArray(res.body.users)).toBe(true);
            expect(res.body.count).toBeDefined();

            // Verificar que user2 y user3 aparecen en los resultados (no son amigos de user1)
            const foundIds = res.body.users.map(user => user.id);
            expect(foundIds).toContain(user2.id);
            expect(foundIds).toContain(user3.id);

            // Verificar que user4 NO aparece en los resultados (ya es amigo de user1)
            expect(foundIds).not.toContain(user4.id);

            // Verificar que el propio usuario (user1) no aparece en los resultados
            expect(foundIds).not.toContain(user1.id);
        });

        it('debería devolver array vacío si no hay coincidencias', async () => {
            const searchTerm = 'usuarioinexistente';

            const res = await request(BASE_URL)
                .post('/api/social/searchNewFriends')
                .set('Authorization', `Bearer ${token1}`)
                .query({ search: searchTerm });

            expect(res.status).toBe(200);
            expect(res.body.users).toBeDefined();
            expect(Array.isArray(res.body.users)).toBe(true);
            expect(res.body.users.length).toBe(0);
            expect(res.body.count).toBe(0);
        });

        it('debería fallar si no se proporciona un término de búsqueda', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/searchNewFriends')
                .set('Authorization', `Bearer ${token1}`);

            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Debes proporcionar un término de búsqueda');
        });

        it('debería fallar si falta el token de autenticación', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/searchNewFriends')
                .query({ search: 'test' });

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería mostrar diferentes resultados según el usuario autenticado', async () => {
            // Crear una amistad entre user2 y user3 para este test específico
            await db.friendship.create({
                user1_id: user2.id,
                user2_id: user3.id,
                state_friend_request: 'accepted'
            });

            const searchTerm = 'socialtest';

            // Búsqueda desde user1
            const res1 = await request(BASE_URL)
                .post('/api/social/searchNewFriends')
                .set('Authorization', `Bearer ${token1}`)
                .query({ search: searchTerm });

            // Búsqueda desde user2
            const res2 = await request(BASE_URL)
                .post('/api/social/searchNewFriends')
                .set('Authorization', `Bearer ${token2}`)
                .query({ search: searchTerm });

            // Para user1: user4 no debe aparecer (ya es amigo) pero user2 y user3 sí deben aparecer
            const foundIds1 = res1.body.users.map(user => user.id);
            expect(foundIds1).not.toContain(user4.id);
            expect(foundIds1).toContain(user2.id);
            expect(foundIds1).toContain(user3.id);

            // Para user2: user3 no debe aparecer (ya es amigo) pero user1 y user4 sí deben aparecer
            const foundIds2 = res2.body.users.map(user => user.id);
            expect(foundIds2).not.toContain(user3.id);
            expect(foundIds2).toContain(user1.id);
            expect(foundIds2).toContain(user4.id);

            // Limpiamos la amistad creada para este test
            await db.friendship.destroy({
                where: {
                    user1_id: user2.id,
                    user2_id: user3.id
                }
            });
        });
    });

    describe('POST /api/social/getSentFriendRequests', () => {
        let testFriendshipId;

        it('debería obtener las solicitudes de amistad enviadas', async () => {
            // Creamos una solicitud de user1 a user2 para este test
            const friendship = await db.friendship.create({
                user1_id: user1.id,
                user2_id: user2.id,
                state_friend_request: 'pending'
            });

            testFriendshipId = friendship.id;

            const res = await request(BASE_URL)
                .post('/api/social/getSentFriendRequests')
                .set('Authorization', `Bearer ${token1}`);

            expect(res.status).toBe(200);
            expect(res.body.sentRequests).toBeDefined();
            expect(Array.isArray(res.body.sentRequests)).toBe(true);
            expect(res.body.count).toBeDefined();

            // Verificar que la solicitud a user2 aparece en los resultados
            const foundRequest = res.body.sentRequests.find(req => req.friendId === user2.id);
            expect(foundRequest).toBeDefined();
            expect(foundRequest.nickname).toBe('socialtest2');
            expect(foundRequest.state).toBe('pending');

            // Limpiamos la solicitud creada para este test
            await db.friendship.destroy({
                where: {
                    user1_id: user1.id,
                    user2_id: user2.id
                }
            });
        });

        it('debería devolver un array vacío si no hay solicitudes enviadas', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getSentFriendRequests')
                .set('Authorization', `Bearer ${token2}`);

            expect(res.status).toBe(200);
            expect(res.body.sentRequests).toBeDefined();
            expect(Array.isArray(res.body.sentRequests)).toBe(true);
            expect(res.body.sentRequests.length).toBe(0);
            expect(res.body.count).toBe(0);
        });

        it('debería fallar si no hay token de autenticación', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getSentFriendRequests');

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar con token inválido', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getSentFriendRequests')
                .set('Authorization', 'Bearer tokeninvalido123');

            expect(res.status).toBeGreaterThanOrEqual(401);
            expect(res.body.error).toBeDefined();
        });
    });

    describe('POST /api/social/getReceivedFriendRequests', () => {
        it('debería obtener las solicitudes de amistad recibidas', async () => {
            // user3 ya tiene una solicitud enviada a user2 (creada en beforeEach)
            const res = await request(BASE_URL)
                .post('/api/social/getReceivedFriendRequests')
                .set('Authorization', `Bearer ${token2}`);

            expect(res.status).toBe(200);
            expect(res.body.receivedRequests).toBeDefined();
            expect(Array.isArray(res.body.receivedRequests)).toBe(true);
            expect(res.body.count).toBeDefined();

            // Verificar que la solicitud de user3 aparece en los resultados
            const foundRequest = res.body.receivedRequests.find(req => req.friendId === user3.id);
            expect(foundRequest).toBeDefined();
            expect(foundRequest.nickname).toBe('socialtest3');
            expect(foundRequest.state).toBe('pending');
        });

        it('debería devolver un array vacío si no hay solicitudes recibidas', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getReceivedFriendRequests')
                .set('Authorization', `Bearer ${token1}`);

            expect(res.status).toBe(200);
            expect(res.body.receivedRequests).toBeDefined();
            expect(Array.isArray(res.body.receivedRequests)).toBe(true);
            expect(res.body.receivedRequests.length).toBe(0);
            expect(res.body.count).toBe(0);
        });

        it('debería fallar si no hay token de autenticación', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getReceivedFriendRequests');

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar con token inválido', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getReceivedFriendRequests')
                .set('Authorization', 'Bearer tokeninvalido123');

            expect(res.status).toBeGreaterThanOrEqual(401);
            expect(res.body.error).toBeDefined();
        });
    });

    describe('POST /api/social/getFriendsList', () => {
        it('debería obtener la lista de amigos del usuario', async () => {
            // user1 ya tiene una amistad aceptada con user4 (creada en beforeAll)
            const res = await request(BASE_URL)
                .post('/api/social/getFriendsList')
                .set('Authorization', `Bearer ${token1}`);

            expect(res.status).toBe(200);
            expect(res.body.friends).toBeDefined();
            expect(Array.isArray(res.body.friends)).toBe(true);
            expect(res.body.count).toBeDefined();

            // Verificar que user4 aparece como amigo de user1
            const foundFriend = res.body.friends.find(friend => friend.friendId === user4.id);
            expect(foundFriend).toBeDefined();
            expect(foundFriend.nickname).toBe('socialtest4');
            expect(foundFriend.friendshipId).toBeDefined();
        });

        it('debería devolver un array vacío si el usuario no tiene amigos', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getFriendsList')
                .set('Authorization', `Bearer ${token2}`);

            expect(res.status).toBe(200);
            expect(res.body.friends).toBeDefined();
            expect(Array.isArray(res.body.friends)).toBe(true);
            expect(res.body.friends.length).toBe(0);
            expect(res.body.count).toBe(0);
        });

        it('debería incluir amistades donde el usuario es receptor (user2)', async () => {
            // Crear una amistad aceptada donde user3 es el remitente y user2 el receptor
            await db.friendship.update(
                { state_friend_request: 'accepted' },
                {
                    where: {
                        user1_id: user3.id,
                        user2_id: user2.id
                    }
                }
            );

            const res = await request(BASE_URL)
                .post('/api/social/getFriendsList')
                .set('Authorization', `Bearer ${token2}`);

            expect(res.status).toBe(200);
            expect(res.body.friends.length).toBe(1);
            expect(res.body.friends[0].friendId).toBe(user3.id);
            expect(res.body.friends[0].nickname).toBe('socialtest3');
            expect(res.body.friends[0].friendshipId).toBe(`${user3.id}_${user2.id}`);
        });

        it('debería incluir amistades donde el usuario es remitente (user1)', async () => {
            // La amistad entre user1 y user4 ya existe (user1 es remitente)
            const res = await request(BASE_URL)
                .post('/api/social/getFriendsList')
                .set('Authorization', `Bearer ${token1}`);

            expect(res.status).toBe(200);
            expect(res.body.friends.length).toBe(1);
            expect(res.body.friends[0].friendId).toBe(user4.id);
            expect(res.body.friends[0].nickname).toBe('socialtest4');
            expect(res.body.friends[0].friendshipId).toBe(`${user1.id}_${user4.id}`);
        });

        it('debería fallar si no hay token de autenticación', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getFriendsList');

            expect(res.status).toBe(401);
            expect(res.body.error).toBe('Token no proporcionado');
        });

        it('debería fallar con token inválido', async () => {
            const res = await request(BASE_URL)
                .post('/api/social/getFriendsList')
                .set('Authorization', 'Bearer tokeninvalido123');

            expect(res.status).toBeGreaterThanOrEqual(401);
            expect(res.body.error).toBeDefined();
        });
    });
});