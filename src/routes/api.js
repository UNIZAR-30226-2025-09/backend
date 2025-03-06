const express = require("express");
const router = express.Router();
const playlistRoutes = require("./playlist.routes.js");  // Importamos las rutas de playlists


//Ruta de prueba
router.get("/hello", (req, res) => {
    res.json({ message: "¡Hola desde el backend con Node.js!"});
});

//Ruta de prueba dos
router.get("/bye", (req, res) => {
    res.json({ message: "¡Adios desde el backend con Node.js!"});
});

// Integrar rutas de playlist bajo `/api/playlists`
router.use("/playlists", playlistRoutes);

module.exports = router;
