import express from "express";
import * as playlistController from "#controllers/playlists_controller";
const router = express.Router();

/**
 * Rutas para la gestión de playlists:
 *
 * - `GET /api/playlists/`-> Devuelve todas las playlists (incluyendo una playlist por defecto si no existe)
 * - `GET /api/playlists/vibra` -> Devuelve todas las playlists oficiales de Vibra (`typeP = "Vibra"`)
 * - `GET /api/playlists/:id` -> Devuelve los datos completos de una playlist por ID, incluyendo canciones y artistas
 * - `POST /api/playlists/` -> Crea una nueva playlist
 * - `PUT /api/playlists/:id` -> Actualiza una playlist existente por ID
 * - `DELETE /api/playlists/:id` -> Elimina una playlist por ID
 * - `POST /api/playlists/:id/like` -> Da like o quita like si ya existe (comportamiento toggle)
 * - `DELETE /api/playlists/:id/like` -> Quita el like a una playlist (si lo tiene)
 * - `GET /api/playlists/:id/like?user_id=ID` -> Comprueba si un usuario ha dado like a una playlist
 * - `GET /api/playlists/liked/:userId` -> Devuelve las playlists que un usuario ha marcado con like
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

export default router;