import request from "supertest";
import { BASE_URL } from "./data.js";

describe("Pruebas sobre /api/songs", () => {
    // Variable para guardar un ID de canción válido para pruebas
    let validSongId;

    describe("GET /api/songs", () => {
        it("debería devolver un array de canciones", async () => {
            const response = await request(BASE_URL).get("/api/songs");

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBeTrue();

            if (response.body.length > 0) {
                const song = response.body[0];
                expect(song.id).toBeDefined();
                expect(song.name).toBeDefined();
                expect(typeof song.duration).toBe("number");
                // Guardar ID para pruebas posteriores
                validSongId = song.id;
            }
        });

        it("debería contener propiedades básicas en cada canción", async () => {
            const response = await request(BASE_URL).get("/api/songs");

            if (response.body.length > 0) {
                const song = response.body[0];
                expect(song.id).toBeDefined();
                expect(song.name).toBeDefined();
                expect(song.duration).toBeDefined();
                expect(song.url_mp3).toBeDefined();
                expect(song.genre).toBeDefined();
            }
        });
    });

    describe("GET /api/songs/adds", () => {
        it("debería devolver un array de anuncios", async () => {
            const response = await request(BASE_URL).get("/api/songs/adds");

            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBeTrue();
        });

        it("debería contener propiedades esperadas en cada anuncio", async () => {
            const response = await request(BASE_URL).get("/api/songs/adds");

            if (response.body.length > 0) {
                const add = response.body[0];
                expect(add.id).toBeDefined();
                expect(add.url_mp3).toBeDefined();
            }
        });
    });

    describe("GET /api/songs/:id", () => {
        it("debería devolver los detalles de una canción existente por ID", async () => {
            // Usar el ID que guardamos de la primera prueba
            if (!validSongId) {
                const allSongs = await request(BASE_URL).get("/api/songs");
                validSongId = allSongs.body[0]?.id;
            }

            if (!validSongId) {
                fail("No hay canciones en la base de datos para probar.");
                return;
            }

            const response = await request(BASE_URL).get(`/api/songs/${validSongId}`);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(validSongId);
            expect(response.body.name).toBeDefined();
            expect(response.body.duration).toBeDefined();
            expect(response.body.url_mp3).toBeDefined();
        });

        it("debería devolver error 404 para un ID que no existe", async () => {
            // Usamos un ID muy grande que es poco probable que exista
            const nonExistentId = 999999;
            const response = await request(BASE_URL).get(`/api/songs/${nonExistentId}`);

            expect(response.status).toBe(404);
        });

        it("debería devolver error para un ID inválido", async () => {
            const response = await request(BASE_URL).get("/api/songs/invalid");

            // El servidor debería devolver un error (400 o 500)
            expect(response.status).not.toBe(200);
        });
    });
});