import express from "express";
import { getAllArtists } from "#src/controllers/artist_controller";

const router = express.Router();

/**
 * Rutas para la gestión de artistas:
 * - `GET /api/user/profile` -> Obtiene los datos del perfil del usuario autenticado.
 */

router.get("/artists", getAllArtists);

export default router;
