"use client";

import React, { useRef } from "react";
import doodle2 from "../assets/imgs/doodle2.png";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="pricing" className="pricing-section">
      {children}
    </section>
  );
}

export default function Pricing() {
  const monthlyLink = "https://buy.stripe.com/test_dRmbJ377jfYF7zP7mD2cg06"; // Replace with your live link
  const quarterlyLink = "https://buy.stripe.com/test_7sY6oJ63f3bT8DTeP52cg05"; // Replace with your live link

  return (
    <Section>
      <img className="doodle-2" src={doodle2} alt="" />
      <div className="pricing-content">
        <div className="pricing-grid">

          {/* Monthly Option */}
          <div className="pricing-option pricing-option-1">
            <div className="pricing-subgrid-top">
              <h1 className="pricing-duration">Monthly</h1>
              <p className="pricing-desc">No minimum commitment. <br /> Pause or cancel anytime.</p>
              <h1 className="pricing-price">$1995<span>/month</span></h1>
              <div className="pricing-included-container">
                <p className="pricing-included-header">What's included:</p>
                <ul className="pricing-included-list">
                  <li className="pricing-included-item">- One request at a time</li>
                  <li className="pricing-included-item">- Unlimited stock photos</li>
                  <li className="pricing-included-item">- Easy credit-card payments</li>
                  <li className="pricing-included-item">- Pause or cancel anytime</li>
                </ul>
              </div>
            </div>
            <p className="calendar-booking" onClick={() => window.open("https://calendly.com/golbi/30min", "_blank")}>Book a call to learn more</p>
            <button
              className="pricing-button button-pushable"
              onClick={() => window.open(monthlyLink, "_blank")}
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
              <p className="pricing-desc">Save 20% per month.<br /> Billed per quarter.</p>
              <h1 className="pricing-price">$1595<span>/month</span></h1>
              <div className="pricing-included-container">
                <p className="pricing-included-header">What's included:</p>
                <ul className="pricing-included-list">
                  <li className="pricing-included-item">- One request at a time</li>
                  <li className="pricing-included-item">- Unlimited stock photos</li>
                  <li className="pricing-included-item">- Easy credit-card billing</li>
                  <li className="pricing-included-item">- Pause or cancel anytime</li>
                </ul>
              </div>
            </div>
            <p className="calendar-booking" onClick={() => window.open("https://calendly.com/golbi/30min", "_blank")}>Book a call to learn more</p>
            <button
              className="pricing-button button-pushable"
              onClick={() => window.open(quarterlyLink, "_blank")}
            >
              <span className="button-shadow"></span>
              <span className="button-dark-edge"></span>
              <span className="button-dark-front text">Get started</span>
            </button>
          </div>

          {/* CTA Option */}
          <div className="pricing-option pricing-option-3">
            <p className="pricing-cta-copy pricing-cta-copy-1">Have a one-off project?</p>
            <p className="pricing-cta-copy pricing-cta-copy-2">No problem. Shoot us an email, or schedule a call and we’ll put a quote together.</p>
            <button
              className="button-pushable"
              onClick={() => window.open("https://calendly.com/golbi/30min", "_blank")}
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Schedule now</span>
            </button>
            <p className="pricing-cta-email">Prefer to email? Us too!<br />
            <a  
              href="mailto:hello@golbi.co?subject=Greetings%20Golbi!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-cta-email">
              <span>
              hello@golbi.co
              </span>
            </a>
            </p>
            <div className="pricing-radar-container">
              <span className="pricing-radar-text">Now accepting new clients!</span>
              <span className="radar"></span>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
