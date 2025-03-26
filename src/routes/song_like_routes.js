import express from 'express';
import { likeSong, unlikeSong, getLikedSongs } from '#controllers/song_like_controller';

const router = express.Router();

/**
 * Rutas para la gestión de me gustas de canciones:
 *
 * - `POST /api/song-likes/like` -> Da "me gusta" a una canción. Requiere `user_id` y `song_id` en el cuerpo.
 *                                 También añade la canción a la playlist con ID 0 (playlist de favoritos).
 *
 * - `POST /api/song-likes/unlike` -> Quita el "me gusta" de una canción. Requiere `user_id` y `song_id` en el cuerpo.
 *                                    También elimina la canción de la playlist con ID 0 si estaba añadida.
 *
 * - `GET /api/song-likes/:user_id/liked-songs` -> Devuelve todas las canciones a las que el usuario (por `user_id`) ha dado "me gusta".
 */
router.post('/like', likeSong);
router.post('/unlike', unlikeSong);
router.get('/:user_id/liked-songs', getLikedSongs);

export default router;