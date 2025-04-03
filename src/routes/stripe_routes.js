import express from "express";
import { createPaymentIntent } from "#controllers/stripe_controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Stripe
 *     description: Operaciones relacionadas con los pagos y Stripe.
 */

/**
 * @swagger
 * /api/stripe/create-payment-intent:
 *   post:
 *     tags:
 *       - Stripe
 *     description: Crea un Payment Intent para procesar un pago con tarjeta a través de Stripe.
 *     responses:
 *       200:
 *         description: Retorna un objeto con el `clientSecret` necesario para completar el pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientSecret:
 *                   type: string
 *                   description: El `clientSecret` que se usa para completar el pago en el frontend.
 *       400:
 *         description: Si ocurre un error al crear el Payment Intent, se devuelve un mensaje de error.
 */
router.post("/create-payment-intent", createPaymentIntent);

export default router;