const cors = require("cors");
const express = require("express");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // No hace falta especificar el origen, Nginx manejará esto
app.use(express.json());

// Todas las rutas estarán bajo `/api`
app.use("/api", apiRoutes);
app.get("/", (req, res) => {
    res.send("Bienvenido a la API del servidor");
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});