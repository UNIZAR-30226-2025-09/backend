const express = require("express");
const router = express.Router();
const playlistRoutes = require("./playlist.routes.js");  // Importamos las rutas de playlists

// Integrar rutas de playlist bajo `/api/playlists`
router.use("/playlists", playlistRoutes);

module.exports = router;
