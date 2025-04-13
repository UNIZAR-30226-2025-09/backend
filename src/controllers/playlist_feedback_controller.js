import db, { sequelize} from '#src/models/index';

/**
 * Añade o actualiza la valoración de una playlist.
 * POST /api/ratingPlaylist/:id/rate
 */
export const ratePlaylist = async (req, res) => {
    try {
        const { user_id, rating } = req.body;
        const playlist_id = Number(req.params.id);

        // Validación de datos
        if (!user_id || isNaN(playlist_id) || rating < 1 || rating > 5) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        console.log("Datos recibidos:", { user_id, playlist_id, rating });

        // Buscar la playlist
        const playlist = await db.playlist.findByPk(playlist_id);
        if (!playlist) {
            return res.status(404).json({ error: "Playlist no encontrada" });
        }

        // Buscar valoración existente
        const existingRating = await db.playlist_feedback.findOne({
            where: { user_id, playlist_id }
        });

        // Actualizar o crear la valoración
        let message;
        if (existingRating) {
            await existingRating.update({ rating });
            message = "Valoración actualizada correctamente";
            console.log("Valoración actualizada:", { user_id, playlist_id, rating });
        } else {
            await db.playlist_feedback.create({ user_id, playlist_id, rating });
            message = "Valoración añadida correctamente";
            console.log("Nueva valoración:", { user_id, playlist_id, rating });
        }

        // Obtener todas las valoraciones de la playlist
        const allRatings = await db.playlist_feedback.findAll({
            where: { playlist_id },
            attributes: ['rating']
        });

        // Calcular el promedio manualmente
        const totalRatings = allRatings.length;
        const sumRatings = allRatings.reduce((sum, feedback) => sum + feedback.rating, 0);
        const avgRating = (totalRatings > 0 ? (sumRatings / totalRatings) : 0).toFixed(2);

        console.log("Valoración promedio actualizada:", avgRating);

        return res.status(200).json({
            message,
            averageRating: avgRating
        });
    } catch (error) {
        console.error("Error al valorar la playlist:", error);
        return res.status(500).json({ 
            error: "Error interno del servidor",
            details: error.message
        });
    }
};

/**
 * Obtiene la valoración promedio de una playlist.
 * GET /api/ratingPlaylist/:id/rating
 */
export const getPlaylistRating = async (req, res) => {
    try {
        const playlist_id = Number(req.params.id);

        if (isNaN(playlist_id)) {
            return res.status(400).json({ error: "ID de playlist inválido" });
        }

        console.log("Obteniendo valoración para playlist:", playlist_id);

        // Obtener todas las valoraciones de la playlist
        const allRatings = await db.playlist_feedback.findAll({
            where: { playlist_id },
            attributes: ['rating']
        });

        // Calcular el promedio manualmente
        const totalRatings = allRatings.length;
        const sumRatings = allRatings.reduce((sum, feedback) => sum + feedback.rating, 0);
        const avgRating = (totalRatings > 0 ? (sumRatings / totalRatings) : 0).toFixed(2);

        console.log("Valoración promedio calculada manualmente:", avgRating);

        return res.status(200).json({
            averageRating: avgRating
        });
    } catch (error) {
        console.error("Error al obtener la valoración de la playlist:", error);
        return res.status(500).json({ 
            error: "Error interno del servidor",
            details: error.message
        });
    }
};

/**
 * Obtiene la valoración dada por un usuario específico a una playlist.
 * GET /api/ratingPlaylist/:id/user-rating?userId=X
 */
export const getUserRating = async (req, res) => {
    try {
        const playlist_id = Number(req.params.id);
        const user_id = Number(req.query.userId);

        // Validación de datos
        if (isNaN(playlist_id) || isNaN(user_id)) {
            return res.status(400).json({ error: "IDs inválidos" });
        }

        console.log("Obteniendo valoración de usuario:", { user_id, playlist_id });

        // Buscar la valoración del usuario para la playlist
        const userRating = await db.playlist_feedback.findOne({
            where: { user_id, playlist_id },
            attributes: ['rating']
        });

        // Devolver la valoración del usuario o 0 si no existe
        return res.status(200).json({
            userRating: userRating ? userRating.rating : 0
        });
    } catch (error) {
        console.error("Error al obtener la valoración del usuario:", error);
        return res.status(500).json({ 
            error: "Error interno del servidor",
            details: error.message
        });
    }
};