const cors = require("cors");
const express = require("express");
// Importar rutas desde api.js
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Permitir solicitudes desde el frontend en Vite
app.use(express.json()); // Permitir recibir JSON en las peticiones

app.use("/api", apiRoutes); // Todas las rutas de `api.js` estarán bajo `/api`
// De momento tenemos /api/hello y /api/bye

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});