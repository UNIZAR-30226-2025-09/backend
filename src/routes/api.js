const express = require("express");
const router = express.Router();
const playlistRoutes = require("./playlist.routes.js");  // Importamos las rutas de playlists

// Integrar rutas de playlist bajo `/api/playlists`
router.use("/playlists", playlistRoutes);

const playerRoutes = require('./player');

// Montamos las rutas de "player" en /player
router.use('/player', playerRoutes);


// Importa y monta las rutas de canciones
const songsRoute = require('./songs');
router.use("/songs", songsRoute);

module.exports = router;
