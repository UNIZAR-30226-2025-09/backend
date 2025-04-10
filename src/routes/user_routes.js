import express from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile, updatePremiumStatus, checkEmailExistence, getUserById, updateUser, updateUserFavoriteStyleInProfile, getRecommendedPlaylistsForUser, forgotPassword, resetPassword} from "#src/controllers/user_controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con la gestión de usuarios.
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     tags:
 *       - Users
 *     description: Registra un nuevo usuario en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: El nombre del usuario.
 *               password:
 *                 type: string
 *                 description: La contraseña del usuario.
 *               mail:
 *                 type: string
 *                 description: El correo electrónico del usuario.
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario.
 *                     nickname:
 *                       type: string
 *                       description: Nombre del usuario.
 *                     mail:
 *                       type: string
 *                       description: Correo electrónico del usuario.
 *                     style_fav:
 *                       type: string
 *                       description: Estilo favorito del usuario.
 *                     is_premium:
 *                       type: boolean
 *                       description: Estado premium del usuario.
 *       400:
 *         description: El correo ya está registrado.
 *       500:
 *         description: Error al registrar usuario.
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Inicia sesión con email y contraseña, devolviendo un token de autenticación si es válido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *                 description: El correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 description: La contraseña del usuario.
 *     responses:
 *       200:
 *         description: Login exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 token:
 *                   type: string
 *                   description: Token de autenticación.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario.
 *                     nickname:
 *                       type: string
 *                       description: Nombre del usuario.
 *                     mail:
 *                       type: string
 *                       description: Correo electrónico del usuario.
 *                     style_fav:
 *                       type: string
 *                       description: Estilo favorito del usuario.
 *                     is_premium:
 *                       type: boolean
 *                       description: Estado premium del usuario.
 *       401:
 *         description: Contraseña incorrecta.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error en el login.
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/user/logout:
 *   post:
 *     tags:
 *       - Users
 *     description: Cierra la sesión del usuario.
 *     responses:
 *       200:
 *         description: Sesión cerrada correctamente.
 *       500:
 *         description: Error al cerrar sesión.
 */
router.post("/logout", logoutUser);

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     tags:
 *       - Users
 *     description: Obtiene los datos del perfil del usuario autenticado.
 *     responses:
 *       200:
 *         description: Datos del perfil del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del usuario.
 *                 nickname:
 *                   type: string
 *                   description: Nombre del usuario.
 *                 mail:
 *                   type: string
 *                   description: Correo electrónico del usuario.
 *                 style_fav:
 *                   type: string
 *                   description: Estilo favorito del usuario.
 *                 is_premium:
 *                   type: boolean
 *                   description: Estado premium del usuario.
 *       401:
 *         description: Token no proporcionado o inválido.
 *       500:
 *         description: Error al obtener el perfil.
 */
router.get("/profile", getUserProfile);

/**
 * @swagger
 * /api/user/update:
 *   post:
 *     tags:
 *       - Users
 *     description: Permite actualizar la información del usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: El nuevo nombre del usuario.
 *               mail:
 *                 type: string
 *                 description: El nuevo correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 description: La nueva contraseña del usuario.
 *     responses:
 *       200:
 *         description: Perfil actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 user:
 *                   type: object
 *                   properties:
 *                     nickname:
 *                       type: string
 *                       description: Nombre del usuario.
 *                     mail:
 *                       type: string
 *                       description: Correo electrónico del usuario.
 *                     style_fav:
 *                       type: string
 *                       description: Estilo favorito del usuario.
 *                     is_premium:
 *                       type: boolean
 *                       description: Estado premium del usuario.
 *       400:
 *         description: Debes proporcionar al menos un campo para actualizar.
 *       401:
 *         description: Token no proporcionado o inválido.
 *       500:
 *         description: Error al actualizar perfil.
 */
router.post("/update", updateUserProfile);

/**
 * @swagger
 * /api/user/premium:
 *   post:
 *     tags:
 *       - Users
 *     description: Cambia el estado del usuario a "premium" si ha realizado un pago exitoso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               is_premium:
 *                 type: boolean
 *                 description: Estado premium del usuario.
 *     responses:
 *       200:
 *         description: Estado actualizado a premium.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario.
 *                     nickname:
 *                       type: string
 *                       description: Nombre del usuario.
 *                     mail:
 *                       type: string
 *                       description: Correo electrónico del usuario.
 *                     is_premium:
 *                       type: boolean
 *                       description: Estado premium del usuario.
 *       400:
 *         description: El valor de 'is_premium' debe ser booleano (true/false).
 *       401:
 *         description: Token no proporcionado o inválido.
 *       500:
 *         description: Error interno al actualizar el estado de premium.
 */
router.post("/premium", updatePremiumStatus);

/**
 * @swagger
 * /api/user/check-email:
 *   post:
 *     tags:
 *       - Users
 *     description: Verifica si el correo ya está registrado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *                 description: El correo electrónico a verificar.
 *     responses:
 *       200:
 *         description: El correo está registrado o no.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   description: Indica si el correo ya está registrado.
 *       500:
 *         description: Error al verificar el correo.
 */
router.post("/check-email", checkEmailExistence);

router.get("/recommended-playlists", getRecommendedPlaylistsForUser);

/**
 * @swagger
 * /api/user/{userId}:
 *   get:
 *     tags:
 *       - Users
 *     description: Verifica si el usuario existe en la base de datos.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario a verificar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del usuario.
 *                 nickname:
 *                   type: string
 *                   description: Nombre del usuario.
 *                 mail:
 *                   type: string
 *                   description: Correo electrónico del usuario.
 *                 style_fav:
 *                   type: string
 *                   description: Estilo favorito del usuario.
 *                 is_premium:
 *                   type: boolean
 *                   description: Estado premium del usuario.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al verificar el usuario.
 */
router.get('/:userId', getUserById);

router.post("/users/:id", updateUser);  // Sin testear

router.post("/updateStyle", updateUserFavoriteStyleInProfile) //funciona bien falta la docu


// Añade estas nuevas rutas donde estén el resto de las rutas:
/**
 * @swagger
 * /api/user/forgot-password:
 *   post:
 *     tags:
 *       - Users
 *     description: Envía un correo con instrucciones para restablecer la contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *                 description: Correo electrónico de la cuenta.
 *     responses:
 *       200:
 *         description: Correo enviado con éxito.
 *       404:
 *         description: No existe una cuenta con ese correo.
 *       500:
 *         description: Error al procesar la solicitud.
 */
router.post("/forgot-password", forgotPassword);

/**
 * @swagger
 * /api/user/reset-password:
 *   post:
 *     tags:
 *       - Users
 *     description: Restablece la contraseña con el token recibido por correo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token recibido por correo.
 *               newPassword:
 *                 type: string
 *                 description: Nueva contraseña.
 *     responses:
 *       200:
 *         description: Contraseña restablecida con éxito.
 *       401:
 *         description: Token inválido o expirado.
 *       500:
 *         description: Error al restablecer la contraseña.
 */
router.post("/reset-password", resetPassword);


export default router;