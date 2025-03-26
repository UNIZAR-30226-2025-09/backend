import express from 'express';
import {likeSong, unlikeSong, getLikedSongs, checkIfSongIsLiked} from '#controllers/song_like_controller'; // Asegúrate de que esta importación sea correcta

const router = express.Router();

router.post("/:id/like", likeSong);
router.delete("/:id/like", unlikeSong);
router.get("/:user_id/likedSongs", getLikedSongs);
router.get("/:id/like",checkIfSongIsLiked);

export default router;
