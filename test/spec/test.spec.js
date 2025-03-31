import request from 'supertest';
import { getIp } from "./get_ip.js";
// Asumimos que el servidor ya está corriendo en el puerto 5001
const BASE_URL = 'http://localhost:5001'; // Cambia esta URL por la URL de tu servidor

describe('Pruebas de las rutas de la API', () => {
    it('GET /api/artists - debe devolver todos los artistas', async () => {
        const response = await request(BASE_URL).get('/api/artist/artists');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('GET /api/library - debe devolver la biblioteca del usuario', async () => {
        const token = 'el_token_jwt_de_prueba'; // Cambia esto con un token válido si lo necesitas

        const response = await request(BASE_URL)
            .get('/api/library')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('likedSongs');
        expect(response.body).toHaveProperty('likedPlaylists');
        expect(response.body).toHaveProperty('playlistsCreated');
    });

    // Más pruebas según lo necesario
});