import express from 'express';
import {
    likeSong,
    unlikeSong,
    getLikedSongs,
    checkIfSongIsLiked,
    handleSongLike
} from '#controllers/song_like_controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: SongLikes
 *     description: Operaciones relacionadas con los likes de canciones.
 */

/**
 * @swagger
 * /api/song_like/{id}/likeUnlike:
 *   post:
 *     tags:
 *       - SongLikes
 *     description: Maneja el like/unlike de una canción (toggle). Si la canción ya tiene like, lo elimina; si no lo tiene, lo agrega.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la canción.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: user_id
 *         required: true
 *         description: ID del usuario que da like o lo elimina.
 *         schema:
 *           type: object
 *           properties:
 *             user_id:
 *               type: integer
 *               description: El ID del usuario.
 *     responses:
 *       200:
 *         description: Resultado de la operación de like/unlike.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito o error.
 *                 liked:
 *                   type: boolean
 *                   description: Indica si la canción está likeada.
 *       400:
 *         description: Datos inválidos o canción no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/:id/likeUnlike", handleSongLike);

/**
 * @swagger
 * /api/song_like/{id}/like:
 *   post:
 *     tags:
 *       - SongLikes
 *     description: Añade un like a una canción. Similar a likeUnlike, pero endpoint explícito para el like.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la canción.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: user_id
 *         required: true
 *         description: ID del usuario que da like.
 *         schema:
 *           type: object
 *           properties:
 *             user_id:
 *               type: integer
 *               description: El ID del usuario.
 *     responses:
 *       200:
 *         description: Like agregado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 liked:
 *                   type: boolean
 *                   description: Indica si la canción está likeada.
 *       400:
 *         description: Datos inválidos o canción no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/:id/like", likeSong);

/**
 * @swagger
 * /api/song_like/{id}/like:
 *   delete:
 *     tags:
 *       - SongLikes
 *     description: Elimina un like explícitamente de una canción sin hacer toggle.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la canción.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: user_id
 *         required: true
 *         description: ID del usuario que elimina el like.
 *         schema:
 *           type: object
 *           properties:
 *             user_id:
 *               type: integer
 *               description: El ID del usuario.
 *     responses:
 *       200:
 *         description: Like eliminado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *       400:
 *         description: Datos inválidos o el usuario no ha dado like a esta canción.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete("/:id/like", unlikeSong);

/**
 * @swagger
 * /api/song_like/{user_id}/likedSongs:
 *   get:
 *     tags:
 *       - SongLikes
 *     description: Obtiene todas las canciones que le gustan a un usuario.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de canciones que le gustan al usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la canción.
 *                   name:
 *                     type: string
 *                     description: Nombre de la canción.
 *                   type:
 *                     type: string
 *                     description: Tipo de la canción.
 *                   duration:
 *                     type: integer
 *                     description: Duración de la canción en segundos.
 *                   lyrics:
 *                     type: string
 *                     description: Letra de la canción.
 *                   photo_video:
 *                     type: string
 *                     description: URL de la imagen o video relacionado con la canción.
 *                   url_mp3:
 *                     type: string
 *                     description: URL de la canción en formato MP3.
 *                   genre:
 *                     type: string
 *                     description: Género de la canción.
 *       400:
 *         description: ID de usuario no válido.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/:user_id/likedSongs", getLikedSongs);

/**
 * @swagger
 * /api/song_like/{id}/like:
 *   get:
 *     tags:
 *       - SongLikes
 *     description: Verifica si una canción está likeada por un usuario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la canción.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: userId
 *         required: true
 *         description: ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Respuesta con un valor booleano indicando si la canción está likeada por el usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isLiked:
 *                   type: boolean
 *                   description: Indica si la canción está en favoritos.
 *       400:
 *         description: Parámetros inválidos.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/:id/like", checkIfSongIsLiked);

export default router;
