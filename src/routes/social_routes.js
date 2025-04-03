import express from "express";
import * as socialController from "#controllers/social_controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Social
 *     description: Operaciones relacionadas con interacciones sociales entre usuarios.
 */

/**
 * @swagger
 * /api/social/send:
 *   post:
 *     tags:
 *       - Social
 *     description: Envía una solicitud de amistad a otro usuario.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user2_id
 *             properties:
 *               user2_id:
 *                 type: integer
 *                 description: ID del usuario que recibirá la solicitud de amistad.
 *     responses:
 *       201:
 *         description: Solicitud de amistad enviada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Solicitud de amistad enviada correctamente"
 *                 friendship:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     user1_id:
 *                       type: integer
 *                     user2_id:
 *                       type: integer
 *                     state_friend_request:
 *                       type: string
 *                       example: "pending"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Error en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ya existe una solicitud de amistad entre estos usuarios"
 *       401:
 *         description: Error de autenticación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado o inválido"
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Uno o ambos usuarios no existen"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al enviar solicitud de amistad"
 *                 details:
 *                   type: string
 */
router.post('/send', socialController.sendFriendRequest);

export default router;