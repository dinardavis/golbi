"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import doodle2 from "../assets/imgs/doodle2.png";
import { loadStripe } from "@stripe/stripe-js";

// Replace this with your Stripe public key
const stripePromise = loadStripe("pk_test_51PhJiHRoZmIfFZRLXl0uge05gNENstEktsjX4d7UGMmd9q5RwoGMzJvqK4Fz2eDI7rL2SjJhChD04zPjjxjLhVls00TASyUwZn");

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="pricing"
      className="pricing-section"
      // style={{
      //   transform: isInView ? "none" : "translateY(340px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
      // }}
    >
      {children}
    </section>
  );
}

export default function Pricing() {
  // Function to handle Stripe Checkout redirect
  const handleCheckout = async (plan) => {
    try {
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Request failed: ${res.status} - ${errorText}`);
      }      

      const { url } = await res.json();
      const stripe = await stripePromise;
      window.location.href = url;
    } catch (err) {
      console.error("Stripe Checkout error:", err);
    }
  };

  return (
    <Section>
      <img className="doodle-2" src={doodle2} alt="" />
      <div className="pricing-content section-content">
        <div className="pricing-grid">
          {/* Monthly Option */}
          <div className="pricing-option pricing-option-1">
            <div className="pricing-subgrid-top">
              <h1 className="pricing-duration">Monthly</h1>
              <p className="pricing-desc">
                No minimum commitment.
                <br />
                Pause or cancel anytime.
              </p>
              <h1 className="pricing-price">
                $995<span>/month</span>
              </h1>
              <div className="pricing-included-container">
                <p className="pricing-included-header">What&apos;s included:</p>
                <ul className="pricing-included-list">
                  <li className="pricing-included-item">
                    - One request at a time
                  </li>
                  <li className="pricing-included-item">
                    - Unlimited stock photos
                  </li>
                  <li className="pricing-included-item">
                    - Easy credit-card payments
                  </li>
                  <li className="pricing-included-item">
                    - Pause or cancel anytime
                  </li>
                </ul>
              </div>
            
            </div>
            <p className="calendar-booking">Book a call to learn more</p>
            <button
              className="pricing-button button-pushable"
              onClick={() => handleCheckout("monthly")}
            >
              <span className="button-shadow"></span>
              <span className="button-dark-edge"></span>
              <span className="button-dark-front text">Get started</span>
            </button>
          </div>

          {/* Quarterly Option */}
          <div className="pricing-option pricing-option-2">
            <div className="pricing-subgrid-top">
              <h1 className="pricing-duration">Quarterly</h1>
              <p className="pricing-desc">
                Save 10% per month.
                <br /> Billed per quarter.
              </p>
              <h1 className="pricing-price">
                $2,685<span>/month</span>
              </h1>
              <div className="pricing-included-container">
                <p className="pricing-included-header">What&apos;s included:</p>
                <ul className="pricing-included-list">
                  <li className="pricing-included-item">
                    - One request at a time
                  </li>
                  <li className="pricing-included-item">
                    - Unlimited stock photos
                  </li>
                  <li className="pricing-included-item">
                    - Easy credit-card payments
                  </li>
                </ul>
              </div>
            </div>

            <p className="calendar-booking">Book a call to learn more</p>

            <button
              className="pricing-button button-pushable"
              onClick={() => handleCheckout("quarterly")}
            >
              <span className="button-shadow"></span>
              <span className="button-dark-edge"></span>
              <span className="button-dark-front text">Get started</span>
            </button>
          </div>

          {/* CTA Option */}
          <div className="pricing-option pricing-option-3 flex flex-col justify-center items-center text-center">
            <p className="pricing-cta-copy pricing-cta-copy-1">
             Wary of <span>any</span> commitment? 
            </p>
            <p className="pricing-cta-copy pricing-cta-copy-2">
              No problem! Schedule a call, or email your ideas today to receive a project based quote.
            </p>

            <button
              className="button-pushable"
              onClick={() => window.open("https://calendly.com/golbi/30min", "_blank")}
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Schedule now</span>
            </button>

            <p className="pricing-cta-email">
              Prefer to email?<br></br> <span>letschat@golbi.co</span>
            </p>

            <div className="pricing-radar-container">
              <span className="pricing-radar-text">
                Now accepting new clients!
              </span>
              <span className="radar"></span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
