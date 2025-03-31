import request from 'supertest';
import {
    BASE_URL,
    getAuthToken
} from './data.js';

describe("GET /user/library", () => {

    it("debería devolver 401 si no se proporciona token", async () => {
        const response = await request(BASE_URL)
            .get("/user/library");

        expect(response.status).toBe(401);
        expect(response.body.error).toBe("Token no proporcionado");
    });

    it("debería devolver 200 y la biblioteca del usuario si el token es válido", async () => {
        const token = getAuthToken();

        const response = await request(BASE_URL)
            .get("/user/library")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);

        // Verifica que existan las propiedades esperadas en la respuesta
        expect(response.body).toEqual(jasmine.objectContaining({
            likedSongs: jasmine.any(Array),
            likedPlaylists: jasmine.any(Array),
            playlistsCreated: jasmine.any(Array)
        }));
    });

    it("debería devolver 404 si el usuario no existe", async () => {
        // Crear un token válido con un ID que no exista
        const jwt = (await import('jsonwebtoken')).default;
        const fakeToken = jwt.sign({ id: 999999 }, "aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z");

        const response = await request(BASE_URL)
            .get("/user/library")
            .set("Authorization", `Bearer ${fakeToken}`);

        expect(response.status).toBe(404);
        expect(response.body.error).toBe("Usuario no encontrado");
    });

});