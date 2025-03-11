import cors from "cors";
import express from "express";

import apiRoute from "#routes/api";
//import authRoute from "#routes/auth_routes";
import playerRoute from "#routes/player_routes";
import { sequelize } from "#models/index"; // Importa la instancia de Sequelize

import path from "path";
import fs from "fs";

const app = express();
const PORT = 5001;

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

// Definir rutas
app.use("/api", apiRoute);           // Rutas generales de API

// Iniciar servidor y conectar a la BD
sequelize.authenticate()
    .then(() => {
        console.log("Conexión exitosa a la base de datos.");

        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch(err => {
        console.error("Error de conexión a la base de datos:", err.message);
        process.exit(1); // Detiene la ejecución si falla la conexión a la BD
    });

export default app;