import db from '#src/models/index'; // Ajusta la ruta si es necesario
import { Op } from 'sequelize';

// FUSION DE likeSong y unlikeSong
/**
 * Gestiona el like/unlike de una canción.
 * Maneja tanto el toggle de like como la eliminación explícita.
 * POST /api/song_like/:songId/likeUnlike
 */
export const handleSongLike = async (req, res) => {
    try {
        const { user_id } = req.body;
        const song_id = req.params.id ? parseInt(req.params.id, 10) : null;

        // Validación de entrada
        if (!song_id || !user_id || isNaN(song_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        console.log("Datos recibidos:", { user_id, song_id });

        // 1. Obtener o crear la playlist de "Me Gusta" para este usuario
        let likedPlaylist = await db.playlist.findOne({
            where: {
                user_id,
                type: 'private',
                typeP: 'Vibra_likedSong'
            }
        });

        if (!likedPlaylist) {
            likedPlaylist = await db.playlist.create({
                user_id,
                name: 'Playlist de Me Gusta',
                type: 'private',
                typeP: 'Vibra_likedSong',
                front_page: ''
            });
            console.log("Playlist de Me Gusta creada: ID", likedPlaylist.id);
        }

        // 2. Buscar la canción
        const songFound = await db.song.findByPk(song_id);
        if (!songFound) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }

        // 3. Buscar like existente
        const existingLike = await db.SongLike.findOne({
            where: { user_id, song_id }
        });

        // 4. Manejar el like/unlike
        if (existingLike) {
            // Si ya existe el like, lo eliminamos
            await db.SongLike.destroy({ where: { user_id, song_id } });
            await likedPlaylist.removeSong(songFound);

            console.log("Like eliminado y canción removida de la playlist");
            return res.json({
                message: "Like eliminado correctamente",
                liked: false
            });
        } else {
            // Si no existe, creamos el like y añadimos a la playlist
            const newLike = await db.SongLike.create({ user_id, song_id });
            await likedPlaylist.addSong(songFound);

            console.log("Like agregado y canción añadida a la playlist");
            return res.json({
                message: "Like agregado correctamente",
                liked: true,
                newLike
            });
        }
    } catch (error) {
        console.error("Error en handleSongLike:", error);
        return res.status(500).json({
            error: "Error interno del servidor",
            details: error.message
        });
    }
};

/**
 * Toggle de "Like" para una canción.
 * POST /api/song_like/:id/like
 * - Si ya existe el like, se elimina.
 * - Si no existe, se crea.
 */
export const likeSong = async (req, res) => {
    try {
        const { user_id } = req.body; // user_id en el body
        const song_id = req.params.id ? parseInt(req.params.id, 10) : null;

        if (!song_id) {
            return res.status(400).json({ error: "ID de la canción es inválido" });
        }
        if (!user_id || isNaN(song_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        console.log("Datos recibidos en la API:");
        console.log("user_id:", user_id, "song_id:", song_id);

        // 1. Obtener o crear la playlist de "Me Gusta" para este usuario.
        let likedPlaylist = await db.playlist.findOne({
            where: { user_id, type: 'private', typeP: 'Vibra_likedSong' }
        });
        if (!likedPlaylist) {
            likedPlaylist = await db.playlist.create({
                user_id,
                name: 'Playlist de Me Gusta',
                type: 'private',
                typeP: 'Vibra_likedSong',
                front_page: ''
            });
            console.log("Playlist de Me Gusta creada: ID", likedPlaylist.id);
        } else {
            console.log("Playlist de Me Gusta encontrada: ID", likedPlaylist.id);
        }

        // 2. Buscar la canción y el like existente.
        const songFound = await db.song.findByPk(song_id);
        if (!songFound) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }

        const existingLike = await db.SongLike.findOne({
            where: { user_id, song_id }
        });

        // 3. Toggle: Si ya existe el like, lo eliminamos y removemos la canción de la playlist.
        if (existingLike) {
            console.log("Like ya existe, eliminándolo...");
            await db.SongLike.destroy({ where: { user_id, song_id } });
            await likedPlaylist.removeSong(songFound);
            console.log("Like eliminado y canción removida de la playlist");
            return res.json({ message: "Like eliminado correctamente", liked: false });
        } else {
            // 4. Si no existe, creamos el like y añadimos la canción a la playlist.
            console.log("📝 Intentando insertar like:", { user_id, song_id });
            const newLike = await db.SongLike.create({ user_id, song_id });
            await likedPlaylist.addSong(songFound);
            console.log("Like agregado y canción añadida a la playlist");
            return res.json({ message: "Like agregado correctamente y canción añadida a la playlist", liked: true, newLike });
        }
    } catch (error) {
        console.error("Error en likeSong:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};




/**
 * Quitar "Like" a una canción de forma explícita (sin toggle).
 * DELETE /api/song_like/:id/like
 */
export const unlikeSong = async (req, res) => {
    try {
        const { user_id } = req.body;
        const song_id = Number(req.params.id);

        if (!user_id || isNaN(song_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        const deleted = await db.song_like.destroy({
            where: { user_id, song_id }
        });

        if (!deleted) {
            return res.status(400).json({ error: "No has dado like a esta canción" });
        }

        console.log("Like eliminado correctamente:", { user_id, song_id });
        return res.json({ message: "Like eliminado correctamente" });
    } catch (error) {
        console.error("Error al quitar like de la canción:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtener todas las canciones que le gustan a un usuario.
 * GET /api/song_like/:user_id/likedSongs
 */

export const getLikedSongs = async (req, res) => {
    try {
        const userId = Number(req.params.user_id);
        if (isNaN(userId)) {
            return res.status(400).json({ error: "El user_id no es válido" });
        }

        console.log("Nos llega user_id en params:", userId);

        const likedSongs = await db.song.findAll({
            include: [{
                model: db.user,
                where: { id: userId },
                through: { attributes: [] } // This excludes junction table attributes
            }],
            attributes: ["id", "name", "type", "duration", "lyrics", "photo_video", "url_mp3", "genre"]
        });

        console.log("Canciones con like encontradas:", likedSongs.length);
        return res.json(likedSongs);
    } catch (error) {
        console.error("Error al obtener las canciones con like:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};

export const checkIfSongIsLiked = async (req, res) => {
    try {
        // Se obtiene el songId desde el parámetro de la ruta y el userId desde la query
        const songId = parseInt(req.params.id, 10);
        const userId = parseInt(req.query.userId, 10);

        console.log(`checkIfSongIsLiked: Parámetros recibidos -> songId: ${songId}, userId: ${userId}`);

        if (isNaN(songId) || isNaN(userId)) {
            console.error("checkIfSongIsLiked: Parámetros inválidos");
            return res.status(400).json({ error: "Parámetros inválidos. Asegúrate de que songId y userId sean números." });
        }

        console.log(`checkIfSongIsLiked: Verificando si la canción ${songId} está en favoritos para el usuario ${userId}`);

        // Nota: Reemplaza db.SongLike por db.song_like si ese es el nombre correcto de tu modelo
        const existingLike = await db.SongLike.findOne({
            where: { user_id: userId, song_id: songId }
        });
        console.log("checkIfSongIsLiked: Resultado de findOne:", existingLike);

        const isLiked = !!existingLike;
        console.log(`checkIfSongIsLiked: Resultado final -> isLiked: ${isLiked}`);

        return res.json({ isLiked });
    } catch (error) {
        console.error("checkIfSongIsLiked: Error al verificar si la canción está en favoritos:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};



