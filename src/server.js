import cors from "cors";
import express from "express";
import { getIp } from "./get_ip.js"; // Importa la función

import apiRoute from "#routes/api";
import { sequelize } from "#models/index"; // Importa la instancia de Sequelize

import path from "path";
import fs from "fs";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Habilita JSON en las peticiones

// Configuración de archivos estáticos
const songsPath = path.resolve("public/songs");
const imagesPath = path.resolve("public/playlist");

// Verifica que la carpeta de canciones existe
if (!fs.existsSync(songsPath)) {
    console.error("ERROR: La carpeta 'public/songs' NO existe. Verifica su ubicación.");
} else {
    console.log(`La carpeta de canciones EXISTE en: ${songsPath}`);
}
console.log(`Verificando ruta: ${songsPath}`);
console.log(`Verificando ruta: ${imagesPath}`);

// Servir archivos estáticos
app.use("/songs", express.static(songsPath));
app.use("/images", express.static(imagesPath));
// Monta la ruta en /api/library


// Definir rutas generales de API
app.use("/api", apiRoute);

const PORT = 5001;
const IP = await getIp("local"); // "public o local dependiendo de lo que se necesite"

let BASE_URL;

// Iniciar servidor y conectar a la BD
sequelize.authenticate()
    .then(() => {
        console.log("Conexión exitosa a la base de datos.");
        BASE_URL = `http://${IP}:${PORT}`;
        app.listen(PORT, () => console.log(`Servidor corriendo en ${BASE_URL}`));
    })
    .catch(err => {
        console.error("Error de conexión a la base de datos:", err.message);
        process.exit(1); // Detiene la ejecución si falla la conexión a la BD
    });

// Exportamos BASE_URL para que pueda ser utilizada en el resto del proyecto
export { BASE_URL };
export default app;