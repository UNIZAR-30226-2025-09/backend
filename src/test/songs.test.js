import request from "supertest";
import { BASE_URL } from "./data.js";

describe("GET /api/songs", () => {

    it("debería devolver un array de canciones", async () => {
        const response = await request(BASE_URL).get("/api/songs");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTrue();

        if (response.body.length > 0) {
            const song = response.body[0];
            expect(song.id).toBeDefined();
            expect(song.name).toBeDefined();
        }
    });

    it("debería devolver los detalles de una canción existente por ID", async () => {
        const allSongs = await request(BASE_URL).get("/api/songs");
        expect(allSongs.status).toBe(200);
        const firstSong = allSongs.body[0];

        if (!firstSong) {
            fail("No hay canciones en la base de datos para probar.");
            return;
        }

        const response = await request(BASE_URL).get(`/api/songs/${firstSong.id}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(firstSong.id);
        expect(response.body.name).toBe(firstSong.name);
    });
});