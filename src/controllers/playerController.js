const { song: Song, artist: Artist } = require('../models');
const Playlist = require('../models/playlist');
const path = require('path');

const BASE_URL = "http://localhost:5001";

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

            const fullUrlMp3 = `${BASE_URL}/songs/${path.basename(song.url_mp3)}`;

            console.log("Enviando canción con URL:", fullUrlMp3);

            return res.status(200).json({
                id: song.id,
                name: song.name,
                duration: song.duration,
                lyrics: song.lyrics,
                photo_video: song.photo_video,
                url_mp3: fullUrlMp3,
                artists: song.artists.map(artist => ({
                    id: artist.id,
                    name: artist.name
                }))
            });
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

            const fullUrlMp3 = `${BASE_URL}/songs/${path.basename(song.url_mp3)}`;

            if (!currentPlaylist.find(s => s.id === song.id)) {
                currentPlaylist.push({ id: song.id, url_mp3: fullUrlMp3 });
            }
            currentSongIndex = currentPlaylist.findIndex(s => s.id === song.id);
            isPlaying = true;

            if (req.user) {
                await Playlist.upsert({
                    userId: req.user.id,
                    songs: JSON.stringify(currentPlaylist)
                });
            }

            console.log(`Reproduciendo canción: ${fullUrlMp3}`);

            return res.status(200).json({
                message: `Reproduciendo canción con ID: ${song.id}`,
                url: fullUrlMp3,
                isPlaying
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
        console.log("Canción pausada");
        return res.status(200).json({ message: 'Reproducción pausada', isPlaying });
    },

    /**
     * Reproduce la siguiente canción en la cola de reproducción.
     * POST /api/player/next
     */
    playNextSong: async (req, res) => {
        if (currentPlaylist.length === 0) {
            return res.status(400).json({ message: 'La cola de reproducción está vacía' });
        }
        currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
        const nextSong = currentPlaylist[currentSongIndex];
        try {
            const song = await Song.findByPk(nextSong.id, {
                attributes: ['url_mp3']
            });
            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }

            const fullUrlMp3 = `${BASE_URL}/songs/${path.basename(song.url_mp3)}`;
            console.log(`Siguiente canción: ${fullUrlMp3}`);

            isPlaying = true;
            return res.status(200).json({ url: fullUrlMp3, isPlaying });
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
        currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        const previousSong = currentPlaylist[currentSongIndex];
        try {
            const song = await Song.findByPk(previousSong.id, {
                attributes: ['url_mp3']
            });
            if (!song) {
                return res.status(404).json({ message: 'Canción no encontrada' });
            }

            const fullUrlMp3 = `${BASE_URL}/songs/${path.basename(song.url_mp3)}`;
            console.log(`Canción anterior: ${fullUrlMp3}`);

            isPlaying = true;
            return res.status(200).json({ url: fullUrlMp3, isPlaying });
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
