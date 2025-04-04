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
 *       400:
 *         description: Error en la solicitud. (ya existe, o es al mismo usuario)
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

/**
 * @swagger
 * /api/social/accept:
 *   post:
 *     tags:
 *       - Social
 *     description: Acepta una solicitud de amistad pendiente.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user1_id
 *             properties:
 *               user1_id:
 *                 type: integer
 *                 description: ID del usuario que envió la solicitud de amistad.
 *     responses:
 *       200:
 *         description: Solicitud de amistad aceptada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Solicitud de amistad aceptada correctamente"
 *                 friendship:
 *                   type: object
 *                   properties:
 *                     user1_id:
 *                       type: integer
 *                     user2_id:
 *                       type: integer
 *                     state_friend_request:
 *                       type: string
 *                       example: "accepted"
 *       401:
 *         description: Error de autenticación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       404:
 *         description: Solicitud de amistad no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Solicitud de amistad no encontrada o no tienes permisos para aceptarla"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al aceptar solicitud de amistad"
 *                 details:
 *                   type: string
 */
router.post('/accept', socialController.acceptFriendRequest);

/**
 * @swagger
 * /api/social/reject:
 *   post:
 *     tags:
 *       - Social
 *     description: Rechaza o elimina una solicitud de amistad.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - other_user_id
 *             properties:
 *               other_user_id:
 *                 type: integer
 *                 description: ID del otro usuario involucrado en la solicitud de amistad.
 *     responses:
 *       200:
 *         description: Solicitud de amistad eliminada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Solicitud de amistad eliminada correctamente"
 *       401:
 *         description: Error de autenticación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       404:
 *         description: Solicitud de amistad no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Solicitud de amistad no encontrada"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al rechazar solicitud de amistad"
 *                 details:
 *                   type: string
 */
router.post('/reject', socialController.rejectFriendRequest);

export default router;