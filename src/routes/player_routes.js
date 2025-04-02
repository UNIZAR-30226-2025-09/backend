import express from "express";
import * as playerController from "#controllers/player_controller"; // Importa el controlador del reproductor

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Player
 *     description: Operaciones relacionadas con la reproducción de canciones.
 */

/**
 * @swagger
 * /api/player/details/{songId}:
 *   get:
 *     tags:
 *       - Player
 *     description: Obtiene los detalles de una canción específica, incluyendo su lista de artistas.
 *     parameters:
 *       - name: songId
 *         in: path
 *         required: true
 *         description: El ID de la canción para obtener detalles.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la canción, incluyendo los artistas asociados.
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
 *                   description: URL de la foto o video asociado a la canción.
 *                 url_mp3:
 *                   type: string
 *                   description: URL para acceder al archivo MP3 de la canción.
 *                 artists:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID del artista.
 *                       name:
 *                         type: string
 *                         description: Nombre del artista.
 *       404:
 *         description: La canción no fue encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/details/:songId", playerController.getSongDetails);

/**
 * @swagger
 * /api/player/play/{songId}:
 *   post:
 *     tags:
 *       - Player
 *     description: Reproduce una canción por su ID y la agrega a la cola de reproducción.
 *     parameters:
 *       - name: songId
 *         in: path
 *         required: true
 *         description: El ID de la canción a reproducir.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mensaje indicando que la canción se está reproduciendo, junto con la URL del archivo MP3.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje que indica el estado de la canción.
 *                 url:
 *                   type: string
 *                   description: URL del archivo MP3 de la canción.
 *                 isPlaying:
 *                   type: boolean
 *                   description: Estado de la reproducción.
 *       404:
 *         description: La canción no fue encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/play/:songId", playerController.playSong);

/**
 * @swagger
 * /api/player/pause:
 *   post:
 *     tags:
 *       - Player
 *     description: Pausa la reproducción de la canción actual.
 *     responses:
 *       200:
 *         description: Mensaje indicando que la reproducción ha sido pausada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje que indica que la canción ha sido pausada.
 *                 isPlaying:
 *                   type: boolean
 *                   description: Estado de la reproducción.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/pause/:songId", playerController.pauseSong);

/**
 * @swagger
 * /api/player/next:
 *   post:
 *     tags:
 *       - Player
 *     description: Reproduce la siguiente canción en la cola de reproducción.
 *     responses:
 *       200:
 *         description: Reproducción de la siguiente canción en la cola.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   description: URL de la siguiente canción en la cola.
 *                 isPlaying:
 *                   type: boolean
 *                   description: Indica si la canción se está reproduciendo.
 *       400:
 *         description: La cola de reproducción está vacía.
 *       404:
 *         description: Canción no encontrada.
 *       500:
 *         description: Error al reproducir la siguiente canción.
 */
router.post("/next", playerController.playNextSong);

/**
 * @swagger
 * /api/player/previous:
 *   post:
 *     tags:
 *       - Player
 *     description: Reproduce la canción anterior en la cola de reproducción.
 *     responses:
 *       200:
 *         description: Reproducción de la canción anterior en la cola.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   description: URL de la canción anterior en la cola.
 *                 isPlaying:
 *                   type: boolean
 *                   description: Indica si la canción se está reproduciendo.
 *       400:
 *         description: La cola de reproducción está vacía.
 *       404:
 *         description: Canción no encontrada.
 *       500:
 *         description: Error al reproducir la canción anterior.
 */
router.post("/previous", playerController.playPreviousSong);

/**
 * @swagger
 * /api/player/lyrics/{songId}:
 *   get:
 *     tags:
 *       - Player
 *     description: Obtiene la letra de la canción por su ID.
 *     parameters:
 *       - name: songId
 *         in: path
 *         required: true
 *         description: ID de la canción para la cual se desea obtener la letra.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Letra de la canción.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 lyrics:
 *                   type: string
 *                   description: La letra de la canción.
 *       404:
 *         description: Canción o letra no encontrada.
 *       500:
 *         description: Error al obtener la letra.
 */
router.get("/lyrics/:songId", playerController.getLyrics);

export default router;