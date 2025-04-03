import express from "express";
import * as socialController from "#controllers/social_controller";

const router = express.Router();

// Ruta para enviar solicitud de amistad
// api/social/send
router.post('/send', socialController.sendFriendRequest);

export default router;