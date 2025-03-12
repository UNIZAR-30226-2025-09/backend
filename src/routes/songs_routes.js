import express from "express";
import { getAllSongs } from "#src/controllers/songs_controller";

const router = express.Router();

/**
 * Rutas para canciones
 * - POST `/api/songs/ obtiene todas las canciones de la BD
 *  */
router.get("/", getAllSongs);

export default router;