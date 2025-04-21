import db from '#models/index';
import request from 'supertest';
import { BASE_URL, setAuthToken, setUserId } from './data.js';
import bcryptjs from 'bcryptjs';

// Función principal para inicializar datos de prueba
async function initializeTestData() {
    try {
        console.log("Iniciando creación de datos de prueba...");

        // Verificar si db y db.user existen correctamente
        console.log("Modelos disponibles:", Object.keys(db));

        if (!db || !db.user) {
            throw new Error("La base de datos o el modelo de usuario no están correctamente importados");
        }

        // Hashear la contraseña para los usuarios de prueba
        const hashedPassword = await bcryptjs.hash('password123', 10);

        // Crear el primer usuario de prueba
        const testUser = await db.user.create({
            mail: 'testuser_jkh18s9chbak@example.com',
            nickname: 'testuser',
            password: hashedPassword,
            style_fav: 'pop',
            description: 'Usuario de prueba'
        });

        console.log(`Usuario de prueba creado con ID: ${testUser.id}`);

        // Resto del código igual...
    } catch (error) {
        console.error("Error al inicializar datos de prueba:", error);
        // Añadir más información de depuración
        if (error.stack) console.error(error.stack);
    }
}

// Esperar a que la base de datos esté lista
setTimeout(() => {
    // Ejecutar la inicialización
    initializeTestData()
        .then(() => {
            console.log("Proceso de inicialización completado");
            // Esperar un poco antes de finalizar
            setTimeout(() => process.exit(0), 1000);
        })
        .catch(err => {
            console.error("Error en el proceso de inicialización:", err);
            process.exit(1);
        });
}, 500); // Añadir un pequeño tiempo antes de iniciar