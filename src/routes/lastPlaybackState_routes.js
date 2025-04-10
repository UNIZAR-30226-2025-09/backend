import express from "express";
import * as lastPlaybackState from "#controllers/lastPlaybackState_controller";

const router = express.Router();

// Ruta para obtener el último estado de reproducción de un usuario
router.get("/:userId", lastPlaybackState.getLastPlaybackState);

// Ruta para actualizar o crear el último estado de reproducción de un usuario
router.post("/:userId", lastPlaybackState.updateLastPlaybackState);

// Ruta para eliminar el último estado de reproducción de un usuario
router.delete('/:userId', lastPlaybackState.deleteLastPlaybackState);

export default router;