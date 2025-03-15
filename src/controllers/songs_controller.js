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

/**
 * Obtiene una canción por su ID.
 */
export const getSongById = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID de los parámetros de la URL
        // Busca la canción en la base de datos por su ID
        const song = await db.song.findOne({ where: { id } });
        if (!song) {
            return res.status(404).json({ message: `No se encontró la canción con ID ${id}` });
        }
        res.json(song); // Devuelve la canción en formato JSON
    } catch (error) {
        console.error("Error al obtener la canción:", error);
        res.status(500).json({ message: "Error al obtener la canción", error: error.message });
    }
};