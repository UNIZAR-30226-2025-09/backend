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

    it('POST /api/user/update - debe actualizar el nickname del usuario correctamente', async () => {
        const nuevoNickname = 'updatedUser_' + Date.now().toString().slice(-5);
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({ nickname: nuevoNickname });

        expect(response.status).toBe(200);
        expect(response.body.user.nickname).toBe(nuevoNickname);
    });

    it('POST /api/user/update - debe rechazar nickname duplicado con código 409', async () => {
        // Registrar un usuario temporal para este test
        const tempUser = {
            nickname: 'tempUser_' + Date.now(),
            mail: 'tempuser_' + Date.now() + '@example.com',
            password: 'password123'
        };

        await request(BASE_URL)
            .post('/api/user/register')
            .send(tempUser);

        // Intentar actualizar nuestro usuario con el nickname del usuario temporal
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({ nickname: tempUser.nickname });

        expect(response.status).toBe(409);
        expect(response.body.error).toBe("Nombre de usuario ya registrado");
    });

    it('POST /api/user/update - debe rechazar correo duplicado con código 400', async () => {
        // Registrar un usuario temporal para este test si no se creó en el test anterior
        const tempUser = {
            nickname: 'tempEmailUser_' + Date.now(),
            mail: 'tempemail_' + Date.now() + '@example.com',
            password: 'password123'
        };

        await request(BASE_URL)
            .post('/api/user/register')
            .send(tempUser);

        // Intentar actualizar nuestro usuario con el correo del usuario temporal
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({ mail: tempUser.mail });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Correo ya registrado");
    });

    it('POST /api/user/update - debe rechazar peticiones sin campos para actualizar', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({});

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Debes proporcionar al menos un campo para actualizar");
    });

    it('POST /api/user/update - debe rechazar peticiones sin token', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/update')
            .send({ nickname: 'cualquiernickname' });

        expect(response.status).toBe(401);
        expect(response.body.error).toBe("Token no proporcionado");
    });

    // Prueba para actualización de contraseña
    it('POST /api/user/update - debe permitir actualizar la contraseña', async () => {
        const nuevaPassword = 'nuevaPassword123';

        // Actualizar contraseña
        const updateResponse = await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({ password: nuevaPassword });

        expect(updateResponse.status).toBe(200);

        // Cerrar sesión
        await request(BASE_URL).post('/api/user/logout');

        // Verificar que podemos iniciar sesión con la nueva contraseña
        const loginResponse = await request(BASE_URL)
            .post('/api/user/login')
            .send({ mail: testUser.mail, password: nuevaPassword });

        expect(loginResponse.status).toBe(200);
        expect(loginResponse.body.token).toBeDefined();

        // Actualizar el token para tests posteriores
        setAuthToken(loginResponse.body.token);
    });

    // Restaurar la contraseña original para no afectar otros tests
    afterAll(async () => {
        await request(BASE_URL)
            .post('/api/user/update')
            .set('Authorization', `Bearer ${getAuthToken()}`)
            .send({ password: testUser.password });
    });
});

describe('Pruebas de registro e inicio de sesión', () => {

    let created = false;

    it('POST /api/user/register - registra o ignora si ya existe', async () => {
        const response = await request(BASE_URL)
            .post('/api/user/register')
            .send(newUser);

        if (response.status === 201) {
            created = true;
        } else if (response.status === 400 || response.status === 409) {
            console.warn("Usuario ya existía, intentando login igual...");
            created = true;
        }

        expect([201, 400, 409]).toContain(response.status);
    });

    it('POST /api/user/register - debe rechazar correo repetido con código 400', async () => {
        // Primero aseguramos que el usuario original esté registrado
        const initialResponse = await request(BASE_URL)
            .post('/api/user/register')
            .send(newUser);

        // Verificamos que se haya registrado o ya exista
        expect([201, 400, 409]).toContain(initialResponse.status);

        // Intentamos registrar otro usuario con el mismo correo
        const userWithDuplicateEmail = {
            nickname: 'otroUsuarioPrueba',
            mail: newUser.mail, // Correo duplicado del newUser
            password: 'clave123'
        };

        const response = await request(BASE_URL)
            .post('/api/user/register')
            .send(userWithDuplicateEmail);

        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Correo ya registrado");
    });

    it('POST /api/user/register - debe rechazar nickname repetido con código 409', async () => {
        // Primero aseguramos que el usuario original esté registrado
        const initialResponse = await request(BASE_URL)
            .post('/api/user/register')
            .send(newUser);

        // Verificamos que se haya registrado o ya exista
        expect([201, 400, 409]).toContain(initialResponse.status);

        // Intentamos registrar otro usuario con el mismo nickname
        const userWithDuplicateNickname = {
            nickname: newUser.nickname, // Nickname duplicado del newUser
            mail: 'otro_correo_diferente_jkh18s9chbak@example.com',
            password: 'clave123'
        };

        const response = await request(BASE_URL)
            .post('/api/user/register')
            .send(userWithDuplicateNickname);

        expect(response.status).toBe(409);
        expect(response.body.error).toBe("Nombre de usuario ya registrado");
    });

    it('POST /api/user/login - debe iniciar sesión con el nuevo usuario', async () => {
        if (!created) {
            throw new Error("Usuario no creado correctamente en la prueba anterior.");
        }

        const response = await request(BASE_URL)
            .post('/api/user/login')
            .send({ mail: newUser.mail, password: newUser.password });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
        expect(response.body.user.mail).toBe(newUser.mail);
    });
});