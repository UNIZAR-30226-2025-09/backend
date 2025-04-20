import express from 'express';
import * as chatController from '../controllers/chat_controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Chat
 *     description: Operaciones relacionadas con mensajes entre amigos.
 */

/**
 * @swagger
 * /api/chat/send:
 *   post:
 *     tags:
 *       - Chat
 *     summary: Enviar un mensaje a un amigo
 *     description: Permite enviar un mensaje a un usuario con el que se tiene una relación de amistad aceptada
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user2_id:
 *                 type: integer
 *                 description: ID del destinatario
 *                 example: 2
 *               message:
 *                 type: string
 *                 description: Contenido del mensaje
 *                 example: "Hola, ¿cómo estás?"
 *     responses:
 *       201:
 *         description: Mensaje enviado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Mensaje enviado correctamente"
 *                 data:
 *                   type: object
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: No son amigos
 *       500:
 *         description: Error del servidor
 */
router.post('/send', chatController.sendMessage);

/**
 * @swagger
 * /api/chat/conversation/{friendId}:
 *   get:
 *     tags:
 *       - Chat
 *     summary: Obtener conversación con un amigo
 *     description: Recupera todos los mensajes intercambiados con un amigo específico
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: friendId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del amigo
 *     responses:
 *       200:
 *         description: Conversación recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                 count:
 *                   type: integer
 *       401:
 *         description: No autorizado
 *       403:
 *         description: No son amigos
 *       500:
 *         description: Error del servidor
 */
router.get('/conversation/:friendId', chatController.getConversation);

/**
 * @swagger
 * /api/chat/conversations:
 *   get:
 *     tags:
 *       - Chat
 *     summary: Obtener todas las conversaciones
 *     description: Recupera la lista de todas las conversaciones del usuario con sus últimos mensajes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Conversaciones recuperadas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 conversations:
 *                   type: array
 *                   items:
 *                     type: object
 *                 count:
 *                   type: integer
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error del servidor
 */
router.get('/conversations', chatController.getAllConversations);

export default router;