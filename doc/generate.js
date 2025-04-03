import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Obtener la ruta del directorio actual desde import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Ejecutar el comando para generar swagger-output.json
exec('node swagger.js', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error ejecutando swagger.js: ${stderr}`);
        return;
    }
    console.log(`swagger.js ejecutado correctamente: ${stdout}`);

    // Una vez generado el swagger-output.json, ejecutamos widdershins
    exec('npx widdershins -c swagger-output.json -o documentacion.md', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error ejecutando widdershins: ${stderr}`);
            return;
        }
        console.log(`widdershins ejecutado correctamente: ${stdout}`);

        // Borrar el archivo swagger-output.json después de generar el MD
        const swaggerOutputPath = path.join(__dirname, 'swagger-output.json');
        fs.unlink(swaggerOutputPath, (err) => {
            if (err) {
                console.error(`Error al eliminar swagger-output.json: ${err.message}`);
            } else {
                console.log('swagger-output.json ha sido eliminado');
            }
        });
    });
});