const { playlist, song } = require('../models');

// Obtener todos los usuarios
exports.getAllPlaylist = async (req, res) => {
    try {
        const pl = await playlist.findAll();
        res.json(pl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPlaylistById = async (req, res) => {
    try {
        const playlistId = parseInt(req.params.id, 10);

        if (isNaN(playlistId)) {
            return res.status(400).json({ error: "ID inválido. Debe ser un número." });
        }

        const pl = await playlist.findByPk(playlistId, {
            include: {
                model: song,
                through: { attributes: ["date"] }, // Evitar datos de la tabla intermedia
                include: [{
                    model: playlist,
                    through: { attributes: [] },
                    where: { typeP: "album" },
                    required: false,
                    as: "album"
                }]
            }
        });

        if (!pl) {
            return res.status(404).json({ message: "Playlist no encontrada" });
        }
        res.json(pl);
    } catch (error) {
        console.error("Error obteniendo la playlist:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


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
        const pl = await playlist.findOne({where: {id: parseInt(req.params.id, 10)}});
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
        const pl = await playlist.findOne({where: {id: parseInt(req.params.id, 10)}});
        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        await pl.destroy();
        res.json({ message: "Playlist eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
