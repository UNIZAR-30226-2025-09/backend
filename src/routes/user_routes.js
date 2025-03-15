import express from "express";
import { registerUser, loginUser, logoutUser} from "#src/controllers/user_controller";

const router = express.Router();

/**
 * Rutas para la gestión de usuarios:
 *
 * - `POST /api/user/register` -> Registra un nuevo usuario
 * - `POST /api/user/login` -> Inicia sesión con email y contraseña
 * - `POST /api/user/logout` -> Cierra la sesión del usuario
 */
router.post("/register", registerUser); // Ruta para registrar un usuario
router.post("/login", loginUser); // Ruta para iniciar sesión de usuario
router.post("/logout", logoutUser); // Ruta para iniciar sesión de usuario
export default router;