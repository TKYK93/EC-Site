const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');

const stripe = require('stripe')
(REACT_APP_STRIPE_KEY);

const app = express();

//Middlewears
app.use(cors({ origi: true }));
app.use(express.json());

// API routes
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

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

// http://localhost:5001/test-ecsite/us-central1/api