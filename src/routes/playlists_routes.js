import express from "express";
import * as playlistController from "#controllers/playlists_controller";
import {getOrCreateLikedPlaylist} from "#controllers/playlists_controller";
const router = express.Router();

/**
 * Rutas para la gestión de playlists
 * - GET `/api/playlists/` -> Obtiene todas las playlists
 * - GET `/api/playlists/vibra` -> Obtiene todas las playlists oficiales de Vibra
 * - GET `/api/playlists/:id` -> Obtiene una playlist por su ID
 * - POST `/api/playlists/` -> Crea una nueva playlist
 * - PUT `/api/playlists/:id` -> Actualiza una playlist por su ID
 * - DELETE `/api/playlists/:id` -> Elimina una playlist por su ID
 * - GET `/api/playlists/liked/:userId` -> Obtiene las playlists que un usuario ha dado like
 */


router.get("/", playlistController.getAllPlaylist);
router.get("/vibra", playlistController.getVibraPlaylists);
router.get("/:id", playlistController.getPlaylistById);
router.post("/", playlistController.createPlaylist);
router.put("/:id", playlistController.updatePlaylist);
router.delete("/:id", playlistController.deletePlaylist);
router.post("/:id/like", playlistController.likePlaylist);
router.delete("/:id/like", playlistController.unlikePlaylist);
router.get("/:id/like", playlistController.checkIfLiked);
router.get("/liked/:userId", playlistController.getPlaylistLike);
router.get('/liked-song/:userId', playlistController.getLikedSongPlaylist);

// En playlistRoutes.js o el archivo de rutas correspondiente
router.post('/songliked', playlistController.getOrCreateLikedPlaylist);


export default router;