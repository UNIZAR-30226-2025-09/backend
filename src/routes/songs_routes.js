import express from "express";
import { getAllSongs,getSongById } from "#src/controllers/songs_controller";

const router = express.Router();

/**
 * Rutas para canciones
 * - GET `/api/songs/ obtiene todas las canciones de la BD
 *  */
router.get("/", getAllSongs);

/**
 * Rutas para canciones
 * - GET `/api/songs/{id} obtiene la canción con id "id"
 *  */
router.get("/:id", getSongById);

export default router;