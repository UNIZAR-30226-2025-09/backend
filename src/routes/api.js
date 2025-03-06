const express = require("express");
const router = express.Router();
const playlistRoutes = require("./playlist.routes.js");  // Importamos las rutas de playlists


router.get("/hello", (req, res) => {
    res.json({ message: "¡Hola desde el backend con Node.js!" });
});

router.get("/bye", (req, res) => {
    res.json({ message: "¡Adiós desde el backend con Node.js!" });
});

// Integrar rutas de playlist bajo `/api/playlists`
router.use("/playlists", playlistRoutes);

module.exports = router;
