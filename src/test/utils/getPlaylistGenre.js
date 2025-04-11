import db from '#models/index';
/**
 * Esta función determina el género predominante de las canciones de una playlist.
 * Recibe el ID de la playlist como parámetro.
 * Obtiene todas las canciones asociadas a la playlist y analiza sus géneros.
 * Calcula el género que aparece con mayor frecuencia entre las canciones.
 * Devuelve una cadena de texto que representa el género predominante de la playlist.
 */
export async function getPlaylistGenre(playlistId) {
    // Obtener los IDs de las canciones de la playlist
    const songIds = await db.song_playlist.findAll({
        where: { playlist_id: playlistId },
        attributes: ['song_id']  // Solo necesitamos los IDs de las canciones
    });

    // Obtener los géneros de las canciones correspondientes
    const genres = await db.song.findAll({
        where: {
            id: songIds.map(song => song.song_id),  // Mapear los song_ids a los géneros de las canciones
        },
        attributes: ['genre']  // Solo necesitamos los géneros
    });

    // Contar los géneros
    const genreCount = genres.reduce((acc, song) => {
        acc[song.genre] = (acc[song.genre] || 0) + 1;
        return acc;
    }, {});

    // Determinar el género predominante
    let maxCount = 0;
    let predominantGenre = null;
    for (const genre in genreCount) {
        if (genreCount[genre] > maxCount) {
            maxCount = genreCount[genre];
            predominantGenre = genre;
        }
    }

    return predominantGenre;
}