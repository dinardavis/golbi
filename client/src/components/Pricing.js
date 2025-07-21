"use client";

import React, { useState, useRef } from "react";
import doodle2 from "../assets/imgs/doodle2.png";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


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
      staggerChildren: 0.07,
      duration: 0.2,
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
    const price = isQuarterly ? Math.round(monthlyPrice * 0.8) : monthlyPrice;
    return `$${price}`;
  };

  const pricingPlans = [
    {
      key: "launch",
      name: "Launch Site",
      desc: "Get a professional web presence to boost your credibility.",
      monthly: 1995,
      features: [
        "Up to 3 custom pages",
        "Mobile-optimized design",
        "1 lead-gen form (contact, quote, etc.)",
        "Basic SEO and site speed setup",
        "Business email setup",
      ],
      linkMonthly: "https://buy.stripe.com/bJebJ3ezL8wd4nD22j2cg00",
      linkQuarterly: "https://buy.stripe.com/dRm3cx1MZh2Jf2hcGX2cg03",
    },
    {
      key: "growth",
      name: "Growth Site",
      desc: "Robust website ideal for growing visibility and increased conversions.",
      monthly: 3995,
      features: [
        "Up to 6 custom pages",
        "Copy editing and CTA refinement",
        "SEO foundation (metadata, image compression)",
        "Brand polish (fonts, color tweaks)",
        "Lead capture setup",
      ],
      linkMonthly: "https://buy.stripe.com/7sY6oJ63f3bT8DTeP52cg05",
      linkQuarterly: "https://buy.stripe.com/28E3cx8bn3bT5rH36n2cg02",
    },
    {
      key: "scale",
      name: "Scale Site",
      desc: "For businesses with expanding audiences, and nuanced messaging.",
      monthly: 5995,
      features: [
        "Up to 10 custom pages",
        "Copywriting assistance (headline + messaging support)",
        "Integrated scheduler, CRM, or forms (Calendly, HubSpot, etc.)",
        "1 landing page or funnel sequence",
        "Analytics setup",
      ],
      linkMonthly: "https://buy.stripe.com/00w5kFdvH3bT9HXfT92cg04",
      linkQuarterly: "https://buy.stripe.com/9B614pfDPfYF3jzgXd2cg01",
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
          <p className="pricing-header-copy">
            <span>Need a new website? </span>You buy it once, and you own it. No contracts. No retainers. Just results.
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
                <h1 className="pricing-price">{getPrice(plan.monthly)}</h1>
                <p className="pricing-toggle-details" onClick={toggleAllPlanDetails} style={{ cursor: "pointer" }}>
                  Plan details{" "}
                  <motion.span
                    className="pricing-toggle-arrow"
                    animate={{ rotate: showAllDetails ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ display: "inline-block", transformOrigin: "50% 47%" }}
                  >
                    <IoChevronDown />
                  </motion.span>
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


        ""<div className="plan-feature-header">
  <div className="plan-feature-col"></div>
  <div className="plan-feature-col">
    <h3 className="plan-name">Starter Site</h3>
    <p>$1995</p>
    <p className="plan-description">Get a professional web presence to boost your credibility.</p>
  </div>
  <div className="plan-feature-col">
    <h3 className="plan-name">Growth Site</h3>
    <p>$3995</p>
    <p className="plan-description">Robust website ideal for growing visibility and increased conversions.</p>
  </div>
  <div className="plan-feature-col">
    <h3 className="plan-name">Scale Site</h3>
    <p>$5995</p>
    <p className="plan-description">For businesses with expanding audiences, and nuanced messaging.</p>
  </div>
</div>

<div className="plan-feature-row">
  <div className="plan-feature-col">
    <h3 className="header-name">Custom Pages</h3>
  </div>
  <div className="plan-feature-col">Up to 3</div>
  <div className="plan-feature-col">Up to 6</div>
  <div className="plan-feature-col">Up to 10</div>
</div>

<div className="plan-feature-row">
  <div className="plan-feature-col">
    <h3 className="header-name">Mobile Optimization</h3>
  </div>
  <div className="plan-feature-col"><FaCheck className="plan-feature-check" /></div>
  <div className="plan-feature-col"><FaCheck className="plan-feature-check" /></div>
  <div className="plan-feature-col"><FaCheck className="plan-feature-check" /></div>
</div>

<div className="plan-feature-row">
  <div className="plan-feature-col">
    <h3 className="header-name">Lead-Gen Form</h3>
  </div>
  <div className="plan-feature-col">1 form</div>
  <div className="plan-feature-col">Lead capture setup</div>
  <div className="plan-feature-col">Integrated scheduler, CRM, or forms</div>
</div>

<div className="plan-feature-row">
  <div className="plan-feature-col">
    <h3 className="header-name">SEO Setup</h3>
  </div>
  <div className="plan-feature-col">Basic SEO & speed</div>
  <div className="plan-feature-col">SEO foundation</div>
  <div className="plan-feature-col">Analytics & SEO</div>
</div>

<div className="plan-feature-row">
  <div className="plan-feature-col">
    <h3 className="header-name">Branding / Copy</h3>
  </div>
  <div className="plan-feature-col">Business email setup</div>
  <div className="plan-feature-col">Copy editing, CTA, brand polish</div>
  <div className="plan-feature-col">Copywriting, landing page, funnel</div>
</div>

<div className="plan-feature-row">
  <div className="plan-feature-col"></div>
  <div className="plan-feature-col">
    <button className="support-button-pushable">
      <span className="support-button-shadow"></span>
      <span className="support-button-accent-edge"></span>
      <span className="support-button-accent-front text">Book a Call</span>
    </button>
  </div>
  <div className="plan-feature-col">
    <button className="support-button-pushable">
      <span className="support-button-shadow"></span>
      <span className="support-button-accent-edge"></span>
      <span className="support-button-accent-front text">Book a Call</span>
    </button>
  </div>
  <div className="plan-feature-col">
    <button className="support-button-pushable">
      <span className="support-button-shadow"></span>
      <span className="support-button-accent-edge"></span>
      <span className="support-button-accent-front text">Book a Call</span>
    </button>
  </div>
</div>



        

       {/* Support Plans Section */}
    <div className="pricing-header pricing-header-2">
      <div className="pricing-header-copy-container pricing-header-copy-container-bottom">
        <p className="pricing-header-copy">
          <span>Need support after launch?</span> Great! We’ve got you covered with these site care plans.
        </p>
      </div>
    </div>

    <div className="plan-feature-header">
      <div className="plan-feature-col">
        <h3 className="header-name">Plan</h3>
      </div>
      <div className="plan-feature-col">
        <h3 className="header-name">Hosting, SSL & Backups</h3>
      </div>
      <div className="plan-feature-col">
        <h3 className="header-name">SEO<br/> Reviews</h3>
      </div>
      <div className="plan-feature-col">
        <h3 className="header-name">Monthly<br/> Edits</h3>
      </div>
      <div className="plan-feature-col">
        <h3 className="header-name">Monthly Feature Adds</h3>
      </div>
      <div className="plan-feature-col">
        <h3 className="header-name">Analytics Reporting</h3>
      </div>
      <div className="plan-feature-col">
      </div>
    </div>

    <div className="plan-feature-row">
      <div className="plan-feature-col">
        <h3 className="plan-name">Site Care</h3>
        <p>$295/mo</p>
      </div>
      <div className="plan-feature-col">
        <FaCheck className="plan-feature-check"/>
      </div>
      <div className="plan-feature-col">
        <FaCheck className="plan-feature-check"/>
      </div>
      <div className="plan-feature-col plan-feature-text">
        2 hours
      </div>
      <div className="plan-feature-col">
        <ImCross className="plan-feature-x"/>
      </div>
      <div className="plan-feature-col">
        <ImCross className="plan-feature-x"/>
      </div>
      <div className="plan-feature-col">
        <button
          // onClick={() => setShowModal(true)}
          className="support-button-pushable"
        >
          <span className="support-button-shadow"></span>
          <span className="support-button-accent-edge"></span>
          <span className="support-button-accent-front text">Subscribe</span>
        </button>
      </div>
    </div>


    <div className="plan-feature-row">
      <div className="plan-feature-col">
        <h3 className="plan-name">Site Grow</h3>
        <p>$595/mo</p>
      </div>
      <div className="plan-feature-col">
      <FaCheck className="plan-feature-check"/>
      </div>
      <div className="plan-feature-col">
      <FaCheck className="plan-feature-check"/>
      </div>
      <div className="plan-feature-col plan-feature-text">
        4 hours
      </div>
      <div className="plan-feature-col">
      <FaCheck className="plan-feature-check"/>
      </div>
      <div className="plan-feature-col">
      <FaCheck className="plan-feature-check"/>
      </div>
      <div className="plan-feature-col">
        <button
          // onClick={() => setShowModal(true)}
          className="support-button-pushable"
        >
          <span className="support-button-shadow"></span>
          <span className="support-button-accent-edge"></span>
          <span className="support-button-accent-front text">Subscribe</span>
        </button>
      </div>
    </div>


  {/* Custom Plan Inquiry Card */}
        <div className="pricing-option-3">
          <div className="pricing-cta-copy">
            <p className=" pricing-cta-copy-1">
            Don't see exactly the services you need?
            </p>
            <p className="pricing-cta-copy-2">
            Reach out and let us know <br/>what you're looking for.
            </p>
          </div>

          <div>
            <p className="pricing-cta-email">
              Drop us an email at:
              <br />
              <a
              href="mailto:hello@golbi.co?subject=Greetings%20Golbi!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-cta-email"
              >
              <span>hello@golbi.co</span>
              </a>
              < br/>
           
            </p>

            <p className="pricing-cta-divider">or</p>
            <br/>
            <button
            className="button-pushable pricing-schedule-btn"
            onClick={() => window.open("https://calendly.com/scheduling-golbi/30min", "_blank")}
            >
            <span className="button-shadow"></span>
            <span className="button-accent-edge"></span>
            <span className="button-accent-front text">Schedule a Call</span>
            </button>
          </div>


        </div>


      
      </div>
    </Section>
  );
}
