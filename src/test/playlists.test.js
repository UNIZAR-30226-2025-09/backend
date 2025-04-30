import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import { Op } from 'sequelize';
import { generateToken } from './utils/generateToken.js';

// Función auxiliar para esperar
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Variables compartidas para tests
let sharedToken;
let userId;
let createdPlaylistId;
let songId;

describe('Pruebas sobre /api/playlists', () => {
    // Configuración inicial
    beforeAll(async () => {
        await delay(100);

        // Crear usuario para pruebas
        const user = await db.user.create({
            nickname: 'usuarioPlaylist',
            mail: 'usuarioplaylist@test.com',
            password: 'Password123',
            style_fav: 'pop',
            is_premium: false
        });
        userId = user.id;

        // Generar token para el usuario
        sharedToken = generateToken(user);

        // Crear una playlist para pruebas
        const playlist = await db.playlist.create({
            name: 'Playlist de prueba',
            description: 'Descripción de prueba',
            type: 'public',
            user_id: userId,
            front_page: 'playlist_images/default.png'
        });
        createdPlaylistId = playlist.id;

        // Obtener un ID de canción existente para pruebas
        const song = await db.song.findOne();
        if (song) songId = song.id;
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        // Eliminar relaciones de canciones con playlists
        await db.song_playlist.destroy({
            where: {
                playlist_id: { [Op.in]: [createdPlaylistId] }
            }
        });

        // Eliminar likes de playlists
        await db.playlist_like.destroy({
            where: {
                user_id: userId
            }
        });

        // Eliminar playlists creadas
        await db.playlist.destroy({
            where: {
                user_id: userId
            }
        });

        // Eliminar usuario de prueba
        await db.user.destroy({
            where: {
                id: userId
            }
        });
    });

    describe('GET /api/playlists', () => {
        it('Debería devolver todas las playlists', async () => {
            const res = await request(BASE_URL)
                .get('/api/playlists');

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe('GET /api/playlists/vibra', () => {
        it('Debería devolver las playlists de Vibra', async () => {
            const res = await request(BASE_URL)
                .get('/api/playlists/vibra');

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe('POST /api/playlists', () => {
        it('Debería crear una playlist correctamente', async () => {
            const playlistData = {
                name: 'Playlist Test Automatizado',
                description: 'Creada en pruebas automatizadas',
                type: 'public',
                front_page: 'playlist_images/default.png',
                user_id: userId
            };

            const res = await request(BASE_URL)
                .post('/api/playlists')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(playlistData);

            expect(res.status).toBe(201);
            expect(res.body.id).toBeDefined();
            expect(res.body.name).toBe(playlistData.name);
        });

        it('Debería fallar al crear una playlist sin nombre', async () => {
            const playlistData = {
                description: 'Sin nombre',
                type: 'public',
                user_id: userId
            };

            const res = await request(BASE_URL)
                .post('/api/playlists')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(playlistData);

            expect(res.status).toBe(500);
        });
    });

    describe('GET /api/playlists/:id', () => {
        it('Debería obtener una playlist por su ID', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/${createdPlaylistId}`);

            expect(res.status).toBe(200);
            expect(res.body.id).toBe(createdPlaylistId);
        });

        it('Debería devolver error con ID inválido', async () => {
            const res = await request(BASE_URL)
                .get('/api/playlists/invalid');

            expect(res.status).toBe(400);
        });
    });

    describe('PUT /api/playlists/:id', () => {
        it('Debería actualizar una playlist existente', async () => {
            const updateData = {
                name: 'Playlist Actualizada',
                description: 'Descripción actualizada',
                type: 'private'
            };

            const res = await request(BASE_URL)
                .put(`/api/playlists/${createdPlaylistId}`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send(updateData);

            expect(res.status).toBe(200);
            expect(res.body.name).toBe(updateData.name);
            expect(res.body.description).toBe(updateData.description);
        });
    });

    describe('POST /api/playlists/:id/like', () => {
        it('Debería dar like a una playlist', async () => {
            const res = await request(BASE_URL)
                .post(`/api/playlists/${createdPlaylistId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.message).toContain('Like agregado correctamente');
        });
    });

    describe('GET /api/playlists/:id/like', () => {
        it('Debería verificar si una playlist está marcada como favorita', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/${createdPlaylistId}/like?user_id=${userId}`);

            expect(res.status).toBe(200);
            expect(res.body.isLiked).toBe(true);
        });
    });

    describe('GET /api/playlists/liked/:userId', () => {
        it('Debería obtener las playlists favoritas del usuario', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/liked/${userId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.some(p => p.id === createdPlaylistId)).toBe(true);
        });
    });

    describe('GET /api/playlists/users/:userId/playlists', () => {
        it('Debería obtener las playlists creadas por el usuario', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/users/${userId}/playlists`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.some(p => p.user_id === userId)).toBe(true);
        });
    });

    describe('POST /api/playlists/songliked', () => {
        it('Debería crear u obtener la playlist "Me Gusta"', async () => {
            const res = await request(BASE_URL)
                .post('/api/playlists/songliked')
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.playlist).toBeDefined();
            expect(res.body.playlist.name).toBe('Me Gusta');
        });
    });

    describe('GET /api/playlists/liked-song/:userId', () => {
        it('Debería obtener la playlist "Me Gusta" del usuario', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/liked-song/${userId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body.typeP).toBe('Vibra_likedSong');
        });
    });

    describe('POST /api/playlists/:id/addSong', () => {
        it('Debería añadir una canción a la playlist', async () => {
            // Solo si tenemos un songId disponible
            if (songId) {
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/addSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(200);
                expect(res.body.message).toContain('añadida');
            } else {
                console.log('Test de addSong omitido: no hay canciones disponibles');
            }
        });

        it('Debería fallar al añadir la misma canción dos veces', async () => {
            // Solo si tenemos un songId disponible
            if (songId) {
                // Intentar añadir la misma canción otra vez
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/addSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(400);
                expect(res.body.error).toContain('ya está añadida');
            }
        });
    });

    describe('POST /api/playlists/:id/deleteSong', () => {
        it('Debería eliminar una canción de la playlist', async () => {
            // Solo si tenemos un songId disponible
            if (songId) {
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/deleteSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(200);
                expect(res.body.message).toContain('eliminada');
            }
        });

        it('Debería fallar al eliminar una canción que no está en la playlist', async () => {
            // Solo si tenemos un songId disponible
            if (songId) {
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/deleteSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(404);
                expect(res.body.error).toContain('no se encontró');
            }
        });
    });

    describe('POST /api/playlists/:playlistId/visit', () => {
        it('Debería registrar una visita a la playlist', async () => {
            const res = await request(BASE_URL)
                .post(`/api/playlists/${createdPlaylistId}/visit`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ userId });

            // Comprobar que el estado sea 200 o 201
            expect([200, 201]).toContain(res.status);
            expect(res.body.message).toMatch(/[Vv]isita/);
        });
    });

    describe('GET /api/playlists/recent/:userId', () => {
        it('Debería obtener las playlists visitadas recientemente', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/recent/${userId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe('DELETE /api/playlists/:id/like', () => {
        it('Debería quitar el like de una playlist', async () => {
            const res = await request(BASE_URL)
                .delete(`/api/playlists/${createdPlaylistId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.message).toContain('eliminado');
        });
    });

    describe('DELETE /api/playlists/:id', () => {
        it('Debería eliminar una playlist', async () => {
            // Crear una playlist específica para eliminar
            const playlist = await db.playlist.create({
                name: 'Playlist para eliminar',
                description: 'Esta playlist será eliminada',
                type: 'public',
                user_id: userId,
                front_page: 'playlist_images/default.png'
            });

            const res = await request(BASE_URL)
                .delete(`/api/playlists/${playlist.id}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body.message).toContain('eliminada');
        });
    });

    describe('POST /api/playlists/:id/:operation/handleSong', () => {
        it('Debería añadir una canción a la playlist (operation=add)', async () => {
            // Primero, necesitamos asegurarnos de que la canción no esté ya en la playlist
            if (songId) {
                // Intentar eliminar la canción primero (por si acaso estuviera)
                await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/deleteSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                // Ahora añadir la canción usando handleSong
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/add/handleSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(200);
                expect(res.body.message).toBeDefined();
                expect(res.body.operation).toBe('add');
                expect(res.body.newEntry).toBeDefined();
            }
        });

        it('Debería eliminar una canción de la playlist (operation=remove)', async () => {
            if (songId) {
                // Añadir la canción primero (si no está ya)
                try {
                    await request(BASE_URL)
                        .post(`/api/playlists/${createdPlaylistId}/addSong`)
                        .set('Authorization', `Bearer ${sharedToken}`)
                        .send({ songId });
                } catch (error) {
                    // Ignorar errores si la canción ya existe
                }

                // Ahora eliminar la canción usando handleSong
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/remove/handleSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(200);
                expect(res.body.message).toBeDefined();
                expect(res.body.operation).toBe('remove');
            }
        });

        it('Debería fallar con una operación inválida', async () => {
            if (songId) {
                const res = await request(BASE_URL)
                    .post(`/api/playlists/${createdPlaylistId}/invalid/handleSong`)
                    .set('Authorization', `Bearer ${sharedToken}`)
                    .send({ songId });

                expect(res.status).toBe(400);
                expect(res.body.error).toBeDefined();
            }
        });
    });

    describe('GET /api/playlists/:songId/songPlaylists', () => {
        it('Debería obtener las playlists que contienen una canción específica', async () => {
            if (songId) {
                // Primero añadimos la canción a la playlist
                try {
                    await request(BASE_URL)
                        .post(`/api/playlists/${createdPlaylistId}/addSong`)
                        .set('Authorization', `Bearer ${sharedToken}`)
                        .send({ songId });
                } catch (error) {
                    // Ignorar si ya existe
                }

                // Ahora consultamos las playlists que contienen la canción
                const res = await request(BASE_URL)
                    .get(`/api/playlists/${songId}/songPlaylists`);

                expect(res.status).toBe(200);
                expect(res.body.count).toBeDefined();
                expect(res.body.playlists).toBeDefined();
                expect(Array.isArray(res.body.playlists)).toBe(true);

                // Verificar que la playlist creada esté en el resultado
                const found = res.body.playlists.some(playlist =>
                    playlist.id === createdPlaylistId
                );
                expect(found).toBe(true);
            }
        });

        it('Debería devolver error con un ID de canción inválido', async () => {
            const res = await request(BASE_URL)
                .get('/api/playlists/invalid/songPlaylists');

            expect(res.status).toBe(400);
        });

        it('Debería devolver respuesta vacía para una canción sin playlists', async () => {
            // Intentamos con un ID de canción que probablemente no exista en ninguna playlist
            // (como no tenemos control total sobre la base de datos, este test podría fallar)
            const inexistentSongId = 999999;

            const res = await request(BASE_URL)
                .get(`/api/playlists/${inexistentSongId}/songPlaylists`);

            // Si la canción no existe, debería devolver 404
            // Si existe pero no está en playlists, debería devolver un array vacío
            if (res.status === 200) {
                expect(res.body.count).toBe(0);
                expect(res.body.playlists.length).toBe(0);
            } else {
                expect(res.status).toBe(404);
            }
        });
    });

    describe('GET /api/playlists/:playlistId/isOwner/:userId', () => {
        it('Debería confirmar que un usuario es propietario de su playlist', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/${createdPlaylistId}/isOwner/${userId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(res.body.isOwner).toBe(true);
            expect(res.body.playlistId).toBe(createdPlaylistId);
            expect(res.body.userId).toBe(userId);
            expect(res.body.playlist).toBeDefined();
        });

        it('Debería confirmar que un usuario NO es propietario de otra playlist', async () => {
            // Encontrar una playlist que no pertenezca al usuario de prueba
            const otherPlaylist = await db.playlist.findOne({
                where: {
                    user_id: { [Op.ne]: userId }
                }
            });

            if (otherPlaylist) {
                const res = await request(BASE_URL)
                    .get(`/api/playlists/${otherPlaylist.id}/isOwner/${userId}`)
                    .set('Authorization', `Bearer ${sharedToken}`);

                expect(res.status).toBe(200);
                expect(res.body.isOwner).toBe(false);
                expect(res.body.playlistId).toBe(otherPlaylist.id);
                expect(res.body.userId).toBe(userId);
            } else {
                console.log('No se encontró una playlist de otro usuario para probar');
            }
        });

        it('Debería fallar con un ID de playlist inválido', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/invalid/isOwner/${userId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(400);
            expect(res.body.error).toBeDefined();
        });

        it('Debería fallar con un ID de usuario inválido', async () => {
            const res = await request(BASE_URL)
                .get(`/api/playlists/${createdPlaylistId}/isOwner/invalid`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(400);
            expect(res.body.error).toBeDefined();
        });

        it('Debería devolver 404 para una playlist inexistente', async () => {
            const nonExistentPlaylistId = 999999;

            const res = await request(BASE_URL)
                .get(`/api/playlists/${nonExistentPlaylistId}/isOwner/${userId}`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(404);
            expect(res.body.error).toBeDefined();
        });
    });
});