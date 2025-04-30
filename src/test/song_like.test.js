import request from 'supertest';
import { BASE_URL } from './data.js';
import db from '#models/index';
import { Op } from 'sequelize';
import { generateToken } from './utils/generateToken.js';

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Variables compartidas para tests
let sharedToken;
let userId;
let songId;

describe("Rutas de song_like", () => {
    // Configuración inicial antes de todas las pruebas
    beforeAll(async () => {
        await delay(100);

        // Crear usuario para pruebas
        const user = await db.user.create({
            nickname: 'usuarioLikes',
            mail: 'usuariolikes@test.com',
            password: 'Password123',
            style_fav: 'pop',
            is_premium: false
        });
        userId = user.id;

        // Generar token para el usuario
        sharedToken = generateToken(user);

        // Obtener una canción real para hacer las pruebas
        const song = await db.song.findOne();
        if (!song) {
            // Si no hay canciones, creamos una para las pruebas
            const newSong = await db.song.create({
                name: 'Canción de prueba para likes',
                type: 'track',
                duration: 180,
                url_mp3: 'test_song.mp3',
                genre: 'pop'
            });
            songId = newSong.id;
        } else {
            songId = song.id;
        }
    });

    // Limpieza después de todas las pruebas
    afterAll(async () => {
        // Eliminar los likes de prueba
        await db.song_like.destroy({
            where: { user_id: userId }
        });

        // Eliminar la playlist de "Me Gusta" creada durante las pruebas
        await db.playlist.destroy({
            where: {
                user_id: userId,
                typeP: 'Vibra_likedSong'
            }
        });

        // Eliminar el usuario de prueba
        await db.user.destroy({
            where: { id: userId }
        });
    });

    // Limpiar likes después de cada prueba
    afterEach(async () => {
        // Eliminar cualquier like creado durante la prueba
        await db.song_like.destroy({
            where: { user_id: userId }
        });
    });

    describe("POST /api/song_like/:id/likeUnlike", () => {
        it("Debería dar like a la canción (toggle)", async () => {
            const res = await request(BASE_URL)
                .post(`/api/song_like/${songId}/likeUnlike`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.liked).toBe(true);
            expect(res.body.message).toContain("agregado");
        });

        it("Debería quitar el like (toggle de nuevo)", async () => {
            // Primero creamos el like
            await request(BASE_URL)
                .post(`/api/song_like/${songId}/likeUnlike`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            // Luego hacemos toggle para quitarlo
            const res = await request(BASE_URL)
                .post(`/api/song_like/${songId}/likeUnlike`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.liked).toBe(false);
            expect(res.body.message).toContain("eliminado");
        });

        it("Debería fallar con un ID de canción inválido", async () => {
            const res = await request(BASE_URL)
                .post(`/api/song_like/invalid/likeUnlike`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(400);
            expect(res.body.error).toBeDefined();
        });

        it("Debería fallar si no se proporciona user_id", async () => {
            const res = await request(BASE_URL)
                .post(`/api/song_like/${songId}/likeUnlike`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({});

            expect(res.status).toBe(400);
            expect(res.body.error).toBeDefined();
        });
    });

    describe("POST /api/song_like/:id/like", () => {
        it("Debería dar like explícitamente", async () => {
            const res = await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.liked).toBe(true);
            expect(res.body.message).toContain("agregado");
        });

        it("Debería hacer toggle si ya tiene like y vuelve a llamar a la función", async () => {
            // Primero creamos el like
            await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            // Luego volvemos a llamar a like para hacer toggle
            const res = await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.liked).toBe(false);
            expect(res.body.message).toContain("eliminado");
        });

        it("Debería fallar con un ID de canción que no existe", async () => {
            const nonExistentId = 99999999;

            const res = await request(BASE_URL)
                .post(`/api/song_like/${nonExistentId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(404);
            expect(res.body.error).toContain("no encontrada");
        });
    });

    describe("DELETE /api/song_like/:id/like", () => {
        it("Debería eliminar un like explícitamente", async () => {
            // Primero creamos el like
            await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            // Ahora eliminamos el like explícitamente
            const res = await request(BASE_URL)
                .delete(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(200);
            expect(res.body.message).toBe("Like eliminado correctamente");
        });

        it("Debería fallar al intentar eliminar un like que no existe", async () => {
            // Aseguramos que no existe el like primero
            await db.song_like.destroy({
                where: { user_id: userId, song_id: songId }
            });

            const res = await request(BASE_URL)
                .delete(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            expect(res.status).toBe(400);
            expect(res.body.error).toContain("No has dado like");
        });

        it("Debería fallar con datos inválidos", async () => {
            const res = await request(BASE_URL)
                .delete(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({}); // Sin user_id

            expect(res.status).toBe(400);
            expect(res.body.error).toContain("Datos inválidos");
        });
    });

    describe("GET /api/song_like/:userId/likedSongs", () => {
        it("Debería devolver canciones con like", async () => {
            // Primero damos like a la canción
            await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            // Luego obtenemos las canciones con like
            const res = await request(BASE_URL)
                .get(`/api/song_like/${userId}/likedSongs`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.some(s => s.id === songId)).toBe(true);
        });

        it("Debería devolver array vacío si el usuario no tiene likes", async () => {
            // Primero eliminamos todos los likes
            await db.song_like.destroy({
                where: { user_id: userId }
            });

            // Obtenemos las canciones con like
            const res = await request(BASE_URL)
                .get(`/api/song_like/${userId}/likedSongs`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(0);
        });

        it("Debería fallar con un ID de usuario no válido", async () => {
            const res = await request(BASE_URL)
                .get(`/api/song_like/invalid/likedSongs`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res.status).toBe(400);
            expect(res.body.error).toContain("no es válido");
        });
    });

    describe("GET /api/song_like/:id/like", () => {
        it("Debería verificar si la canción está likeada (true)", async () => {
            // Primero damos like
            await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            // Verificamos si tiene like
            const res = await request(BASE_URL)
                .get(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .query({ userId: userId });

            expect(res.status).toBe(200);
            expect(res.body.isLiked).toBe(true);
        });

        it("Debería verificar si la canción está likeada (false)", async () => {
            // Aseguramos que no tiene like
            await db.song_like.destroy({
                where: { user_id: userId, song_id: songId }
            });

            // Verificamos que no tiene like
            const res = await request(BASE_URL)
                .get(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .query({ userId: userId });

            expect(res.status).toBe(200);
            expect(res.body.isLiked).toBe(false);
        });

        it("Debería fallar si faltan parámetros o son inválidos", async () => {
            // Sin userId
            const res1 = await request(BASE_URL)
                .get(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`);

            expect(res1.status).toBe(400);
            expect(res1.body.error).toContain("Parámetros inválidos");

            // Con ID de canción inválido
            const res2 = await request(BASE_URL)
                .get(`/api/song_like/invalid/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .query({ userId: userId });

            expect(res2.status).toBe(400);
            expect(res2.body.error).toContain("Parámetros inválidos");
        });
    });

    describe("Pruebas de integración", () => {
        it("Debería crear una playlist de 'Me Gusta' al dar like por primera vez", async () => {
            // Eliminar cualquier playlist de Me Gusta existente
            await db.playlist.destroy({
                where: {
                    user_id: userId,
                    typeP: 'Vibra_likedSong'
                }
            });

            // Dar like a una canción
            await request(BASE_URL)
                .post(`/api/song_like/${songId}/like`)
                .set('Authorization', `Bearer ${sharedToken}`)
                .send({ user_id: userId });

            // Verificar que se creó la playlist
            const playlist = await db.playlist.findOne({
                where: {
                    user_id: userId,
                    typeP: 'Vibra_likedSong'
                }
            });

            expect(playlist).not.toBeNull();
            expect(playlist.name).toContain("Me Gusta");
            expect(playlist.type).toBe("private");
        });
    });
});