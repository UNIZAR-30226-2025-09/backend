const { Song, Artist } = require('../models'); // Asegúrate de que 'Song' y 'Artist' están exportados correctamente
const Playlist = require('../models/playlist'); // Modelo opcional para guardar la cola persistente
const path = require('path');

// Gestión de la cola de reproducción en memoria (para pruebas o desarrollo)
let currentPlaylist = [];
let currentSongIndex = 0;
let isPlaying = false;

const playerController = {
    /**
     * Obtiene la información detallada de una canción por su ID, incluyendo sus artistas.
     * GET /api/player/details/:songId
     */
    getSongDetails: async (req, res) => {
        const songId = req.params.songId;
        try {
            const song = await Song.findByPk(songId, {
                include: [{
                    model: Artist,
                    through: { attributes: [] },
                    attributes: ['id', 'name']
                }],
                attributes: ['id', 'name', 'duration', 'lyrics', 'photo_video', 'url_mp3']
            });

            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }

            // Formatear la respuesta para incluir la información de los artistas
            const songWithArtists = {
                id: song.id,
                name: song.name,
                duration: song.duration,
                lyrics: song.lyrics,
                photo_video: song.photo_video,
                url_mp3: song.url_mp3,
                artists: song.artists.map(artist => ({
                    id: artist.id,
                    name: artist.name
                }))
            };

            return res.status(200).json(songWithArtists);
        } catch (error) {
            console.error('Error al obtener la canción:', error);
            return res.status(500).json({
                message: 'Error al obtener la información de la canción',
                error: error.message
            });
        }
    },

    /**
     * Reproduce una canción por su ID y la agrega a la cola.
     * POST /api/player/play/:songId
     */
    playSong: async (req, res) => {
        const songId = req.params.songId;
        try {
            const song = await Song.findByPk(songId, {
                attributes: ['id', 'url_mp3']
            });
            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }

            // Se asume que el middleware de autenticación llena req.user; si no, usa un usuario por defecto.
            const userId = req.user ? req.user.id : null;

            // Agregar la canción a la cola si aún no está incluida
            if (!currentPlaylist.find(s => s.id === song.id)) {
                currentPlaylist.push({ id: song.id, url_mp3: song.url_mp3 });
            }
            currentSongIndex = currentPlaylist.findIndex(s => s.id === song.id);
            isPlaying = true;

            // Persistir la cola en la base de datos (opcional)
            if (userId) {
                await Playlist.upsert({
                    userId: userId,
                    songs: JSON.stringify(currentPlaylist)
                });
            }

            return res.status(200).json({
                message: `Reproduciendo la canción con ID: ${song.id}`,
                url: song.url_mp3,
                isPlaying: isPlaying
            });
        } catch (error) {
            console.error('Error al reproducir la canción:', error);
            return res.status(500).json({
                message: 'Error al reproducir la canción',
                error: error.message
            });
        }
    },

    /**
     * Pausa la reproducción de la canción actual.
     * POST /api/player/pause/:songId
     */
    pauseSong: (req, res) => {
        isPlaying = false;
        return res.status(200).json({ message: 'Reproducción pausada', isPlaying: isPlaying });
    },

    /**
     * Reproduce la siguiente canción en la cola de reproducción.
     * POST /api/player/next
     */
    playNextSong: async (req, res) => {
        if (currentPlaylist.length === 0) {
            return res.status(400).json({ message: 'La cola de reproducción está vacía' });
        }
        // Navegación circular
        currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
        const nextSong = currentPlaylist[currentSongIndex];
        try {
            const song = await Song.findByPk(nextSong.id, {
                attributes: ['url_mp3']
            });
            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }
            isPlaying = true;
            return res.status(200).json({ url: song.url_mp3, isPlaying: isPlaying });
        } catch (error) {
            console.error('Error al reproducir la siguiente canción:', error);
            return res.status(500).json({
                message: 'Error al reproducir la siguiente canción',
                error: error.message
            });
        }
    },

    /**
     * Reproduce la canción anterior en la cola de reproducción.
     * POST /api/player/previous
     */
    playPreviousSong: async (req, res) => {
        if (currentPlaylist.length === 0) {
            return res.status(400).json({ message: 'La cola de reproducción está vacía' });
        }
        // Navegación circular
        currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        const previousSong = currentPlaylist[currentSongIndex];
        try {
            const song = await Song.findByPk(previousSong.id, {
                attributes: ['url_mp3']
            });
            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }
            isPlaying = true;
            return res.status(200).json({ url: song.url_mp3, isPlaying: isPlaying });
        } catch (error) {
            console.error('Error al reproducir la canción anterior:', error);
            return res.status(500).json({
                message: 'Error al reproducir la canción anterior',
                error: error.message
            });
        }
    },

    /**
     * Obtiene la letra de la canción por su ID.
     * GET /api/player/lyrics/:songId
     */
    getLyrics: async (req, res) => {
        const songId = req.params.songId;
        try {
            const song = await Song.findByPk(songId, { attributes: ['lyrics'] });
            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }
            if (!song.lyrics) {
                return res.status(404).json({ message: 'Letra no encontrada para esta canción' });
            }
            return res.status(200).json({ lyrics: song.lyrics });
        } catch (error) {
            console.error('Error al obtener la letra:', error);
            return res.status(500).json({
                message: 'Error al obtener la letra',
                error: error.message
            });
        }
    }
};

module.exports = playerController;
