const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');
const { response } = require('express');

const stripe = require('stripe')("sk_test_51HXk4aL1NgF4Uea9BYP5nKyVAqxVIHzuScC7y1h1EgedvupGLkeAE8xdasykWZx7aq8sDd9ZKfdCiZsnqO5g0taD00ohAMwniu");

// API

//App Config
const app = express();

//Middlewears
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received ,and total is ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of currency
        currency: "usd",
        });

    //201 = ok, created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        });

});

//Listen command
exports.api = functions.https.onRequest(app);
