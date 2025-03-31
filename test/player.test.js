import request from 'supertest';
import { BASE_URL } from './data.js';

describe("Rutas de /api/player", () => {
    let songId = null;

    beforeAll(async () => {
        // Obtener al menos una canción existente
        const songsRes = await request(BASE_URL).get("/api/songs");
        expect(songsRes.status).toBe(200);

        if (!songsRes.body.length) fail("No hay canciones disponibles para probar.");
        songId = songsRes.body[0].id;
    });

    it("GET /api/player/details/:songId - debe devolver detalles de la canción", async () => {
        const res = await request(BASE_URL).get(`/api/player/details/${songId}`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(jasmine.objectContaining({
            id: songId,
            name: jasmine.any(String),
            url_mp3: jasmine.any(String),
            artists: jasmine.any(Array)
        }));
    });

    it("GET /api/player/lyrics/:songId - debe devolver la letra si existe", async () => {
        const res = await request(BASE_URL).get(`/api/player/lyrics/${songId}`);
        expect([200, 404]).toContain(res.status);
        if (res.status === 200) {
            expect(res.body.lyrics).toBeDefined();
        } else {
            expect(res.body.message).toMatch(/Letra no encontrada/i);
        }
    });

    it("POST /api/player/play/:songId - debe reproducir la canción", async () => {
        const res = await request(BASE_URL).post(`/api/player/play/${songId}`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(jasmine.objectContaining({
            message: jasmine.stringMatching(/Reproduciendo canción/),
            url: jasmine.any(String),
            isPlaying: true
        }));
    });

    it("POST /api/player/pause/:songId - debe pausar la canción", async () => {
        const res = await request(BASE_URL).post(`/api/player/pause/${songId}`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            message: "Reproducción pausada",
            isPlaying: false
        });
    });

    it("POST /api/player/next - debe reproducir la siguiente canción", async () => {
        const res = await request(BASE_URL).post(`/api/player/next`);
        expect([200, 400]).toContain(res.status);
        if (res.status === 200) {
            expect(res.body).toEqual(jasmine.objectContaining({
                url: jasmine.any(String),
                isPlaying: true
            }));
        } else {
            expect(res.body.message).toMatch(/cola.*vacía/i);
        }
    });

    it("POST /api/player/previous - debe reproducir la canción anterior", async () => {
        const res = await request(BASE_URL).post(`/api/player/previous`);
        expect([200, 400]).toContain(res.status);
        if (res.status === 200) {
            expect(res.body).toEqual(jasmine.objectContaining({
                url: jasmine.any(String),
                isPlaying: true
            }));
        } else {
            expect(res.body.message).toMatch(/cola.*vacía/i);
        }
    });
});