import db from "#src/models/index"; // Importa el modelo de canciones

/**
 * Obtiene todas las canciones disponibles en la base de datos.
 */
export const getAllSongs = async (req, res) => {
    try {
        const songs = await db.song.findAll();
        res.json(songs);
    } catch (error) {
        console.error("Error al obtener las canciones:", error);
        res.status(500).json({ message: "Error al obtener las canciones", error: error.message });
    }
};