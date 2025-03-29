import cors from "cors";
import express from "express";
import { getIp } from "./get_ip.js"; // Importa la función

import apiRoute from "#routes/api";
import { sequelize } from "#models/index"; // Importa la instancia de Sequelize
import path from "path";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Habilita JSON en las peticiones

// Configuración de archivos estáticos
// Directorio base
const publicPath = path.resolve("public");

// Subcarpetas dentro de public
const subdirectories = [
    "songs",
    "playlist_images",
    "songs_images",
    "artists_images",
    "albums_images"
];

// Configurar rutas estáticas dinámicamente
subdirectories.forEach((dir) => {
    app.use(`/${dir}`, express.static(path.join(publicPath, dir)));
});

// Definir rutas generales de API
app.use("/api", apiRoute);

const PORT = 5001;
const IP = await getIp("local"); // "public o local dependiendo de lo que se necesite"

let BASE_URL;

// Iniciar servidor y conectar a la BD
sequelize.authenticate()
    .then(async () => {
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
