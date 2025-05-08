import express from "express";

import {getAllAdds, getAllSongs, getSongById,getSongArtists} from "#controllers/songs_controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Songs
 *     description: Operaciones relacionadas con las canciones.
 */

/**
 * @swagger
 * /api/songs:
 *   get:
 *     tags:
 *       - Songs
 *     description: Devuelve todas las canciones disponibles en la base de datos.
 *     responses:
 *       200:
 *         description: Lista de canciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la canción.
 *                   name:
 *                     type: string
 *                     description: El nombre de la canción.
 *                   duration:
 *                     type: integer
 *                     description: La duración de la canción en segundos.
 *                   lyrics:
 *                     type: string
 *                     description: Las letras de la canción.
 *                   photo_video:
 *                     type: string
 *                     description: La URL de la foto o video relacionado con la canción.
 *                   url_mp3:
 *                     type: string
 *                     description: La URL del archivo MP3 de la canción.
 *                   genre:
 *                     type: string
 *                     description: El género de la canción.
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getAllSongs);


router.get("/adds", getAllAdds); // Sin testear ni documentar


/**
 * @swagger
 * /api/songs/{id}:
 *   get:
 *     tags:
 *       - Songs
 *     description: Devuelve los detalles de una canción específica por su ID. Si no se encuentra la canción, devuelve un error 404.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la canción.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la canción
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El ID de la canción.
 *                 name:
 *                   type: string
 *                   description: El nombre de la canción.
 *                 duration:
 *                   type: integer
 *                   description: La duración de la canción en segundos.
 *                 lyrics:
 *                   type: string
 *                   description: Las letras de la canción.
 *                 photo_video:
 *                   type: string
 *                   description: La URL de la foto o video relacionado con la canción.
 *                 url_mp3:
 *                   type: string
 *                   description: La URL del archivo MP3 de la canción.
 *                 genre:
 *                   type: string
 *                   description: El género de la canción.
 *       404:
 *         description: No se encontró la canción con el ID especificado.
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getSongById);


/**
 * @swagger
 * /api/songs/{songId}/artists:
 *   get:
 *     tags:
 *       - Songs
 *     description: Get all artists for a specific song
 *     parameters:
 *       - in: path
 *         name: songId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the song
 *     responses:
 *       200:
 *         description: List of artists for the song
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 artists:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       photo:
 *                         type: string
 *                       bio:
 *                         type: string
 *       404:
 *         description: Song not found or no artists found
 *       500:
 *         description: Server error
 */
router.get('/:songId/artists', getSongArtists);

export default router;