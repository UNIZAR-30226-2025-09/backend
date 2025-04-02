import express from "express";
import { getAllArtists } from "#src/controllers/artist_controller";

const router = express.Router();

/**
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
router.get("/artists", getAllArtists);

export default router;
