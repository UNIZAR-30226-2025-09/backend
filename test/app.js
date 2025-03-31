// app.js
import cors from "cors";
import express from "express";
import apiRoute from "#routes/api";
import path from "path";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de archivos estáticos
const publicPath = path.resolve("public");
const subdirectories = [
    "songs", "playlist_images", "songs_images", "artists_images", "albums_images"
];
subdirectories.forEach((dir) => {
    app.use(`/${dir}`, express.static(path.join(publicPath, dir)));
});

// Definir rutas generales de API
app.use("/api", apiRoute);

export default app;