import request from 'supertest';
import { BASE_URL } from './data.js';

describe('Pruebas de las rutas de usuario', () => {

    let token = '';
    let userId = '';
    const testUser = {
        nickname: 'testuser',
        mail: 'testuser@example.com',
        password: '123456'
    };

    it('POST /api/user/register - debe registrar un nuevo usuario', async () => {
        const response = await request(BASE_URL).post('/api/user/register').send(testUser);
        expect([200, 201, 400]).toContain(response.status);
        if (response.status === 201) {
            expect(response.body.token).toBeDefined();
            userId = response.body.user.id;
        }
    });

    it('POST /api/user/login - debe iniciar sesión con credenciales válidas', async () => {
        const response = await request(BASE_URL).post('/api/user/login').send({
            mail: testUser.mail,
            password: testUser.password
        });
        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
        expect(typeof response.body.token).toBe('string');
        token = response.body.token;
        userId = response.body.user.id;
    });

    it('GET /api/user/profile - debe devolver el perfil del usuario autenticado', async () => {
        const response = await request(BASE_URL)
            .get('/api/user/profile')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.mail).toBe(testUser.mail);
    });

    it('POST /api/user/update - debe actualizar el perfil del usuario', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${token}`)
            .send({ nickname: 'updatedUser' });
        expect(response.status).toBe(200);
        expect(response.body.user.nickname).toBe('updatedUser');
    });

    it('POST /api/user/premium - debe cambiar el estado premium del usuario', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/premium')
            .set('Authorization', `Bearer ${token}`)
            .send({ is_premium: true });
        expect(response.status).toBe(200);
        expect(response.body.user.is_premium).toBe(true);
    });

    it('POST /api/user/check-email - debe confirmar que el correo ya existe', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/check-email')
            .send({ mail: testUser.mail });
        expect(response.status).toBe(200);
        expect(response.body.exists).toBe(true);
    });

    it('GET /api/user/:userId - debe devolver los datos del usuario por ID', async () => {
        const response = await request(BASE_URL).get(`/api/user/${userId}`);
        expect(response.status).toBe(200);
        expect(response.body.mail).toBe(testUser.mail);
    });

    it('POST /api/user/logout - debe cerrar la sesión correctamente', async () => {
        const response = await request(BASE_URL).post('/api/user/logout');
        expect(response.status).toBe(200);
        expect(response.body.message).toMatch(/Sesión cerrada/i);
    });

});