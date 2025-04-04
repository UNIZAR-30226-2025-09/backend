import request from 'supertest';
import { BASE_URL } from './data.js';

describe("POST /api/stripe/create-payment-intent", () => {

    it("debería crear un PaymentIntent y devolver el clientSecret", async () => {
        const res = await request(BASE_URL)
            .post("/api/stripe/create-payment-intent");

        expect(res.status).toBe(200);
        expect(res.body.clientSecret).toBeDefined();
        expect(typeof res.body.clientSecret).toBe("string");
    });

});