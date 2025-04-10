import db from '#models/index';
import request from 'supertest';
import { BASE_URL, setAuthToken, setUserId } from './data.js';
import bcrypt from 'bcrypt';

// Función principal para inicializar datos de prueba
async function initializeTestData() {
    try {
        console.log("Iniciando creación de datos de prueba...");

        // Hashear la contraseña para los usuarios de prueba
        const hashedPassword = await bcrypt.hash('password123', 10);

        // Crear el primer usuario de prueba
        const testUser = await db.user.create({
            mail: 'testuser_jkh18s9chbak@example.com',
            username: 'testuser',
            password: hashedPassword,
            style_fav: 'pop',
            description: 'Usuario de prueba'
        });

        console.log(`Usuario de prueba creado con ID: ${testUser.id}`);

        // Crear un segundo usuario de prueba
        const newUser = await db.user.create({
            mail: 'nuevo_jkh18s9chbak@example.com',
            username: 'newuser',
            password: hashedPassword,
            style_fav: 'rock',
            description: 'Nuevo usuario de prueba'
        });

        console.log(`Nuevo usuario de prueba creado con ID: ${newUser.id}`);

        // Obtener token para el primer usuario mediante login
        const loginRes = await request(BASE_URL)
            .post('/api/auth/login')
            .send({
                mail: 'testuser_jkh18s9chbak@example.com',
                password: 'password123'
            });

        if (loginRes.status !== 200) {
            throw new Error(`Error en login: ${JSON.stringify(loginRes.body)}`);
        }

        const token = loginRes.body.token;

        // Guardar token y ID del usuario
        setAuthToken(token);
        setUserId(testUser.id);

        console.log("Token de usuario guardado correctamente");
        console.log("Datos de prueba inicializados con éxito");

    } catch (error) {
        console.error("Error al inicializar datos de prueba:", error);
    }
}

// Ejecutar la inicialización
initializeTestData()
    .then(() => {
        console.log("Proceso de inicialización completado");
        // Esperar un poco antes de finalizar para asegurar que se completen las operaciones asíncronas
        setTimeout(() => process.exit(0), 1000);
    })
    .catch(err => {
        console.error("Error en el proceso de inicialización:", err);
        process.exit(1);
    });