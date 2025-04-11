import request from 'supertest';
import { BASE_URL } from './data.js';

describe("Pruebas sobre /api/stripe/create-payment-intent", () => {

    // Caso de prueba específico para verificar la creación exitosa de un PaymentIntent
    it("debería crear un PaymentIntent y devolver el clientSecret", async () => {
        // Realiza la petición POST al endpoint de Stripe
        const res = await request(BASE_URL)
            .post("/api/stripe/create-payment-intent");

        // Verifica que la respuesta tenga código 200 (éxito)
        expect(res.status).toBe(200);

        // Verifica que la respuesta incluya la propiedad clientSecret
        expect(res.body.clientSecret).toBeDefined();

        // Verifica que el clientSecret sea una cadena de texto
        expect(typeof res.body.clientSecret).toBe("string");
    });
});