const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');

<<<<<<< HEAD
const stripe = require('stripe')
(REACT_APP_STRIPE_KEY);
=======
const stripe = require('stripe')("sk_test_51HXk4aL1NgF4Uea9BYP5nKyVAqxVIHzuScC7y1h1EgedvupGLkeAE8xdasykWZx7aq8sDd9ZKfdCiZsnqO5g0taD00ohAMwniu");
>>>>>>> 659be02ce8ee7a8857ba616209ee16576e6bf9ac

const app = express();

//Middlewears
app.use(cors({ origin: true }));
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
