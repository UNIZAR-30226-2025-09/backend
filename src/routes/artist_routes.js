import express from "express";
import { getAllArtists } from "#src/controllers/artist_controller";

const router = express.Router();

/**
 * Rutas para la gestión de artistas:
 * - `GET /api/artists` -> Devuelve todos los artistas disponibles en la base de datos.
 *   Responde con una lista de objetos que contienen solo los campos `id`, `name` y `photo`,
 *   ordenados alfabéticamente por nombre. Si no hay artistas, responde con un mensaje de error 404.
 */
router.get("/artists", getAllArtists);

export default router;
