import db from "#src/models/index";
import { Op, Sequelize } from "sequelize"; // Asegúrate de importar Sequelize

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


/**
 * Obtiene los detalles del artista.
 * GET /api/artists/:artistId
*/
/*
export const getArtistDetails = async (req, res) => {
    const { artistId } = req.params;

    try {
        console.log("Recuperando datos del artista...");

        // 🔹 Buscar el artista por su ID
        const artist = await db.artist.findOne({
            where: { id: artistId },
            attributes: ["id", "name", "bio", "photo"], // Atributos básicos del artista
        });

        if (!artist) {
            console.log("Artista no encontrado");
            return res.status(404).json({ message: "Artista no encontrado" });
        }

        console.log(`Artista encontrado: ${artist.name}`);

        // 🔹 Obtener las canciones asociadas al artista
        const songs = await db.song.findAll({
            include: [
                {
                    model: db.artist,
                    where: { id: artistId }, // Relacionamos el artista con las canciones
                    attributes: [] // No es necesario incluir los atributos del artista aquí
                }
            ],
            attributes: ["id", "name", "duration", "photo_video"], // Atributos básicos de la canción
            raw: true
        });

        // Verifica si hay canciones para el artista
        if (songs.length === 0) {
            console.log("Este artista no tiene canciones.");
            return res.status(404).json({ message: "Este artista no tiene canciones." });
        }

        console.log(`${songs.length} canciones encontradas para el artista`);

        // 🔹 Verificación de canciones con ID válido
        const validSongs = songs.filter(song => song.id);
        if (validSongs.length !== songs.length) {
            console.warn("Algunas canciones no tienen ID válido:", songs.filter(song => !song.id));
        }

        // 🔹 Contar la cantidad de likes por canción (solo si la tabla `song_like` tiene datos)
        const songsWithLikes = await Promise.all(validSongs.map(async (song) => {
            try {
                // Verificamos si song.id existe y es válido
                if (!song.id) {
                    console.error(`Canción sin ID válido: ${JSON.stringify(song)}`);
                    return { ...song, likes: 0 }; // Asignamos 0 likes si no tiene ID válido
                }

                // Si no hay datos en `song_like`, asignamos 0 likes directamente
                const likeCount = await db.song_like.count({
                    where: { song_id: song.id }
                });

                // Si `likeCount` es 0, lo asignamos correctamente
                if (likeCount === 0) {
                    console.log(`Canción ${song.name} no tiene likes.`);
                }

                return { ...song, likes: likeCount };
            } catch (error) {
                console.error(`Error al contar likes para la canción ${song.name} (ID: ${song.id}):`, error);
                return { ...song, likes: 0 }; // Si algo falla, asignamos 0 likes
            }
        }));

        console.log("Canciones con likes (verificando 0 likes si no se encuentran):", songsWithLikes);

        // 🔹 Ordenar las canciones por likes de mayor a menor
        const sortedSongs = songsWithLikes.sort((a, b) => b.likes - a.likes);

        // 🔹 Si no hay canciones con likes (todas tienen 0 likes), obtener canciones aleatorias
        if (sortedSongs.length === 0 || sortedSongs[0].likes === 0) {
            console.log("No hay canciones con likes, devolviendo canciones aleatorias...");

            // Obtener canciones aleatorias del artista
            const randomSongs = await db.song.findAll({
                where: { id: { [Op.in]: songs.map(song => song.id) } }, // Filtrar por las canciones del artista
                attributes: ["id", "name", "duration", "photo_video"],
                order: Sequelize.fn('RANDOM'), // Usamos RANDOM() para PostgreSQL
                limit: 5
            });

            return res.json({
                artist: {
                    id: artist.id,
                    name: artist.name,
                    bio: artist.bio,
                    photo: artist.photo,
                },
                songs: randomSongs, // Si no hay likes, canciones aleatorias
            });
        }

        // 🔹 Devolver las 5 canciones más populares (por likes)
        const topSongs = sortedSongs.slice(0, 5);

        console.log("Devolviendo las 5 canciones más populares:", topSongs);

        res.json({
            artist: {
                id: artist.id,
                name: artist.name,
                bio: artist.bio,
                photo: artist.photo,
            },
            songs: topSongs, // Las 5 canciones más populares
        });

    } catch (error) {
        console.error("Error al obtener los datos del artista:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

 */












