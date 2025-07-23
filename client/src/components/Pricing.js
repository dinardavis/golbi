"use client";

import React, { useState, useRef } from "react";
import doodle2 from "../assets/imgs/doodle2.png";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import spider from "../assets/imgs/logo_spider_only.png";

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
        <div className="site-feature-header">
          <div className="site-feature-col-blank"></div>
          <div className="site-feature-col site-name-container left">
            <h3 className="site-header-name">Starter Site<br/><span>$1,995</span></h3>
          </div>
          <div className="site-feature-col site-name-container">
            <h3 className="site-header-name">Growth Site<br/><span>$3,995</span></h3>
          </div>
          <div className="site-feature-col site-name-container">
            <h3 className="site-header-name">Scale Site<br/><span>$5,995</span></h3>
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Your Business Phase</h3>
          </div>
          <div className="site-feature-col site-feature-desc">Ideal for solopreneurs and early-stage businesses with a clear, focused offering.</div>
          <div className="site-feature-col site-feature-desc">Built for growing teams focused on boosting visibility and conversions.</div>
          <div className="site-feature-col site-feature-desc">Designed for established brands with layered messaging and more complex needs.</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Custom Pages</h3>
          </div>
          <div className="site-feature-col">Single Page Site</div>
          <div className="site-feature-col">Up to 6 Pages</div>
          <div className="site-feature-col">Up to 12 Pages</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Mobile-Optimized</h3>
          </div>
          <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
          <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
          <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Lead-Gen Form</h3>
          </div>
          <div className="site-feature-col">1 Form</div>
          <div className="site-feature-col">Lead Capture Setup</div>
          <div className="site-feature-col">Integrated Tools</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">SEO & Speed Setup</h3>
          </div>
          <div className="site-feature-col">Basic</div>
          <div className="site-feature-col">Foundation</div>
          <div className="site-feature-col">Advanced</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Copy Support</h3>
          </div>
          <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
          <div className="site-feature-col">Copy Editing</div>
          <div className="site-feature-col">Headline & Messaging</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Landing Page or Funnel</h3>
          </div>
          <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
          <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
          <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Analytics Setup</h3>
          </div>
          <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
          <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
          <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col-blank"></div>
          <div className="site-feature-col site-feature-cta-container left">
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
                (
                  "_blank"
                )
              }
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Get started</span>
            </button>
          </div>
          <div className="site-feature-col site-feature-cta-container">
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
                (
                  "_blank"
                )
              }
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Get started</span>
            </button>
          </div>
          <div className="site-feature-col site-feature-cta-container">
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
                (
                  "_blank"
                )
              }
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Get started</span>
            </button>
        </div>    
      </div>


        

       {/* Support Plans Section */}
    <div className="pricing-header pricing-header-2">
      <div className="pricing-header-copy-container pricing-header-copy-container-bottom">
        <p className="pricing-header-copy">
          <span>Still want support after the launch?</span> Great! We’ve got you covered with that, too.
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
        <h3 className="plan-name">Site Care Plan</h3>
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
        <h3 className="plan-name">Site Grow Plan</h3>
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
