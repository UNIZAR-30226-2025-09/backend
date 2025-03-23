import db from '#src/models/index'; // Ajusta la ruta si es necesario

/**
 * Toggle de "Like" para una canción.
 * POST /api/songs/:id/like
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
        console.log("user_id:", user_id);
        console.log("song_id:", song_id);
        console.log(`Intentando dar like/unlike: user_id=${user_id}, song_id=${song_id}`);

        // Buscar si ya existe la relación en SongLike
        const existingLike = await db.SongLike.findOne({
            where: { user_id, song_id }
        });

        if (existingLike) {
            // Ya existe el like => se elimina
            console.log("Like ya existe, eliminándolo...");
            await db.SongLike.destroy({ where: { user_id, song_id } });

            // Remover la canción de la playlist "Me Gusta" (playlist con id 0)
            let playlist = await db.playlist.findByPk(0);
            if (playlist) {
                const songFound = await db.song.findByPk(song_id);
                if (songFound) {
                    await playlist.removeSong(songFound);
                    console.log("Canción removida de la playlist de Me Gusta");
                }
            }
            return res.json({ message: "Like eliminado correctamente", liked: false });
        } else {
            // No existe => creamos el registro
            console.log("📝 Intentando insertar:", { user_id, song_id });
            const newLike = db.SongLike.build({ user_id, song_id });
            await newLike.save();

            // Agregar la canción a la playlist "Me Gusta" (playlist con id 0)
            let playlist = await db.playlist.findByPk(0);
            if (!playlist) {
                // Crear la playlist si no existe
                playlist = await db.playlist.create({
                    id: 0,
                    name: 'Mi Playlist de Me Gusta',
                    type: 'private',
                    typeP: 'playlist',
                    front_page: ''
                });
            }

            const songFound = await db.song.findByPk(song_id);
            if (songFound) {
                await playlist.addSong(songFound);
                console.log("Canción agregada a la playlist de Me Gusta");
            } else {
                console.log("No se encontró la canción para agregar a la playlist");
            }

            console.log("Registro creado:", newLike);
            return res.json({ message: "Like agregado correctamente y canción añadida a la playlist de Me Gusta", liked: true, newLike });
        }
    } catch (error) {
        console.error("Error en likeSong:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};




/**
 * Quitar "Like" a una canción de forma explícita (sin toggle).
 * DELETE /api/songs/:id/like
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
 * GET /api/songs/:user_id/likedSongs
 */
export const getLikedSongs = async (req, res) => {
    try {
        const userId = Number(req.params.user_id);
        if (isNaN(userId)) {
            return res.status(400).json({ error: "El user_id no es válido" });
        }

        console.log("Nos llega user_id en params:", userId);

        // Ejemplo: obtener info completa de las canciones que tengan like de ese usuario
        const likedSongs = await db.song.findAll({
            include: [{
                model: db.song_like,
                where: { user_id: userId },
                attributes: []
            }]
        });

        console.log("Canciones con like encontradas:", likedSongs.length);
        return res.json(likedSongs);
    } catch (error) {
        console.error("Error al obtener las canciones con like:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};