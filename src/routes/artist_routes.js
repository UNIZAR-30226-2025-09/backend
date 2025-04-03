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

/**
 * @swagger
 * /api/artist/{artistId}:
 *   get:
 *     tags:
 *       - Artists
 *     description: Obtiene los detalles de un artista específico, sus canciones populares, álbumes y sencillos.
 *     parameters:
 *       - in: path
 *         name: artistId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del artista
 *     responses:
 *       200:
 *         description: Detalles del artista
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 artist:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del artista
 *                     name:
 *                       type: string
 *                       description: Nombre del artista
 *                     bio:
 *                       type: string
 *                       description: Biografía del artista
 *                     photo:
 *                       type: string
 *                       description: URL de la foto del artista
 *                 songs:
 *                   type: array
 *                   description: Lista de las canciones más populares (máximo 5)
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       duration:
 *                         type: string
 *                       photo_video:
 *                         type: string
 *                       type:
 *                         type: string
 *                       url_mp3:
 *                         type: string
 *                       likes:
 *                         type: integer
 *                 albums:
 *                   type: array
 *                   description: Álbumes del artista
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       front_page:
 *                         type: string
 *                 singles:
 *                   type: array
 *                   description: Canciones de tipo sencillo
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       duration:
 *                         type: string
 *                       photo_video:
 *                         type: string
 *                       type:
 *                         type: string
 *                       url_mp3:
 *                         type: string
 *       404:
 *         description: Artista no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Artista no encontrado
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */
router.get("/:artistId", artistController.getArtistDetails);

export default router;