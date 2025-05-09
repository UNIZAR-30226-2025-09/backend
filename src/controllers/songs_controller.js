import db from "#src/models/index";
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

export const getAllAdds = async (req, res) => {
  try {
      const adds = await db.song.findAll(
          {where: {type: "anuncio"},
          });

      res.status(200).json(adds);
  }   catch (error){
      console.error("Error al obtener los anuncios:", error);
      res.status(500).json({ message: "Error al obtener los anuncios", error: error.message });
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

export const getSongArtists = async (req, res) => {
    try {
        const songId = parseInt(req.params.songId);

        // Find all artists for this song using the junction table
        const artists = await db.artist.findAll({
            include: [
                {
                    model: db.song,
                    as: 'songs',
                    where: { id: songId },
                    through: { attributes: [] } // Exclude the junction table attributes
                }
            ]
        });

        return res.status(200).json({ artists });
    } catch (error) {
        console.error('Error fetching artists for song:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
