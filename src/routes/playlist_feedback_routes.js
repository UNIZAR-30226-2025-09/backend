import express from "express";
import { getUserRating, ratePlaylist, getPlaylistRating } from '#controllers/playlist_feedback_controller';
const router = express.Router();

router.get('/:id/user-rating', getUserRating);

/**
 * @swagger
 * /api/ratingPlaylist/{id}/rate:
 *   post:
 *     tags:
 *       - Playlists
 *     description: Añade o actualiza la valoración de una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: ID del usuario que valora.
 *               rating:
 *                 type: integer
 *                 description: Valoración (1-5).
 *     responses:
 *       200:
 *         description: Valoración añadida o actualizada.
 */
router.post('/:id/rate', ratePlaylist);

/**
 * @swagger
 * /api/ratingPlaylist/{id}/rating:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene la valoración promedio de una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Valoración promedio obtenida.
 */
router.get('/:id/rating', getPlaylistRating);



export default router;