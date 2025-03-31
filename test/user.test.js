import request from 'supertest';
import {
    BASE_URL,
    setAuthToken,
    getAuthToken,
    setUserId,
    getUserId
} from './data.js';

const testUser = {
    nickname: 'testuser',
    mail: 'testuser_jkh18s9chbak@example.com',
    password: '123456'
};

const newUser = {
    nickname: 'nuevoUsuario',
    mail: 'nuevo_jkh18s9chbak@example.com',
    password: 'abc12345'
};

describe('Pruebas autenticadas de usuario', () => {

    beforeAll(async () => {
        // Intentamos registrar por si no existe aún
        await request(BASE_URL)
            .post('/api/user/register')
            .send(testUser);

        // Hacemos login para obtener token e ID
        const loginResponse = await request(BASE_URL)
            .post('/api/user/login')
            .send({ mail: testUser.mail, password: testUser.password });

        if (loginResponse.status === 200) {
            setAuthToken(loginResponse.body.token);
            setUserId(loginResponse.body.user.id);
        } else {
            throw new Error('No se pudo hacer login en beforeAll');
        }
    });

    it('GET /api/user/profile - debe devolver el perfil del usuario autenticado', async () => {
        const response = await request(BASE_URL)
            .get('/api/user/profile')
            .set('Authorization', `Bearer ${getAuthToken()}`);

        expect(response.status).toBe(200);
        expect(response.body.mail).toBe(testUser.mail);
    });

    it('POST /api/user/update - debe actualizar el perfil del usuario', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({ nickname: 'updatedUser' });

        expect(response.status).toBe(200);
        expect(response.body.user.nickname).toBe('updatedUser');
    });

    it('POST /api/user/premium - debe cambiar el estado premium del usuario', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/premium')
            .set('Authorization', `Bearer ${getAuthToken()}`)
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
        const response = await request(BASE_URL)
            .get(`/api/user/${getUserId()}`);

        expect(response.status).toBe(200);
        expect(response.body.mail).toBe(testUser.mail);
    });

    it('POST /api/user/logout - debe cerrar la sesión correctamente', async () => {
        const response = await request(BASE_URL).post('/api/user/logout');
        expect(response.status).toBe(200);
        expect(response.body.message).toMatch(/Sesión cerrada/i);
    });
});

describe('Pruebas de registro e inicio de sesión', () => {

    it('POST /api/user/register - debe registrar un nuevo usuario diferente', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/register')
            .send(newUser);

        expect([200, 201, 400]).toContain(response.status);
    });

    it('POST /api/user/login - debe iniciar sesión con el nuevo usuario', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/login')
            .send({ mail: newUser.mail, password: newUser.password });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
        expect(response.body.user.mail).toBe(newUser.mail);
    });

});