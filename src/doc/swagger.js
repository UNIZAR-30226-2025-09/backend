// generate-swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Vibra',
            version: '1.0.0',
            description: 'Documentación de la API',
        },
    },
    apis: ['../routes/*.js'],
};

const specs = swaggerJsdoc(options);
fs.writeFileSync(
    path.join(__dirname, 'swagger-output.json'),
    JSON.stringify(specs, null, 2)
);
console.log('Documentación de Swagger generada');