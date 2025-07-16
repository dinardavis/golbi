import React, { useState, useRef } from "react";
import doodle2 from "../assets/imgs/doodle2.png";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} id="plans" className="pricing-section">
      {children}
    </section>
  );
}

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.07, duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function Plans() {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const toggleAllPlanDetails = () => setShowAllDetails((prev) => !prev);

  const buildPlans = [
    {
      key: "essentials",
      name: "Essentials Site",
      desc: "Clean 1–2 page site with modern design and mobile optimization.",
      price: 1200,
      features: [
        "Mobile-optimized responsive layout",
        "Custom design tailored to your brand",
        "Simple lead/contact form",
        "Fast turnaround (<7 days)"
      ],
      link: "https://buy.stripe.com/test_essentials_link"
    },
    {
      key: "pro",
      name: "Pro Presence Site",
      desc: "5-page conversion-focused site with light branding and forms.",
      price: 2500,
      features: [
        "Up to 5 custom-designed pages",
        "Mobile-first, responsive design",
        "Lead-gen form integrations",
        "Polished layout, CTA structure"
      ],
      link: "https://buy.stripe.com/test_pro_link"
    },
    {
      key: "engine",
      name: "Conversion Engine",
      desc: "8+ page site with SEO foundation and funnel integration.",
      price: 4500,
      features: [
        "8+ custom-designed pages",
        "Light copywriting included",
        "On-page SEO foundation",
        "Email list/lead funnel integrations"
      ],
      link: "https://buy.stripe.com/test_engine_link"
    }
  ];

  const carePlans = [
    {
      key: "care",
      name: "Site Care Plan",
      desc: "Hosting, security, and edit support for live sites.",
      price: 295,
      features: [
        "Managed hosting & SSL",
        "Backups & uptime monitoring",
        "1 hour/month of content edits",
        "Priority support access"
      ],
      link: "https://buy.stripe.com/test_care_link"
    },
    {
      key: "growth",
      name: "Site Growth Plan",
      desc: "Care plan plus extra edits and SEO tweaks.",
      price: 595,
      features: [
        "Everything in Site Care Plan",
        "2 hours/month of edits",
        "SEO touchups & minor improvements",
        "1 small feature add/month"
      ],
      link: "https://buy.stripe.com/test_growth_link"
    }
  ];

  return (
    <Section>
      <img className="doodle-2" src={doodle2} alt="" />
      <div className="pricing-header">
        <h1>
          <span>Build</span> Packages
        </h1>
        <p className="pricing-header-copy">
          Flat-fee websites designed to convert. No retainers, no meetings, no BS.
        </p>
      </div>

      <div className="pricing-content">
        <div className="pricing-grid">
          {[...buildPlans, ...carePlans].map((plan) => (
            <div className="pricing-option" key={plan.key}>
              <div className="pricing-subgrid-top">
                <h1 className="pricing-plan-name">{plan.name}</h1>
                <p className="pricing-desc">{plan.desc}</p>
                <h1 className="pricing-price">
                  ${plan.price}
                  <span>{plan.price < 1000 ? "/mo" : " flat fee"}</span>
                </h1>
                <p className="pricing-toggle-details" onClick={toggleAllPlanDetails}>
                  Plan details <motion.span animate={{ rotate: showAllDetails ? 180 : 0 }}><IoChevronDown /></motion.span>
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
                      {plan.features.map((f, i) => (
                        <motion.li key={i} variants={itemVariants}>- {f}</motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="pricing-button button-pushable"
                onClick={() => window.open(plan.link, "_blank")}
              >
                <span className="button-shadow"></span>
                <span className="button-dark-edge"></span>
                <span className="button-dark-front text">Get started</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
