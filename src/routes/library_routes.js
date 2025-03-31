import { Router } from "express";
import { getUserLibrary } from "#controllers/library_controller";

const router = Router();

/**
 * Rutas para la gestión de la biblioteca del usuario autenticado:
 * - `GET /api/library/` -> Devuelve la biblioteca personalizada del usuario:
 *     Canciones que le han gustado (`likedSongs`)
 *     Playlists que le han gustado (`likedPlaylists`)
 *     Playlists que ha creado (`playlistsCreated`)
 *
 *   La ruta requiere un token JWT válido en la cabecera `Authorization` en formato:
 *     Authorization: Bearer <token>
 */
// No esta en tests
router.get("/", getUserLibrary);

export default router;