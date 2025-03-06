// src/controllers/playerController.js

const { Song } = require('../../models'); // Ajusta la ruta según tu estructura real

/**
 * Obtiene los datos de una canción por su ID
 * GET /player/:id
 */
exports.getSong = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findByPk(id);

        if (!song) {
            return res.status(404).json({ message: 'Canción no encontrada' });
        }

        return res.json(song);
    } catch (error) {
        console.error('Error al obtener la canción:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

/**
 * Simula la acción de reproducir una canción
 * POST /player/:id/play
 */
exports.playSong = async (req, res) => {
    try {
        const { id } = req.params;
        // Aquí podrías buscar la canción, validar, etc.
        const song = await Song.findByPk(id);

        if (!song) {
            return res.status(404).json({ message: 'Canción no encontrada' });
        }

        // Lógica para "marcar" que la canción está en reproducción
        // (En un proyecto real, podrías actualizar un estado en la BD o enviar un evento)
        return res.json({
            message: `Reproduciendo la canción con ID: ${id}`,
            song
        });
    } catch (error) {
        console.error('Error al reproducir la canción:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

/**
 * Simula la acción de pausar la canción
 * POST /player/:id/pause
 */
exports.pauseSong = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findByPk(id);

        if (!song) {
            return res.status(404).json({ message: 'Canción no encontrada' });
        }

        // Lógica para "marcar" que la canción está en pausa
        return res.json({
            message: `Pausando la canción con ID: ${id}`,
            song
        });
    } catch (error) {
        console.error('Error al pausar la canción:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

/**
 * Simula la acción de pasar a la siguiente canción en una cola
 * POST /player/skip-next
 */
exports.skipNextSong = async (req, res) => {
    try {
        // Aquí podrías tener la lógica para determinar cuál es la siguiente canción.
        // Por ejemplo, si tuvieras un "estado" de qué canción se está reproduciendo y una cola en la BD.
        // De momento, devolvemos un mensaje fijo.
        return res.json({
            message: 'Saltando a la siguiente canción (lógica pendiente).'
        });
    } catch (error) {
        console.error('Error al saltar a la siguiente canción:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

/**
 * Simula la acción de regresar a la canción anterior
 * POST /player/skip-prev
 */
exports.skipPreviousSong = async (req, res) => {
    try {
        // Similar a skipNextSong, pero para la anterior.
        return res.json({
            message: 'Regresando a la canción anterior (lógica pendiente).'
        });
    } catch (error) {
        console.error('Error al regresar a la canción anterior:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};
