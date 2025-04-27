import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import { Op } from 'sequelize';

// Variables compartidas para tests
let userId;
let playlistId;
let nonExistentPlaylistId = 9999;

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Pruebas sobre /api/ratingPlaylist', () => {
    // Configuración inicial antes de todas las pruebas
    beforeAll(async () => {
        await delay(100);
        // Crear usuario de prueba
        const user = await db.user.create({
            nickname: 'usuarioRating',
            mail: 'usuariorating@test.com',
            password: 'Password123',
            style_fav: 'pop',
            is_premium: false
        });
        userId = user.id;

        // Crear playlist de prueba
        const playlist = await db.playlist.create({
            name: 'Playlist de prueba para ratings',
            description: 'Descripción de prueba',
            user_id: userId,
            cover_image: 'default.jpg',
            is_private: false
        });
        playlistId = playlist.id;
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        // Eliminar valoraciones
        await db.playlist_feedback.destroy({
            where: {
                [Op.or]: [
                    { playlist_id: playlistId },
                    { user_id: userId }
                ]
            }
        });

        // Eliminar playlist
        await db.playlist.destroy({ where: { id: playlistId } });

        // Eliminar usuario
        await db.user.destroy({ where: { id: userId } });
    });

    describe('POST /api/ratingPlaylist/:id/rate', () => {
        it('Debería añadir una valoración correctamente', async () => {
            const response = await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 4
                });

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Valoración añadida correctamente');
            expect(response.body.averageRating).toBeDefined();
        });

        it('Debería actualizar una valoración existente', async () => {
            // Primero añadir una valoración
            await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 3
                });

            // Luego actualizarla
            const response = await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 5
                });

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Valoración actualizada correctamente');
            expect(response.body.averageRating).toBeDefined();
        });

        it('Debería rechazar una valoración con datos inválidos', async () => {
            // Caso 1: Rating fuera de rango (mayor que 5)
            let response = await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 6
                });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Datos inválidos');

            // Caso 2: Rating fuera de rango (menor que 1)
            response = await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 0
                });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Datos inválidos');

            // Caso 3: Sin user_id
            response = await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    rating: 4
                });

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Datos inválidos');
        });

        it('Debería rechazar una valoración para una playlist inexistente', async () => {
            const response = await request(BASE_URL)
                .post(`/api/ratingPlaylist/${nonExistentPlaylistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 4
                });

            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Playlist no encontrada');
        });
    });

    describe('GET /api/ratingPlaylist/:id/rating', () => {
        beforeEach(async () => {
            // Asegurar que hay una valoración para probar
            await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 4
                });
        });

        it('Debería obtener la valoración promedio correctamente', async () => {
            const response = await request(BASE_URL)
                .get(`/api/ratingPlaylist/${playlistId}/rating`);

            expect(response.status).toBe(200);
            expect(response.body.averageRating).toBeDefined();
        });

        it('Debería devolver 0 para una playlist sin valoraciones', async () => {
            // Crear una nueva playlist que no tendrá valoraciones
            const newPlaylist = await db.playlist.create({
                name: 'Playlist sin valoraciones',
                description: 'Descripción de prueba',
                user_id: userId,
                cover_image: 'default.jpg',
                is_private: false
            });

            const response = await request(BASE_URL)
                .get(`/api/ratingPlaylist/${newPlaylist.id}/rating`);

            expect(response.status).toBe(200);
            expect(response.body.averageRating).toBe('0.00');

            // Limpiar
            await db.playlist.destroy({ where: { id: newPlaylist.id } });
        });

        it('Debería rechazar una solicitud con ID de playlist inválido', async () => {
            const response = await request(BASE_URL)
                .get('/api/ratingPlaylist/invalid-id/rating');

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('ID de playlist inválido');
        });
    });

    describe('GET /api/ratingPlaylist/:id/user-rating', () => {
        beforeEach(async () => {
            // Asegurar que hay una valoración para probar
            await request(BASE_URL)
                .post(`/api/ratingPlaylist/${playlistId}/rate`)
                .send({
                    user_id: userId,
                    rating: 4
                });
        });

        it('Debería obtener la valoración de un usuario correctamente', async () => {
            const response = await request(BASE_URL)
                .get(`/api/ratingPlaylist/${playlistId}/user-rating?userId=${userId}`);

            expect(response.status).toBe(200);
            expect(response.body.userRating).toBe(4);
        });

        it('Debería devolver 0 si el usuario no ha valorado la playlist', async () => {
            // Crear un nuevo usuario que no valorará ninguna playlist
            const newUser = await db.user.create({
                nickname: 'usuarioSinRating',
                mail: 'usuariosinrating@test.com',
                password: 'Password123',
                style_fav: 'rock',
                is_premium: false
            });

            const response = await request(BASE_URL)
                .get(`/api/ratingPlaylist/${playlistId}/user-rating?userId=${newUser.id}`);

            expect(response.status).toBe(200);
            expect(response.body.userRating).toBe(0);

            // Limpiar
            await db.user.destroy({ where: { id: newUser.id } });
        });

        it('Debería rechazar una solicitud con IDs inválidos', async () => {
            // Caso 1: ID de playlist inválido
            let response = await request(BASE_URL)
                .get(`/api/ratingPlaylist/invalid-id/user-rating?userId=${userId}`);

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('IDs inválidos');

            // Caso 2: ID de usuario inválido
            response = await request(BASE_URL)
                .get(`/api/ratingPlaylist/${playlistId}/user-rating?userId=invalid-id`);

            expect(response.status).toBe(400);
            expect(response.body.error).toBe('IDs inválidos');
        });
    });
});