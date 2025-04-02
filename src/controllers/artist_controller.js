import db from "#src/models/index";
import { Op, Sequelize } from "sequelize"; // Asegúrate de importar Sequelize

/**
 * Obtiene todos los artistas.
 * GET /api/artist/artists
 */
export const getAllArtists = async (req, res) => {
    try {
        // Buscar todos los artistas en la BD
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
 * GET /api/artist/:artistId
*/
export const getArtistDetails = async (req, res) => {
    const { artistId } = req.params;

    try {
        console.log("Recuperando datos del artista...");

        // Buscar el artista por su ID
        const artist = await db.artist.findOne({
            where: { id: artistId },
            attributes: ["id", "name", "bio", "photo"], // Atributos básicos del artista
        });

        if (!artist) {
            console.log("Artista no encontrado");
            return res.status(404).json({ message: "Artista no encontrado" });
        }

        console.log(`Artista encontrado: ${artist.name}`);

        // Obtener las canciones del artista
        const songs = await db.song.findAll({
            include: [
                {
                    model: db.artist,
                    where: { id: artistId },
                    through: { model: db.song_artist }, // Asegúrate de que este modelo esté definido
                    attributes: []
                }
            ],
            attributes: ["id", "name", "duration", "photo_video", "type", "url_mp3"],
            raw: true
        });

        // Verifica si hay canciones para el artista
        if (songs.length === 0) {
            console.log("Este artista no tiene canciones.");
            return res.status(200).json({
                artist: {
                    id: artist.id,
                    name: artist.name,
                    bio: artist.bio,
                    photo: artist.photo,
                },
                message: "Este artista no tiene canciones."
            });
        }

        console.log(`${songs.length} canciones encontradas para el artista`);

        // Verificación de canciones con ID válido
        const validSongs = songs.filter(song => song.id);

        // Contar la cantidad de likes por canción
        const songsWithLikes = await Promise.all(validSongs.map(async (song) => {
            try {
                if (!song.id) {
                    console.error(`Canción sin ID válido: ${JSON.stringify(song)}`);
                    return { ...song, likes: 0 };
                }

                if (!db.SongLike) {
                    console.warn("La tabla song_like no está definida en los modelos");
                    return { ...song, likes: 0 };
                }

                const likeCount = await db.SongLike.count({
                    where: { song_id: song.id }
                });

                return { ...song, likes: likeCount };
            } catch (error) {
                console.error(`Error al contar likes para la canción ${song.name} (ID: ${song.id}):`, error);
                return { ...song, likes: 0 };
            }
        }));

        // Ordenar las canciones por likes de mayor a menor
        const sortedSongs = songsWithLikes.sort((a, b) => b.likes - a.likes);

        // Obtener los álbumes del artista, con la portada y el nombre
        const albums = await db.playlist.findAll({
            where: { artist_id: artistId, typeP: 'album' }, // Filtramos solo los álbumes
            attributes: ['id', 'name', 'front_page'] // Obtenemos el nombre y la portada del álbum
        });

        // Obtener las canciones de tipo "single" (sencillos)
        const singleSongs = songs.filter(song => song.type === 'sencillo');

        // Si no hay canciones con likes, obtener canciones aleatorias
        if (sortedSongs.every(song => song.likes === 0)) {
            console.log("No hay canciones con likes, devolviendo canciones aleatorias...");

            // Obtener hasta 5 canciones aleatorias del artista de las que ya tenemos
            const randomSongs = [...songs]
                .sort(() => 0.5 - Math.random())
                .slice(0, Math.min(5, songs.length));

            return res.json({
                artist: {
                    id: artist.id,
                    name: artist.name,
                    bio: artist.bio,
                    photo: artist.photo,
                },
                songs: randomSongs.map(song => ({...song, likes: 0})),
                albums: albums,   // Aquí devolvemos los álbumes con sus portadas y nombres
                singles: singleSongs, // Aquí devolvemos las canciones que no están en ningún álbum
            });
        }

        // Devolver las 5 canciones más populares (por likes)
        const topSongs = sortedSongs.slice(0, Math.min(5, sortedSongs.length));

        console.log("Devolviendo las canciones más populares:", topSongs);

        res.json({
            artist: {
                id: artist.id,
                name: artist.name,
                bio: artist.bio,
                photo: artist.photo,
            },
            songs: topSongs,
            albums: albums,   // Aquí devolvemos los álbumes con sus portadas y nombres
            singles: singleSongs, // Aquí devolvemos las canciones que no están en ningún álbum
        });

    } catch (error) {
        console.error("Error al obtener los datos del artista:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
















