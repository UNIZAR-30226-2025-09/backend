import express from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile, updatePremiumStatus, checkEmailExistence, getUserById, updateUser} from "#src/controllers/user_controller";

const router = express.Router();

/**
 * Rutas para la gestión de usuarios:
 *
 * - `POST /api/user/register` -> Registra un nuevo usuario en la base de datos.
 * - `POST /api/user/login` -> Inicia sesión con email y contraseña, devolviendo un token de autenticación si es válido.
 * - `POST /api/user/logout` -> Cierra la sesión del usuario (puede invalidar el token de sesión si se usa JWT).
 * - `GET /api/user/profile` -> Obtiene los datos del perfil del usuario autenticado.
 * - `POST /api/user/update` -> Permite actualizar información del usuario (nickname, email, contraseña, etc.).
 * - `POST /api/user/premium` -> Cambia el estado del usuario a "premium" si ha realizado un pago exitoso.
 * - `POST /api/user/check-email` -> Verifica si el correo ya está registrado.
 * - `GET /api/user/:userId` -> Verifica si el usuario existe en la base de datos.
 */
router.post("/register", registerUser); // Ruta para registrar un usuario
router.post("/login", loginUser); // Ruta para iniciar sesión de usuario
router.post("/logout", logoutUser); // Ruta para iniciar sesión de usuario
router.get("/profile", getUserProfile); // Ruta para obtener el perfil de usuario
router.post("/update", updateUserProfile); // Ruta para actualizar el perfil de usuario
router.post("/premium", updatePremiumStatus); // Ruta para actualizar el estado premium del usuario
router.post("/check-email", checkEmailExistence); // Ruta para verificar si el correo ya está registrado
router.get('/:userId', getUserById);  // Ruta para verificar si el usuario existe
router.put("/users/:id", updateUser);


export default router;