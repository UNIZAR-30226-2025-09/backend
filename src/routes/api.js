import express from "express";
import playlistRoutes from "#routes/playlists_routes"; // Importa las rutas de playlists
import playerRoutes from "#routes/player_routes"; // Importa las rutas del reproductor
import songsRoute from "#routes/songs_routes"; // Importa las rutas de canciones
import userRoute from "#routes/user_routes"; // Importa las rutas de gestión de usuarios
import stripeRoute from "#routes/stripe_routes"; // Importa las rutas de stripe (Api de pagos)
import artistRoute from "#routes/artist_routes"; // Importa las rutas de artistas
import songLikeRoutes from "#routes/song_like_routes"; // Importa las rutas de song like
import socialRoutes from "#routes/social_routes"; // Importa las rutas de song likeç
import lastPlaybackState from  "#routes/lastPlaybackState_routes";
import ratingRoutes from "#routes/playlist_feedback_routes"; // Importa las rutas de rating
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

/**
 * Rutas relacionadas con los usuarios
 * Se montan bajo el prefijo `/api/user`
 */
router.use("/user", userRoute);

/**
 * Rutas relacionadas con los pagos
 * Se montan bajo el prefijo `/api/stripe`
 */
router.use("/stripe", stripeRoute);

/**
 * Rutas relacionadas con los artistas
 * Se montan bajo el prefijo `/api/artist`
 */
router.use("/artist", artistRoute);

/**
 * Rutas relacionadas con los me gustas a canciones
 * Se montan bajo el prefijo `/api/song_like`
 */
router.use("/song_like", songLikeRoutes);

/**
 * Rutas relacionadas con la interacción social
 * entre los usuarios
 */
router.use("/social", socialRoutes);


/**
 * Rutas relacionadas con la relacion de
 * la ultima cancion del usuario
 */
router.use("/lastPlaybackState", lastPlaybackState);

/**
 * Rutas relacionadas con la valoración de playlists
* Se montan bajo el prefijo `/api/rating`
*/
router.use("/ratingPlaylist", ratingRoutes);


export default router;