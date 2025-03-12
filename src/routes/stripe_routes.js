import express from "express";
import { createPaymentIntent } from "#controllers/stripe_controller";

const router = express.Router();

/**
 * Rutas para stripe
 * - POST `/api/stripe/create-payment-intent`-> Crea un Payment Intent para procesar un pago.
 *  */
router.post("/create-payment-intent", createPaymentIntent);

export default router;