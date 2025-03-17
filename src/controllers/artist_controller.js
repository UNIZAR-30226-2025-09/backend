import db from "#src/models/index";

/**
 * Obtiene todos los artistas.
 * GET /api/artists
 */
export const getAllArtists = async (req, res) => {
    try {
        // 🔹 Buscar todos los artistas en la BD
        const artists = await db.artist.findAll({
            attributes: ["id", "name", "photo"], // Solo devolver estos campos
            order: [["name", "ASC"]] // Orden alfabético
        });

        if (artists.length === 0) {
            return res.status(404).json({ message: "No hay artistas disponibles." });
        }

        res.json(artists);
    } catch (error) {
        console.error("Error al obtener los artistas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
