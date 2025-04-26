import cors from "cors";
import express from "express";
import { getIp } from "#ip/*";
import apiRoute from "#routes/api";
import { sequelize } from "#models/index";
import path from "path";
import * as bodyParser from "express";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '40mb' }));


// Configuración de archivos estáticos
// Directorio base
const publicPath = path.resolve("public");

// Subcarpetas dentro de public
const subdirectories = [
    "songs",
    "playlist",
    "playlist_images",
    "songs_images",
    "artists_images",
    "albums_images",
    "users",
    "lyrics",
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
// Add this to your server code
app.get('/lyrics/:filename', (req, res) => {
    const filename = req.params.filename;

    // Use the correct path to your lyrics folder
    // Based on your code, it should be in the public directory
    const filePath = path.join(publicPath, 'lyrics', filename);

    console.log("Accessing lyrics file at:", filePath);

    // Set the content type to text/plain so browser doesn't try to download it
    res.setHeader('Content-Type', 'text/plain');

    // Send the file
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending lyrics file:', err);
            res.status(404).send('Lyrics not found');
        }
    });
});
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