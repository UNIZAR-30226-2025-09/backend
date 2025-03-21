import express from 'express';
import { likeSong, unlikeSong, getLikedSongs } from '#controllers/song_like_controller'; // Asegúrate de que esta importación sea correcta

const router = express.Router();

// Ruta para dar "me gusta" a una canción (POST)
router.post('/like', likeSong);

// Ruta para eliminar "me gusta" de una canción (POST)
router.post('/unlike', unlikeSong);

// Ruta para obtener todas las canciones que le gustan a un usuario (GET)
router.get('/:user_id/liked-songs', getLikedSongs);

export default router;
