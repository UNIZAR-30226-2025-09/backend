// library.routes.js
import { Router } from "express";
import { getUserLibrary } from "#controllers/library_controller";
// Si no usas middleware, omite la importación del authMiddleware

const router = Router();

// Define la ruta GET para la biblioteca
router.get("/", getUserLibrary);

export default router;
