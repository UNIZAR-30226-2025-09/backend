// routes/songs.js
const express = require('express');
const router = express.Router();
const { Song: Songs } = require('../models'); // Asegúrate de que la ruta sea correcta

// Endpoint para obtener todas las canciones
router.get('/', async (req, res) => {
    try {
        const songs = await Songs.findAll();
        res.json(songs);
    } catch (error) {
        console.error('Error al obtener las canciones:', error);
        res.status(500).json({ message: 'Error al obtener las canciones' });
    }
});

module.exports = router;
