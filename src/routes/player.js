const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Rutas para obtener detalles y recursos de la canción
router.get('/details/:songId', playerController.getSongDetails);
router.get('/lyrics/:songId', playerController.getLyrics);

// Rutas para acciones de reproducción
router.post('/play/:songId', playerController.playSong);
router.post('/pause/:songId', playerController.pauseSong);
router.post('/next', playerController.playNextSong);
router.post('/previous', playerController.playPreviousSong);

module.exports = router;
