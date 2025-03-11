import express from "express";
import playlistRoutes from "#routes/playlist_routes"; // Importa las rutas de playlists
import playerRoutes from "#routes/player_routes"; // Importa las rutas del reproductor
import songsRoute from "#routes/songs_routes"; // Importa las rutas de canciones

const router = express.Router();

/**
 * Rutas relacionadas con playlists
 * Se montan bajo el prefijo `/api/playlists`
 */
router.use("/playlists", playlistRoutes);

/**
 * Rutas relacionadas con el reproductor de música
 * Se montan bajo el prefijo `/api/player`
 */
router.use("/player", playerRoutes);

/**
 * Rutas relacionadas con las canciones
 * Se montan bajo el prefijo `/api/songs`
 */
router.use("/songs", songsRoute);

export default router;