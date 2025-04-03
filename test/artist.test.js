import request from 'supertest';
import {BASE_URL} from "./data.js"

describe('Pruebas sobre /api/artists', () => {
    it('GET /api/artists - debe devolver todos los artistas', async () => {
        const response = await request(BASE_URL).get('/api/artist/artists');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});