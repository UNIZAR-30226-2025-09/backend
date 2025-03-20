import express from "express";
import * as playlistController from "#controllers/playlists_controller";
const router = express.Router();

/**
 * Rutas para la gestión de playlists
 * - GET `/api/playlists/` -> Obtiene todas las playlists
 * - GET `/api/playlists/vibra` -> Obtiene todas las playlists oficiales de Vibra
 * - GET `/api/playlists/:id` -> Obtiene una playlist por su ID
 * - POST `/api/playlists/` -> Crea una nueva playlist
 * - PUT `/api/playlists/:id` -> Actualiza una playlist por su ID
 * - DELETE `/api/playlists/:id` -> Elimina una playlist por su ID
 */


router.get("/", playlistController.getAllPlaylist);
router.get("/vibra", playlistController.getVibraPlaylists);
router.get("/:id", playlistController.getPlaylistById);
router.post("/", playlistController.createPlaylist);
router.put("/:id", playlistController.updatePlaylist);
router.delete("/:id", playlistController.deletePlaylist);
router.post("/:id/like", playlistController.likePlaylist);
router.delete("/:id/like", playlistController.unlikePlaylist);



export default router;