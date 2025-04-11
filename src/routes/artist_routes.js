import express from "express";
import * as artistController from "#controllers/artist_controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Artists
 *     description: Operaciones relacionadas con los artistas.
 */

/**
 * @swagger
 * /api/artist/artists:
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
 *               oneOf:
 *                 - type: object
 *                   properties:
 *                     artist:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: ID del artista
 *                         name:
 *                           type: string
 *                           description: Nombre del artista
 *                         bio:
 *                           type: string
 *                           description: Biografía del artista
 *                         photo:
 *                           type: string
 *                           description: URL de la foto del artista
 *                     message:
 *                       type: string
 *                       example: "Este artista no tiene canciones."
 *                   description: Respuesta cuando el artista no tiene canciones
 *                 - type: object
 *                   properties:
 *                     artist:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: ID del artista
 *                         name:
 *                           type: string
 *                           description: Nombre del artista
 *                         bio:
 *                           type: string
 *                           description: Biografía del artista
 *                         photo:
 *                           type: string
 *                           description: URL de la foto del artista
 *                     songs:
 *                       type: array
 *                       description: Lista de las canciones más populares (máximo 5) o aleatorias si no hay likes
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                           duration:
 *                             type: string
 *                           photo_video:
 *                             type: string
 *                           type:
 *                             type: string
 *                           url_mp3:
 *                             type: string
 *                           likes:
 *                             type: integer
 *                     albums:
 *                       type: array
 *                       description: Álbumes del artista
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                           front_page:
 *                             type: string
 *                     singles:
 *                       type: array
 *                       description: Canciones de tipo sencillo
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                           duration:
 *                             type: string
 *                           photo_video:
 *                             type: string
 *                           type:
 *                             type: string
 *                           url_mp3:
 *                             type: string
 *       404:
 *         description: Artista no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Artista no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
 */
router.get("/:artistId", artistController.getArtistDetails); // Sin testear

export default router;