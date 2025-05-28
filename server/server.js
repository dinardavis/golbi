require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Make sure to set your secret key in the .env file
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Set up Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const YOUR_DOMAIN = "http://localhost:3000"; // Change this to your production domain

// Stripe prices (replace these with your actual Stripe price IDs)
const prices = {
  monthly: "price_1RGVsSRoZmIfFZRLz0GueDoa",
  quarterly: "price_1RGVv0RoZmIfFZRLcz41xaPF",
};

// Create checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { plan, email } = req.body;

  try {
    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: prices[plan], quantity: 1 }],
      customer_email: email,
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/?scrollTo=pricing`
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create customer portal session (for managing subscription)
app.post('/create-customer-portal-session', async (req, res) => {
  const { email } = req.body;

  // Get Stripe customer ID from Supabase (make sure this is saved earlier)
  const { data, error } = await supabase
    .from("users")
    .select("stripe_customer_id")
    .eq("email", email)
    .single();

  if (error || !data?.stripe_customer_id) {
    return res.status(404).json({ error: "Stripe customer not found" });
  }

  // Create Stripe portal session
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: data.stripe_customer_id,
    return_url: `${YOUR_DOMAIN}/dashboard`,
  });

  res.json({ url: portalSession.url });
});

// Stripe webhook to listen to events like checkout session completion
app.post("/webhook", bodyParser.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_email;
    const stripeCustomerId = session.customer;

    // Store Stripe customer ID in Supabase for the user
    await supabase
      .from("users")
      .update({ stripe_customer_id: stripeCustomerId })
      .eq("email", email);
  }

  res.json({ received: true });
});

app.listen(4242, () => console.log("Server running on http://localhost:4242"));
