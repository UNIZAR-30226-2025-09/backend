require('module-alias/register');

const cors = require("cors");
const express = require("express");
const apiRoute = require("@routes/api");
const authRoute = require("./routes/auth");
const { sequelize } = require("./models");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json()); // Middleware para JSON

// Definir rutas

app.use("/auth", authRoute); // Aquí deben estar las rutas de autenticación
app.use("/api", apiRoute); // Aquí las rutas de prueba hello y bye
app.use("/images", express.static(path.resolve("public/playlist")));



const PORT = 5001;

sequelize.authenticate()
    .then(() => {
        console.log("Conectado a la base de datos");

        app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
    })
    .catch(err => {
        console.error("Error de conexión a la base de datos:", err);
        process.exit(1); // Cerrar el proceso si no se conecta a la BD
    });