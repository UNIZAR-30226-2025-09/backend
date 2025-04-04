import request from 'supertest';
import { BASE_URL, getUserId } from './data.js';

describe("Rutas de song_like", () => {
    let songId = null;

    beforeAll(async () => {
        // Obtenemos una canción real para hacer las pruebas
        const songsRes = await request(BASE_URL).get('/api/songs');
        expect(songsRes.status).toBe(200);
        if (!songsRes.body.length) fail("No hay canciones en la base de datos.");
        songId = songsRes.body[0].id;
    });

    it("POST /api/song_like/:id/likeUnlike - debería dar like a la canción (toggle)", async () => {
        const res = await request(BASE_URL)
            .post(`/api/song_like/${songId}/likeUnlike`)
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
        expect(res.body.liked).toBe(true);
    });

    it("POST /api/song_like/:id/likeUnlike - debería quitar el like (toggle de nuevo)", async () => {
        const res = await request(BASE_URL)
            .post(`/api/song_like/${songId}/likeUnlike`)
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
        expect(res.body.liked).toBe(false);
    });

    it("POST /api/song_like/:id/like - debería dar like explícitamente", async () => {
        const res = await request(BASE_URL)
            .post(`/api/song_like/${songId}/like`)
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
        expect(res.body.liked).toBe(true);
    });

    it("GET /api/song_like/:userId/likedSongs - debería devolver canciones con like", async () => {
        const res = await request(BASE_URL).get(`/api/song_like/${getUserId()}/likedSongs`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTrue();
        expect(res.body.some(s => s.id === songId)).toBeTrue();
    });

    it("DELETE /api/song_like/:id/like - debería eliminar un like explícitamente", async () => {
        const res = await request(BASE_URL)
            .delete(`/api/song_like/${songId}/like`)
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Like eliminado correctamente"); // Verificamos que el mensaje de éxito sea el esperado
    });

    it("GET /api/song_like/:id/like - debería verificar si la canción está likeada", async () => {
        const res = await request(BASE_URL)
            .get(`/api/song_like/${songId}/like`)
            .query({ userId: getUserId() });

        expect(res.status).toBe(200);
        expect(res.body.isLiked).toBe(false); // Debería devolver false porque la canción ya fue deslikeada en el test anterior
    });
});