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
        const { id } = req.params;
        // Busca la canción en la base de datos por su ID, incluyendo la playlist asociada (álbum)
        const song = await db.song.findOne({
            where: { id },
            include: [
                {
                    model: db.playlist,
                    as: 'album',
                    where: {typeP: "album"},
                    required: false
                }
            ]
        });

        if (!song) {
            return res.status(404).json({ message: `No se encontró la canción con ID ${id}` });
        }

        // Devuelve la canción con la información del álbum
        res.json(song);
    } catch (error) {
        console.error("Error al obtener la canción:", error);
        res.status(500).json({ message: "Error al obtener la canción", error: error.message });
    }
};
