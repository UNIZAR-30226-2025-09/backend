import express from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile, updatePremiumStatus, checkEmailExistence, getUserById, updateUser, updateUserFavoriteStyleInProfile, getRecommendedPlaylistsForUser} from "#src/controllers/user_controller";

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
 *     summary: Registra un nuevo usuario en el sistema
 *     tags:
 *       - Users
 *     description: Registra un nuevo usuario en la base de datos. Verifica que el correo y el nickname no estén ya registrados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nickname
 *               - password
 *               - mail
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: El nombre de usuario único para el registro.
 *               password:
 *                 type: string
 *                 description: La contraseña del usuario (será hasheada antes de almacenarse).
 *               mail:
 *                 type: string
 *                 format: email
 *                 description: El correo electrónico único del usuario.
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
 *                   example: "Usuario registrado con éxito"
 *                   description: Mensaje de éxito.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario creado.
 *                     nickname:
 *                       type: string
 *                       description: Nombre del usuario.
 *                     mail:
 *                       type: string
 *                       description: Correo electrónico del usuario.
 *                     style_fav:
 *                       type: string
 *                       description: Estilo favorito del usuario (por defecto "ninguno").
 *                     is_premium:
 *                       type: boolean
 *                       description: Estado premium del usuario (por defecto false).
 *       400:
 *         description: El correo ya está registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Correo ya registrado"
 *       409:
 *         description: El nombre de usuario ya está registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Nombre de usuario ya registrado"
 *       500:
 *         description: Error interno al registrar usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al registrar usuario"
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
 *     summary: Actualiza el perfil del usuario autenticado
 *     description: Permite actualizar nickname, correo y/o contraseña del usuario. Verifica que no existan otros usuarios con el mismo correo o nickname.
 *     security:
 *       - bearerAuth: []
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
 *                   example: "Perfil actualizado correctamente"
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
 *                     user_picture:
 *                       type: string
 *                       description: URL de la imagen de perfil del usuario.
 *       400:
 *         description: Error - Correo ya registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Correo ya registrado"
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
 *       403:
 *         description: Token inválido o expirado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token inválido o expirado"
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       409:
 *         description: Conflicto - Nombre de usuario ya registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Nombre de usuario ya registrado"
 *       422:
 *         description: Error de validación - No hay campos para actualizar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Debes proporcionar al menos un campo para actualizar"
 *       500:
 *         description: Error al actualizar perfil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al actualizar perfil"
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

// No testeada
/**
 * @swagger
 * /api/user/users/{id}:
 *   post:
 *     summary: Actualiza el nickname y/o foto de perfil de un usuario
 *     tags:
 *       - Users
 *     description: Permite actualizar el nickname del usuario y subir una nueva imagen de perfil en formato base64.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: Nuevo nombre de usuario.
 *               profileImage:
 *                 type: string
 *                 format: base64
 *                 description: Imagen de perfil codificada en base64 (debe incluir prefijo data:image/png;base64, o similar).
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
 *                   example: "Perfil actualizado"
 *                 user:
 *                   type: object
 *                   properties:
 *                     nickname:
 *                       type: string
 *                       description: Nombre de usuario actualizado.
 *                     user_picture:
 *                       type: string
 *                       description: Ruta de la imagen de perfil guardada.
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Error al actualizar el perfil.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al actualizar el perfil"
 *                 message:
 *                   type: string
 *                   description: Detalles del error.
 */
router.post("/users/:id", updateUser);

// No testeada
/**
 * @swagger
 * /api/user/updateStyle:
 *   post:
 *     summary: Actualiza automáticamente el estilo musical favorito del usuario
 *     tags:
 *       - Users
 *     description: Analiza los likes de canciones y playlists del usuario para determinar su género musical preferido,
 *                 actualiza su perfil con este estilo y devuelve los estilos favoritos detectados.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Estilo favorito actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Estilo favorito actualizado"
 *                 style_fav:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Lista de géneros musicales preferidos del usuario.
 *                   example: ["rock", "pop"]
 *       401:
 *         description: Token no proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       403:
 *         description: Token inválido o expirado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token inválido o expirado"
 *       500:
 *         description: Error al actualizar el estilo favorito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al actualizar el estilo favorito"
 */
router.post("/updateStyle", updateUserFavoriteStyleInProfile);

// No testeada
/**
 * @swagger
 * /api/user/recommended-playlists:
 *   get:
 *     summary: Obtiene playlists recomendadas basadas en los estilos favoritos del usuario
 *     tags:
 *       - Users
 *     description: Analiza los estilos musicales favoritos del usuario y devuelve un conjunto de playlists recomendadas
 *                  que coinciden con estos estilos, excluyendo las playlists del propio usuario.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Playlists recomendadas obtenidas correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendedPlaylists:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID de la playlist.
 *                       name:
 *                         type: string
 *                         description: Nombre de la playlist.
 *                       front_page:
 *                         type: string
 *                         description: URL de la imagen de portada de la playlist.
 *       400:
 *         description: ID de usuario inválido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "ID de usuario inválido"
 *       401:
 *         description: Token no proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "❌ Token no proporcionado"
 *       403:
 *         description: Token inválido o expirado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "⚠ Token inválido o expirado"
 *       500:
 *         description: Error al obtener las playlists recomendadas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al obtener las playlists recomendadas"
 */
router.get("/recommended-playlists", getRecommendedPlaylistsForUser);

export default router;