//const playlist = require('@controllers/playlist.controller');
const { playlist } = require('../models');
//const bcrypt = require('bcryptjs');

// Obtener todos los usuarios
exports.getAllPlaylist = async (req, res) => {
    try {
        const pl = await playlist.findAll();
        res.json(pl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un usuario por ID
exports.getPlaylistById = async (req, res) => {
    try {

        const pl = await playlist.findOne({where: {id: parseInt(req.params.id, 10)}});
        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });
        res.json(pl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo usuario
exports.createPlaylist = async (req, res) => {
    try {
        const { name, type, description, front_page } = req.body;

        const newUser = await playlist.create({
            name,
            type,
            description,
            front_page
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una playlist
exports.updatePlaylist = async (req, res) => {
    try {
        const { name, description, type, front_page } = req.body;

        // Buscar el playlist
        const pl = await playlist.findByPk(req.params.id);
        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        // Actualizar playlist
        await pl.update({
            name,
            description,
            type,
            front_page
        });

        res.json(pl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario
exports.deletePlaylist = async (req, res) => {
    try {
        const pl = await playlist.findByPk(req.params.id);
        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        await pl.destroy();
        res.json({ message: "Playlist eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
