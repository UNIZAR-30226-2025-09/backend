import express from "express";
import * as artistController from "#controllers/artist_controller";

const router = express.Router();

/**
 * Rutas para la gestión de artistas:
 * - `GET /api/artist/artists` -> Devuelve todos los artistas disponibles en la base de datos.
 *   Responde con una lista de objetos que contienen solo los campos `id`, `name` y `photo`,
 *   ordenados alfabéticamente por nombre. Si no hay artistas, responde con un mensaje de error 404.
 * @swagger
 * tags:
 *   - name: Artists
 *     description: Operaciones relacionadas con los artistas.
 */

/**
 * @swagger
 * /api/artists:
 *   get:
 *     tags:
 *       - Artists
 *     description: Obtiene todos los artistas.
 *     responses:
 *       200:
 *         description: Lista de artistas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID del artista.
 *                   name:
 *                     type: string
 *                     description: El nombre del artista.
 *                   photo:
 *                     type: string
 *                     description: La URL de la foto del artista.
 *       404:
 *         description: No hay artistas disponibles.
 *       500:
 *         description: Error interno del servidor
 */
router.get("/artists", artistController.getAllArtists);

router.get("/:artistId", artistController.getArtistDetails);

export default router;
