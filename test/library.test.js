import request from 'supertest';
import {
    BASE_URL,
    setAuthToken,
    getAuthToken,
    setUserId
} from './data.js';

/*describe("GET /api/library", () => {

    it("debería devolver 200 si el token es válido", async () => {
        const token = getAuthToken();
        console.log(token);

        const response = await request(BASE_URL)
            .get("/api/library")
            .set("Authorization", `Bearer ${token}`);

        console.log(response.body); // Te ayudará a ver lo que devuelve

        expect(response.status).toBe(200);
    });
});*/