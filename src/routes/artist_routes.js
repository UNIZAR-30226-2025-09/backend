import express from "express";
import * as artistController from "#controllers/artist_controller";

const router = express.Router();

/**
 * Rutas para la gestión de artistas:
 * - `GET /api/artist/artists` -> Devuelve todos los artistas disponibles en la base de datos.
 *   Responde con una lista de objetos que contienen solo los campos `id`, `name` y `photo`,
 *   ordenados alfabéticamente por nombre. Si no hay artistas, responde con un mensaje de error 404.
 */
router.get("/artists", artistController.getAllArtists);

router.get("/:artistId", artistController.getArtistDetails);

export default router;
