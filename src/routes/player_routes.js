import express from "express";
import * as playerController from "#controllers/player_controller"; // Importa el controlador del reproductor

const router = express.Router();

/**
 * Rutas para obtener detalles y recursos de la canción
 * - GET `/api/player/details/:songId` → Obtiene los detalles de una canción
 * - GET `/api/player/lyrics/:songId` → Obtiene la letra de una canción
 */
router.get("/details/:songId", playerController.getSongDetails);
router.get("/lyrics/:songId", playerController.getLyrics);

/**
 * Rutas para acciones de reproducción
 * - POST `/api/player/play/:songId` → Reproduce una canción
 * - POST `/api/player/pause/:songId` → Pausa la reproducción
 * - POST `/api/player/next` → Reproduce la siguiente canción en la cola
 * - POST `/api/player/previous` → Reproduce la canción anterior en la cola
 */
router.post("/play/:songId", playerController.playSong);
router.post("/pause/:songId", playerController.pauseSong);
router.post("/next", playerController.playNextSong);
router.post("/previous", playerController.playPreviousSong);

export default router;