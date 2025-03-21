import db from "#src/models/index";
import playlist_like from "#models/playlist_like";
import Playlist_like from "#models/playlist_like";

/**
 * Obtiene todas las playlists.
 * GET /api/playlists
 */
export const getAllPlaylist = async (req, res) => {
    try {
        const playlists = await db.playlist.findAll();
        res.json(playlists);
    } catch (error) {
        console.error("Error al obtener las playlists:", error);
        res.status(500).json({ error: error.message });
    }
};

export const likePlaylist = async (req, res) => {
    try {
        const { user_id } = req.body; // Asegurar que el user_id viene en el body
        const playlist_id = req.params.id ? parseInt(req.params.id, 10) : null;
        if (!playlist_id) {
            return res.status(400).json({ error: "ID de la playlist es inválido" });
        }

        console.log("Datos recibidos en la API:");
        console.log("user_id:", user_id);
        console.log("playlist_id:", playlist_id);

        if (!user_id || isNaN(playlist_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        console.log(`Intentando dar like/unlike: user_id=${user_id}, playlist_id=${playlist_id}`);

        // Buscar si ya existe la relación en `playlist_like`
        const existingLike = await db.playlist_like.findOne({
            where: { user_id: user_id, playlist_id: playlist_id }
        });

        if (existingLike) {
            console.log("Like ya existe, eliminándolo...");
            await db.playlist_like.destroy({
                where: { user_id, playlist_id }
            });

            return res.json({ message: "Like eliminado correctamente", liked: false });
        } else {
            console.log("📝 Intentando insertar:", { user_id, playlist_id });

            const userIdNumber = Number(user_id);
            const playlistIdNumber = Number(playlist_id);

            console.log("📝 Verificando tipos:", { userIdNumber, playlistIdNumber });

            const newLike = db.playlist_like.build({
                user_id: user_id,
                playlist_id: playlist_id,
                playlistId: playlist_id,
            });

            console.log(newLike);

            await newLike.save();

            console.log("Registro creado:", newLike);

            return res.json({ message: "Like agregado correctamente", liked: true, newLike });
        }
    } catch (error) {
        console.error("Error en likePlaylist:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};





/**
 * Quitar like a una playlist.
 * DELETE /api/playlists/:id/like
 */
export const unlikePlaylist = async (req, res) => {
    try {
        const { user_id } = req.body;
        const playlist_id = Number(req.params.id);

        if (!user_id || isNaN(playlist_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        const deleted = await db.playlist_like.destroy({
            where: { user_id: user_id, playlist_id: playlist_id }
        });

        if (!deleted) {
            return res.status(400).json({ error: "No has dado like a esta playlist" });
        }

        res.json({ message: "Like eliminado correctamente" });
    } catch (error) {
        console.error("Error al quitar like de la playlist:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtiene todas las playlists con typeP = "Vibra".
 * GET /api/playlists/vibra
 */
export const getVibraPlaylists = async (req, res) => {
    try {
        const vibraPlaylists = await db.playlist.findAll({
            where: { typeP: "Vibra" },
            attributes: ["id", "name", "front_page"] // Solo traer estos campos
        });

        res.json(vibraPlaylists);
    } catch (error) {
        console.error("Error al obtener las playlists de Vibra:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtiene una playlist por ID con sus canciones.
 * GET /api/playlists/:id
 */
export const getPlaylistById = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        if (isNaN(playlistId)) {
            return res.status(400).json({ error: "ID inválido. Debe ser un número." });
        }

        const pl = await db.playlist.findByPk(playlistId, {
            include: [
                {
                    model: db.song,
                    through: { attributes: ["date"] }, // Mantiene la fecha de la tabla intermedia
                    include: [
                        {
                            model: db.artist,
                            as: "artists",
                            through: { attributes: [] }, // Evita traer la tabla intermedia `song_artist`
                            attributes: ["id", "name"]
                        },
                        {
                            model: db.playlist,
                            through: { attributes: [] },
                            where: { typeP: "album" },
                            required: false,
                            as: "album"
                        }
                    ]
                },
                {
                    model: db.user,
                    attributes: ["nickname"],
                }
            ]
        });

        if (!pl) return res.status(404).json({ error: "Playlist no encontrada" });

        console.log("Playlist obtenida:", JSON.stringify(pl, null, 2));

        return res.status(200).json(pl);
    } catch (error) {
        console.error("Error al obtener la playlist:", error);
        return res.status(500).json({ error: "Error al obtener la playlist", message: error.message });
    }
};

export const checkIfLiked = async (req, res) => {
    const { id } = req.params;  // ID de la playlist
    const { user_id } = req.query;  // ID del usuario desde la query

    try {
        // Consulta en la base de datos si este usuario ha dado like a esta playlist
        const liked = await db.playlist_like.findOne({
            where: { user_id: user_id, playlist_id: id }
        });

        // Devolvemos si está liked o no
        res.json({ isLiked: liked ? true : false });
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar like' });
    }
};


/**
 * Crea una nueva playlist.
 * POST /api/playlists
 */
export const createPlaylist = async (req, res) => {
    try {
        const { name, type, description, front_page } = req.body;
        const newPlaylist = await db.playlist.create({ name, type, description, front_page });

        res.status(201).json(newPlaylist);
    } catch (error) {
        console.error("Error al crear la playlist:", error);
        res.status(500).json({ error: error.message });
    }
};

/**
 * Actualiza una playlist por ID.
 * PUT /api/playlists/:id
 */
export const updatePlaylist = async (req, res) => {
    try {
        const { name, description, type, front_page } = req.body;
        const playlistId = Number(req.params.id);

        const pl = await db.playlist.findOne({ where: { id: playlistId } });
        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        await pl.update({ name, description, type, front_page });
        res.json(pl);
    } catch (error) {
        console.error("Error al actualizar la playlist:", error);
        res.status(500).json({ error: error.message });
    }
};

/**
 * Elimina una playlist por ID.
 * DELETE /api/playlists/:id
 */
export const deletePlaylist = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        const pl = await db.playlist.findOne({ where: { id: playlistId } });

        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        await pl.destroy();
        res.json({ message: "Playlist eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar la playlist:", error);
        res.status(500).json({ error: error.message });
    }
};