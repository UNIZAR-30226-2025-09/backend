import express from "express";
import * as lastPlaybackState from "#controllers/lastplaybackstate_controller";

const router = express.Router();

/**
 * @swagger
 * /api/lastPlaybackState/{userId}:
 *   get:
 *     tags:
 *       - LastPlaybackState
 *     summary: Obtener el último estado de reproducción de un usuario
 *     description: Devuelve información detallada sobre el último estado de reproducción guardado para un usuario específico, incluyendo la canción actual, posición de reproducción y playlist relacionada.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario cuyo estado de reproducción se quiere consultar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estado de reproducción obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID único del estado de reproducción
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   description: ID del usuario propietario del estado
 *                   example: 5
 *                 positionMinutes:
 *                   type: integer
 *                   description: Minutos de la posición de reproducción
 *                   example: 2
 *                 positionSeconds:
 *                   type: integer
 *                   description: Segundos de la posición de reproducción
 *                   example: 45
 *                 songId:
 *                   type: integer
 *                   description: ID de la canción que se estaba reproduciendo
 *                   example: 12
 *                 playlistId:
 *                   type: integer
 *                   description: ID de la playlist que se estaba reproduciendo
 *                   example: 3
 *                 song:
 *                   type: object
 *                   description: Información de la canción actual
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 12
 *                     name:
 *                       type: string
 *                       example: "Canción de ejemplo"
 *                     duration:
 *                       type: integer
 *                       example: 180
 *                     url_mp3:
 *                       type: string
 *                       example: "https://ejemplo.com/cancion.mp3"
 *                 playlist:
 *                   type: object
 *                   description: Información de la playlist actual con sus canciones
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 3
 *                     name:
 *                       type: string
 *                       example: "Mi playlist favorita"
 *                     songs:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 12
 *                           name:
 *                             type: string
 *                             example: "Canción en playlist"
 *                           artists:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: integer
 *                                   example: 7
 *                                 name:
 *                                   type: string
 *                                   example: "Nombre del artista"
 *                                 photo:
 *                                   type: string
 *                                   example: "https://ejemplo.com/artista.jpg"
 *       404:
 *         description: Estado de reproducción no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No playback state found for this user."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error retrieving playback state."
 */
router.get("/:userId", lastPlaybackState.getLastPlaybackState);

/**
 * @swagger
 * /api/lastPlaybackState/{userId}:
 *   post:
 *     tags:
 *       - LastPlaybackState
 *     summary: Crear o actualizar el estado de reproducción de un usuario
 *     description: Crea o actualiza el último estado de reproducción para un usuario específico, guardando la información sobre la canción actual, posición de reproducción y playlist relacionada.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario cuyo estado de reproducción se quiere guardar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - positionMinutes
 *               - positionSeconds
 *               - songId
 *               - playlistId
 *             properties:
 *               positionMinutes:
 *                 type: integer
 *                 description: Minutos de la posición de reproducción
 *                 example: 2
 *               positionSeconds:
 *                 type: integer
 *                 description: Segundos de la posición de reproducción
 *                 example: 45
 *               songId:
 *                 type: integer
 *                 description: ID de la canción que se está reproduciendo
 *                 example: 12
 *               playlistId:
 *                 type: integer
 *                 description: ID de la playlist que se está reproduciendo
 *                 example: 3
 *     responses:
 *       200:
 *         description: Estado de reproducción actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID único del estado de reproducción
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   description: ID del usuario propietario del estado
 *                   example: 5
 *                 positionMinutes:
 *                   type: integer
 *                   description: Minutos de la posición de reproducción
 *                   example: 2
 *                 positionSeconds:
 *                   type: integer
 *                   description: Segundos de la posición de reproducción
 *                   example: 45
 *                 songId:
 *                   type: integer
 *                   description: ID de la canción que se está reproduciendo
 *                   example: 12
 *                 playlistId:
 *                   type: integer
 *                   description: ID de la playlist que se está reproduciendo
 *                   example: 3
 *       201:
 *         description: Nuevo estado de reproducción creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID único del estado de reproducción
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   description: ID del usuario propietario del estado
 *                   example: 5
 *                 positionMinutes:
 *                   type: integer
 *                   description: Minutos de la posición de reproducción
 *                   example: 1
 *                 positionSeconds:
 *                   type: integer
 *                   description: Segundos de la posición de reproducción
 *                   example: 30
 *                 songId:
 *                   type: integer
 *                   description: ID de la canción que se está reproduciendo
 *                   example: 12
 *                 playlistId:
 *                   type: integer
 *                   description: ID de la playlist que se está reproduciendo
 *                   example: 3
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error updating playback state."
 */
router.post("/:userId", lastPlaybackState.updateLastPlaybackState);

/**
 * @swagger
 * /api/lastPlaybackState/{userId}:
 *   delete:
 *     tags:
 *       - LastPlaybackState
 *     summary: Eliminar el estado de reproducción de un usuario
 *     description: Elimina completamente el último estado de reproducción guardado para un usuario específico.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario cuyo estado de reproducción se quiere eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estado de reproducción eliminado correctamente (sin contenido)
 *       404:
 *         description: Estado de reproducción no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No playback state found for this user."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error deleting playback state."
 */
router.delete('/:userId', lastPlaybackState.deleteLastPlaybackState);

export default router;