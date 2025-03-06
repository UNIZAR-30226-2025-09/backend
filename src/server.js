const cors = require("cors");
const express = require("express");
const apiRoute = require("./routes/api");
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para JSON

// Definir rutas
app.use("/auth", authRoute); // Aquí deben estar las rutas de autenticación
app.use("/api", apiRoute); // Aquí las rutas de prueba hello y bye

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));1