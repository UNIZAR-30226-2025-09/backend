
// Función para dar 'me gusta' a una canción
import db from "#src/models/index";  // Asegúrate de que esta importación sea correcta
const { SongLike, Song, Playlist, User } = db;  // Asegúrate de que estás importando User correctamente


export const likeSong = async (req, res) => {
    const { user_id, song_id } = req.body;

    // Verify if the parameters are present
    if (!user_id || !song_id) {
        return res
            .status(400)
            .json({ message: 'user_id and song_id are required.' });
    }

    try {
        // Start a transaction
        await sequelize.transaction(async (t) => {
            // Verify if the user exists
            const user = await User.findByPk(user_id, { transaction: t });

            // Verify if the song exists
            const song = await Song.findByPk(song_id, { transaction: t });

            // Debugging: Print the values to verify that they are correct
            console.log('user_id:', user_id, 'song_id:', song_id); // Verify the data received
            console.log('Usuario encontrado:', user); // Verify if the user exists
            console.log('Canción encontrada:', song); // Verify if the song exists

            // Verify if the user or the song do not exist
            if (!user || !song) {
                return res
                    .status(400)
                    .json({ message: 'Usuario o canción no encontrados.' });
            }

            // Verify if the user already liked the song
            const existingLike = await SongLike.findOne({
                where: { user_id, song_id },
                transaction: t,
            });

            if (existingLike) {
                return res
                    .status(400)
                    .json({ message: "Ya has dado 'me gusta' a esta canción." });
            }

            // Create new 'like'
            const newLike = await SongLike.create(
                { user_id, song_id },
                { transaction: t },
            );

            // Get the song
            const songFound = await Song.findByPk(song_id, { transaction: t });

            // Verify if the playlist with ID 0 exists
            let playlist = await Playlist.findByPk(0, { transaction: t });

            if (!playlist) {
                playlist = await Playlist.create(
                    {
                        id: 0,
                        name: 'Mi Playlist de Me Gusta',
                        type: 'private',
                        typeP: 'playlist',
                        front_page: '',
                    },
                    { transaction: t },
                );
                console.log('Playlist creada:', playlist); // Log the created playlist
            }

            console.log('Adding song to playlist:', songFound); // Log the song being added
            // Add the song to the playlist
            await playlist.addSong(songFound, { transaction: t });

            return res.status(200).json({
                message:
                    "Canción añadida a tus 'me gusta' y a la playlist con ID 0.",
            });
        });
    } catch (error) {
        console.error("Error al dar 'me gusta' a la canción:", error);
        return res
            .status(500)
            .json({ message: "Error al dar 'me gusta' a la canción." });
    }
};



// Función para eliminar 'me gusta' de una canción
export const unlikeSong = async (req, res) => {
    const { user_id, song_id } = req.body;

    // Validar si los parámetros están presentes
    if (!user_id || !song_id) {
        return res.status(400).json({ message: "user_id y song_id son requeridos." });
    }

    try {
        // Verificar si el usuario ha dado 'me gusta' a la canción
        const existingLike = await SongLike.findOne({
            where: { user_id, song_id }
        });

        if (!existingLike) {
            return res.status(400).json({ message: "No has dado 'me gusta' a esta canción." });
        }

        // Eliminar el 'me gusta'
        await SongLike.destroy({
            where: { user_id, song_id }
        });

        // Obtener la canción
        const song = await Song.findByPk(song_id);
        const playlist = await Playlist.findByPk(0);

        // Eliminar la canción de la playlist si existe
        if (playlist) {
            await playlist.removeSong(song);
        }

        return res.status(200).json({ message: "Canción eliminada de tus 'me gusta' y de la playlist con ID 0." });

    } catch (error) {
        console.error("Error al eliminar 'me gusta' de la canción:", error);
        return res.status(500).json({ message: "Error al eliminar 'me gusta' de la canción." });
    }
};

// Función para obtener todas las canciones que le gustan al usuario
export const getLikedSongs = async (req, res) => {
    const { user_id } = req.params;

    if (!user_id) {
        return res.status(400).json({ message: "El parámetro user_id es requerido." });
    }

    try {
        const likedSongs = await Song.findAll({
            include: [{
                model: SongLike,
                where: { user_id },
                attributes: []
            }]
        });

        return res.status(200).json(likedSongs);

    } catch (error) {
        console.error("Error al obtener las canciones que te gustan:", error);
        return res.status(500).json({ message: "Error al obtener las canciones que te gustan." });
    }
};
