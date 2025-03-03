const express = require('express');
const router = express.Router();

// Estado del reproductor (Simulación de un reproductor)
let playerState = {
    isPlaying: false,
    currentTime: 0, // Tiempo en segundos
    trackId: null
};//

// Reproducir o reanudar canción
router.post('/play', (req, res) => {
    const { trackId } = req.body;

    if (!trackId) {
        return res.status(400).json({ message: "Se requiere un trackId" });
    }

    playerState.isPlaying = true;
    playerState.trackId = trackId;

    return res.json({ message: "Reproduciendo canción", playerState });
});

// Pausar canción
router.post('/pause', (req, res) => {
    playerState.isPlaying = false;
    return res.json({ message: "Canción pausada", playerState });
});

// Adelantar o retroceder la canción
router.post('/seek', (req, res) => {
    const { time } = req.body; // Tiempo en segundos para adelantar/retroceder

    if (typeof time !== "number") {
        return res.status(400).json({ message: "Debe enviarse un número en el campo 'time'" });
    }

    playerState.currentTime += time; // Adelantar (+) o retroceder (-)
    if (playerState.currentTime < 0) playerState.currentTime = 0;

    return res.json({ message: `Tiempo actualizado a ${playerState.currentTime}s`, playerState });
});

module.exports = router;
