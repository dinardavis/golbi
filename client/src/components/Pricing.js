"use client";

import React, { useState, useRef } from "react";
import doodle2 from "../assets/imgs/doodle2.png";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} id="pricing" className="pricing-section">
      {children}
    </section>
  );
}

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,  // faster cascade
      duration: 0.2,           // quicker rise-in
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};


export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [showAllDetails, setShowAllDetails] = useState(false);

  const toggleBilling = () => setIsQuarterly((prev) => !prev);
  const toggleAllPlanDetails = () => setShowAllDetails((prev) => !prev);

  const getPrice = (monthlyPrice) => {
    const price = isQuarterly ? Math.round(monthlyPrice * 0.80) : monthlyPrice;
    return `$${price}`;
  };

  const pricingPlans = [
    {
      key: "launch",
      name: "Launch Plan",
      desc: "Professional one-pager with essential support to get you online fast.",
      monthly: 995,
      features: [
        "Custom mobile-optimized landing page",
        "Hosting, SSL & maintenance",
        "1 hour/month of content updates",
        "Basic SEO setup",
        "Monthly performance report",
        "1 contact form + business email setup",
      ],
      linkMonthly: "https://buy.stripe.com/test_dRmbJ377jfYF7zP7mD2cg06",
      linkQuarterly: "https://buy.stripe.com/test_quarterly_link_1",
    },
    {
      key: "growth",
      name: "Growth Plan",
      desc: "Robust website ideal for growing visibility and increased conversions.",
      monthly: 1995,
     features: [
        "Up to 5 custom pages",
        "4 hours/month of content updates",
        "Google Analytics integration",
        <>
          Lead capture setup <br />
          (Mailchimp, ConvertKit, etc.)
        </>,
      ],
      linkMonthly: "https://buy.stripe.com/test_7sY6oJ63f3bT8DTeP52cg05",
      linkQuarterly: "https://buy.stripe.com/test_quarterly_link_2",
    },
    {
      key: "scale",
      name: "Scale Plan",
      desc: "For businesses with expanding audiences and evolving needs.",
      monthly: 2995,
      features: [
        "Up to 15 pages",
        "30-min monthly strategy call",
        "6 hours/month of edits or new feature development",
        "1 promo landing page/month",
        "CRM or scheduler integration",
      ],
      linkMonthly: "https://buy.stripe.com/test_7sY6oJ63f3bT8DTeP52cg05",
      linkQuarterly: "https://buy.stripe.com/test_quarterly_link_3",
    },
  ];

  return (
    <Section>
      <img className="doodle-2" src={doodle2} alt="" />
      <div className="pricing-header">
        <h1>
          <span>Our</span> Pricing
        </h1>
        <div className="pricing-header-copy-container">
          <div className="pricing-timespan-toggle">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleBilling}
                checked={isQuarterly}
              />
              <span className="slider">
                <span>Monthly</span>
                <span>Quarterly (Save 20%)</span>
              </span>
            </label>
          </div>
          <p className="pricing-header-copy">
            No bloated agency retainers. No piecemeal hourly quotes. Just clear, flexible plans designed to grow with your business.
          </p>
        </div>
      </div>

      <div className="pricing-content">
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div className="pricing-option" key={plan.key}>
              <div className="pricing-subgrid-top">
                <h1 className="pricing-plan-name">{plan.name}</h1>
                <p className="pricing-desc">{plan.desc}</p>
                <h1 className="pricing-price">
                  {getPrice(plan.monthly)}
                  <span>/month</span>
                </h1>

                <p
                  className="pricing-toggle-details"
                  onClick={toggleAllPlanDetails}
                >
                  {showAllDetails ? (
                    <>
                      Plan details <IoChevronUp className="pricing-toggle-arrow" />
                    </>
                  ) : (
                    <>
                      Plan details <IoChevronDown className="pricing-toggle-arrow" />
                    </>
                  )}
                </p>
              </div>

   

              <AnimatePresence>
                {showAllDetails && (
                  <motion.div
                    className="pricing-included-container"
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                  >
                    <motion.p className="pricing-included-header" variants={itemVariants}>
                      What's included:
                    </motion.p>
                    <motion.ul className="pricing-included-list">
                      {plan.features.map((feature, i) => (
                        <motion.li key={i} variants={itemVariants}>
                          - {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <p
                className="calendar-booking"
                onClick={() =>
                  window.open("https://calendly.com/golbi/30min", "_blank")
                }
              >
                Book a call to learn more
              </p>

              <button
                className="pricing-button button-pushable"
                onClick={() =>
                  window.open(
                    isQuarterly ? plan.linkQuarterly : plan.linkMonthly,
                    "_blank"
                  )
                }
              >
                <span className="button-shadow"></span>
                <span className="button-dark-edge"></span>
                <span className="button-dark-front text">Get started</span>
              </button>
            </div>
          ))}
        </div>


         <div className="pricing-option pricing-option-3">

            <p className="pricing-cta-copy pricing-cta-copy-1">
              Don't see exactly<br />the services that you need?
            </p>
            <p className="pricing-cta-copy pricing-cta-copy-2">
              No problem. Shoot us an email, or schedule a call and we'll come
              up with a solution that fit your needs.
            </p>
            <button
              className="button-pushable"
              onClick={() =>
                window.open("https://calendly.com/golbi/30min", "_blank")
              }
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Schedule now</span>
            </button>
            <p className="pricing-cta-email">
              Prefer to email? Us too!
              <br />
              <a
                href="mailto:hello@golbi.co?subject=Greetings%20Golbi!%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-cta-email"
              >
                <span>hello@golbi.co</span>
              </a>
            </p>
            <div className="pricing-radar-container">
              <span className="pricing-radar-text">
                Now accepting new clients!
              </span>
              <span className="radar"></span>
            </div>
          </div>
      </div>
    </Section>
  );
}
