import request from 'supertest';
import { BASE_URL } from '#test/data';
import db from '#models/index';
import { Op } from 'sequelize';

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Variables compartidas para tests
let userId;
let songId;
let playlistId;
let nonExistentUserId = 9999;

describe('Pruebas sobre /api/lastPlaybackState', () => {
    // Configuración inicial antes de todas las pruebas
    beforeAll(async () => {
        await delay(100);

        // Crear usuario para pruebas
        const user = await db.user.create({
            nickname: 'usuarioPlayback',
            mail: 'usuarioplayback@test.com',
            password: 'Password123',
            style_fav: 'pop',
            is_premium: false
        });
        userId = user.id;

        // Crear canción para pruebas
        const song = await db.song.create({
            name: 'Canción de prueba',
            duration: 180,
            url_mp3: 'test_song.mp3',
            genre: 'pop'
        });
        songId = song.id;

        // Crear playlist para pruebas
        const playlist = await db.playlist.create({
            name: 'Playlist de prueba',
            description: 'Descripción de prueba',
            user_id: userId,
            cover_image: 'default.jpg',
            is_private: false
        });
        playlistId = playlist.id;

        // Añadir la canción a la playlist
        await db.song_playlist.create({
            song_id: songId,
            playlist_id: playlistId
        });
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        try {
            // Eliminar estado de reproducción
            await db.lastPlaybackState.destroy({
                where: { userId }
            });

            // Eliminar relación song-playlist
            await db.song_playlist.destroy({
                where: {
                    song_id: songId,
                    playlist_id: playlistId
                }
            });

            // Eliminar playlist
            await db.playlist.destroy({ where: { id: playlistId } });

            // Eliminar canción
            await db.song.destroy({ where: { id: songId } });

            // Eliminar usuario
            await db.user.destroy({ where: { id: userId } });

            console.log('Limpieza completada correctamente');
        } catch (error) {
            console.error('Error durante la limpieza:', error);
        }
    });

    describe('POST /api/lastPlaybackState/:userId', () => {
        it('Debería crear un estado de reproducción correctamente', async () => {
            const response = await request(BASE_URL)
                .post(`/api/lastPlaybackState/${userId}`)
                .send({
                    positionMinutes: 1,
                    positionSeconds: 30,
                    songId: songId,
                    playlistId: playlistId
                });

            expect(response.status).toBe(201);
            expect(response.body.userId).toBe(userId);
            expect(response.body.positionMinutes).toBe(1);
            expect(response.body.positionSeconds).toBe(30);
            expect(response.body.songId).toBe(songId);
            expect(response.body.playlistId).toBe(playlistId);
        });

        it('Debería actualizar un estado de reproducción existente', async () => {
            const response = await request(BASE_URL)
                .post(`/api/lastPlaybackState/${userId}`)
                .send({
                    positionMinutes: 2,
                    positionSeconds: 15,
                    songId: songId,
                    playlistId: playlistId
                });

            expect(response.status).toBe(200);
            expect(response.body.userId).toBe(userId);
            expect(response.body.positionMinutes).toBe(2);
            expect(response.body.positionSeconds).toBe(15);
        });

        it('Debería manejar errores al actualizar el estado de reproducción', async () => {
            // Forzar un error usando un ID de canción no numérico
            const response = await request(BASE_URL)
                .post(`/api/lastPlaybackState/${userId}`)
                .send({
                    positionMinutes: 1,
                    positionSeconds: 30,
                    songId: 'no-numérico',
                    playlistId: playlistId
                });

            expect(response.status).toBe(500);
            expect(response.body.message).toBe('Error updating playback state.');
        });
    });

    describe('GET /api/lastPlaybackState/:userId', () => {
        beforeEach(async () => {
            // Asegurar que existe un estado de reproducción
            await request(BASE_URL)
                .post(`/api/lastPlaybackState/${userId}`)
                .send({
                    positionMinutes: 1,
                    positionSeconds: 30,
                    songId: songId,
                    playlistId: playlistId
                });
        });

        it('Debería obtener el estado de reproducción correctamente', async () => {
            const response = await request(BASE_URL)
                .get(`/api/lastPlaybackState/${userId}`);

            expect(response.status).toBe(200);
            expect(response.body.userId).toBe(userId);
            expect(response.body.songId).toBe(songId);
            expect(response.body.playlistId).toBe(playlistId);
            expect(response.body.song).toBeDefined();
            expect(response.body.playlist).toBeDefined();
        });

        it('Debería devolver 404 para un usuario sin estado de reproducción', async () => {
            const response = await request(BASE_URL)
                .get(`/api/lastPlaybackState/${nonExistentUserId}`);

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('No playback state found for this user.');
        });

        it('Debería manejar errores al obtener el estado de reproducción', async () => {
            // Forzar un error usando un ID de usuario no numérico
            const response = await request(BASE_URL)
                .get('/api/lastPlaybackState/no-numérico');

            expect(response.status).toBe(500);
            expect(response.body.message).toBe('Error retrieving playback state.');
        });
    });

    describe('DELETE /api/lastPlaybackState/:userId', () => {
        beforeEach(async () => {
            // Asegurar que existe un estado de reproducción
            await request(BASE_URL)
                .post(`/api/lastPlaybackState/${userId}`)
                .send({
                    positionMinutes: 1,
                    positionSeconds: 30,
                    songId: songId,
                    playlistId: playlistId
                });
        });

        it('Debería eliminar el estado de reproducción correctamente', async () => {
            const response = await request(BASE_URL)
                .delete(`/api/lastPlaybackState/${userId}`);

            expect(response.status).toBe(204);

            // Verificar que realmente fue eliminado
            const getResponse = await request(BASE_URL)
                .get(`/api/lastPlaybackState/${userId}`);

            expect(getResponse.status).toBe(404);
        });

        it('Debería devolver 404 al intentar eliminar un estado inexistente', async () => {
            const response = await request(BASE_URL)
                .delete(`/api/lastPlaybackState/${nonExistentUserId}`);

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('No playback state found for this user.');
        });

        it('Debería manejar errores al eliminar el estado de reproducción', async () => {
            // Forzar un error usando un ID de usuario no numérico
            const response = await request(BASE_URL)
                .delete('/api/lastPlaybackState/no-numérico');

            expect(response.status).toBe(500);
            expect(response.body.message).toBe('Error deleting playback state.');
        });
    });
});