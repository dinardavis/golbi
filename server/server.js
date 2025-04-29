// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const YOUR_DOMAIN = "http://localhost:3000";

// Replace with actual Stripe price IDs
const prices = {
  monthly: "price_1RGVsSRoZmIfFZRLz0GueDoa",    // from Stripe dashboard
  quarterly: "price_1RGVv0RoZmIfFZRLcz41xaPF",
};

// 1️⃣ Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  const { plan } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: prices[plan], quantity: 1 }],
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/?scrollTo=pricing`
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2️⃣ Customer Portal
app.post("/create-customer-portal-session", async (req, res) => {
  const { customerId } = req.body;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${YOUR_DOMAIN}/dashboard`,
  });

  res.json({ url: portalSession.url });
});

app.listen(4242, () => console.log("Server running on http://localhost:4242"));
