const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Asegúrate de que coincida con el puerto de Vite
app.use(express.json());

// Ruta de prueba
app.get("/api/hello", (req, res) => {
    res.json({ message: "¡Hola desde el backend con Node.js!" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});