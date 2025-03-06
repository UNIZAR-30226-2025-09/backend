// src/routes/playerRoutes.js
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// GET /player/:id -> obtener datos de una canción
router.get('/:id', playerController.getSong);

// POST /player/:id/play -> reproducir la canción
router.post('/:id/play', playerController.playSong);

// POST /player/:id/pause -> pausar la canción
router.post('/:id/pause', playerController.pauseSong);

// POST /player/skip-next -> siguiente canción
router.post('/skip-next', playerController.skipNextSong);

// POST /player/skip-prev -> canción anterior
router.post('/skip-prev', playerController.skipPreviousSong);

module.exports = router;
