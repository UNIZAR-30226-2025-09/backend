import express from "express";
import { getAllSongs,getSongById } from "#src/controllers/songs_controller";

const router = express.Router();

/**
 * Rutas para la gestión de canciones:
 *
 * - `GET /api/songs/` -> Devuelve todas las canciones disponibles en la base de datos.
 *
 * - `GET /api/songs/{id}` -> Devuelve los detalles de una canción específica por su ID.
 *                            Si no se encuentra la canción, devuelve un error 404.
 */

router.get("/", getAllSongs);
router.get("/:id", getSongById);

export default router;