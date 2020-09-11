const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ6PuBm4JJJzir3BSzWGlcK9NMf8Qt9n14SZbqbMrn8qIGDRHRKJVfdryvlWqCI5cJmcz7Z325eCB2XvQUXi1xR00K2D5YbVO"
);
const async = require("async");

//API

//-app config
const app = express();

//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved with amount >>>  ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //in subunits of currency
    currency: "inr",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-6fa72/us-central1/api
