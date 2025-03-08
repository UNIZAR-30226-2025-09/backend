const cors = require("cors");
const express = require("express");
const apiRoute = require("./routes/api");
const authRoute = require("./routes/auth");
const playerRoute = require('./routes/player'); // Asegúrate de que el archivo se llame 'player.js' o 'playerRoutes.js' según corresponda
const { sequelize } = require("./models"); // Importa la instancia de Sequelize

const  path = require('path');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

// Definir rutas
app.use("/auth", authRoute);        // Rutas de autenticación
app.use("/api", apiRoute);          // Rutas generales de prueba (por ejemplo, hello, bye)
app.use("/api/player", playerRoute); // Rutas del reproductor

const fs = require('fs');
const songsPath = path.join(__dirname, '..', 'public', 'songs');
console.log(`📂 Intentando servir canciones desde: ${songsPath}`);

if (!fs.existsSync(songsPath)) {
    console.error("🚨 La carpeta 'public/songs/' NO existe. Verifica su ubicación.");
} else {
    console.log(`✅ La carpeta de canciones EXISTE en: ${songsPath}`);
}

app.use('/songs', express.static(songsPath));


const PORT = 5000;

// 🔥 Primero nos aseguramos de que la BD esté conectada antes de iniciar el servidor
sequelize.authenticate()
    .then(() => {
        console.log("Conectado a la base de datos");

        app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
    })
    .catch(err => {
        console.error("Error de conexión a la base de datos:", err);
        process.exit(1); // Cerrar el proceso si no se conecta a la BD
    });