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
 *     summary: Enviar solicitud de amistad
 *     description: Envía una solicitud de amistad a otro usuario. El remitente (user1) se identifica a través del token JWT, mientras que el destinatario (user2) se especifica en el cuerpo de la solicitud. El sistema verifica que ambos usuarios existan y que no haya una solicitud previa entre ellos antes de crear una nueva solicitud con estado 'pending'.
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
 *                 description: ID del usuario que recibirá la solicitud de amistad (receptor).
 *                 example: 2
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
 *                       example: 5
 *                     user1_id:
 *                       type: integer
 *                       description: ID del usuario que envía la solicitud
 *                       example: 1
 *                     user2_id:
 *                       type: integer
 *                       description: ID del usuario que recibe la solicitud
 *                       example: 2
 *                     state_friend_request:
 *                       type: string
 *                       enum: [pending, accepted, rejected]
 *                       description: Estado de la solicitud de amistad
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

/**
 * @swagger
 * /api/social/accept:
 *   post:
 *     tags:
 *       - Social
 *     summary: Aceptar solicitud de amistad pendiente
 *     description: Acepta una solicitud de amistad pendiente. Solo el receptor (user2) puede aceptar una solicitud. Verifica que la solicitud exista y esté en estado pendiente, y la actualiza a estado "accepted".
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
 *                 description: ID del usuario que envió la solicitud de amistad (remitente).
 *                 example: 3
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
 *                       example: 3
 *                     user2_id:
 *                       type: integer
 *                       example: 5
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
 *         description: Solicitud de amistad no encontrada o sin permisos.
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
 *     summary: Rechazar (la recibe) o eliminar (la envia) solicitud de amistad
 *     description: Rechaza o elimina una solicitud de amistad pendiente. Cualquiera de los dos usuarios involucrados (remitente o receptor) puede eliminar la solicitud. No permite eliminar relaciones de amistad ya establecidas (estado 'accepted').
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - friendId
 *             properties:
 *               friendId:
 *                 type: integer
 *                 description: ID del otro usuario involucrado en la solicitud de amistad.
 *                 example: 3
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
 *       400:
 *         description: Error al intentar eliminar una relación de amistad ya establecida.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No se puede eliminar una relación de amistad ya establecida"
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

/**
 * @swagger
 * /api/social/searchNewFriends:
 *   post:
 *     tags:
 *       - Social
 *     summary: Buscar usuarios que no son amigos
 *     description: Busca usuarios cuyo nickname coincida parcialmente con el texto de búsqueda y que no sean amigos actuales del usuario autenticado (state_friend_request != 'accepted'). No se incluye al propio usuario en los resultados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         required: true
 *         schema:
 *           type: string
 *         description: Texto para buscar coincidencias en los nicknames de usuarios
 *         example: "juan"
 *     responses:
 *       200:
 *         description: Lista de usuarios encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 5
 *                       nickname:
 *                         type: string
 *                         example: "juanito123"
 *                       user_picture:
 *                         type: string
 *                         example: "https://example.com/pictures/user5.jpg"
 *                 count:
 *                   type: integer
 *                   description: Número total de usuarios encontrados
 *                   example: 3
 *       400:
 *         description: Falta el término de búsqueda
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Debes proporcionar un término de búsqueda"
 *       401:
 *         description: Error de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al buscar usuarios"
 *                 details:
 *                   type: string
 */
router.post('/searchNewFriends', socialController.searchNewFriends);

/**
 * @swagger
 * /api/social/getSentFriendRequests:
 *   post:
 *     tags:
 *       - Social
 *     summary: Obtener solicitudes de amistad enviadas por el usuario
 *     description: Devuelve todas las solicitudes de amistad donde el usuario autenticado es el remitente y el estado es 'pending'.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de solicitudes enviadas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sentRequests:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       friendId:
 *                         type: integer
 *                         description: ID del usuario al que se envió la solicitud
 *                         example: 2
 *                       nickname:
 *                         type: string
 *                         description: Nombre de usuario del destinatario
 *                         example: "usuario123"
 *                       user_picture:
 *                         type: string
 *                         description: URL de la imagen de perfil del destinatario
 *                         example: "https://example.com/user_picture.jpg"
 *                       state:
 *                         type: string
 *                         description: Estado de la solicitud de amistad
 *                         example: "pending"
 *                 count:
 *                   type: integer
 *                   description: Número total de solicitudes enviadas
 *                   example: 3
 *       401:
 *         description: Error de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al obtener solicitudes enviadas"
 *                 details:
 *                   type: string
 */
router.post('/getSentFriendRequests', socialController.getSentFriendRequests);

/**
 * @swagger
 * /api/social/getReceivedFriendRequests:
 *   post:
 *     tags:
 *       - Social
 *     summary: Obtener solicitudes de amistad recibidas por el usuario
 *     description: Devuelve todas las solicitudes de amistad donde el usuario autenticado es el receptor y el estado es 'pending'.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de solicitudes recibidas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 receivedRequests:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       friendId:
 *                         type: integer
 *                         description: ID del usuario que envió la solicitud
 *                         example: 3
 *                       nickname:
 *                         type: string
 *                         description: Nombre de usuario del remitente
 *                         example: "usuario456"
 *                       user_picture:
 *                         type: string
 *                         description: URL de la imagen de perfil del remitente
 *                         example: "https://example.com/user_picture.jpg"
 *                       state:
 *                         type: string
 *                         description: Estado de la solicitud de amistad
 *                         example: "pending"
 *                 count:
 *                   type: integer
 *                   description: Número total de solicitudes recibidas
 *                   example: 2
 *       401:
 *         description: Error de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al obtener solicitudes recibidas"
 *                 details:
 *                   type: string
 */
router.post('/getReceivedFriendRequests', socialController.getReceivedFriendRequests);

/**
 * @swagger
 * /api/social/getFriendsList:
 *   post:
 *     tags:
 *       - Social
 *     summary: Obtener lista de amigos del usuario
 *     description: Devuelve todas las relaciones de amistad aceptadas donde el usuario autenticado es parte de la relación (ya sea como remitente o receptor).
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de amigos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 friends:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       friendshipId:
 *                         type: string
 *                         description: Identificador único de la relación de amistad
 *                         example: "1_2"
 *                       friendId:
 *                         type: integer
 *                         description: ID del usuario amigo
 *                         example: 2
 *                       nickname:
 *                         type: string
 *                         description: Nombre de usuario del amigo
 *                         example: "amigo123"
 *                       user_picture:
 *                         type: string
 *                         description: URL de la imagen de perfil del amigo
 *                         example: "https://example.com/user_picture.jpg"
 *                 count:
 *                   type: integer
 *                   description: Número total de amigos
 *                   example: 3
 *       401:
 *         description: Error de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al obtener lista de amigos"
 *                 details:
 *                   type: string
 */
router.post('/getFriendsList', socialController.getFriendsList);

export default router;