import Stripe from "stripe";

// NO habria que exponer la clave en el codigo!
const stripe = new Stripe("sk_test_51R0pjqP1jnBE1veqhTdOSX9X6DA33cmWpBm9SatzkmYh6U4BZFIaRye6eER5gKnP3K2OZUpkQhYVhG8jMttDimUk002t20dSWs");

/**
 * Crea un Payment Intent para un pago con tarjeta.
 * POST `/api/stripe/create-payment-intent`
 */
export const createPaymentIntent = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 499, // Precio en centavos (4.99€)
            currency: "eur",
            payment_method_types: ["card"],
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};