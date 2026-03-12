"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function MobilePricing() {
  return (
    <div className="mobile-pricing-content">
      <div className="site-feature-payment-copy-container">
        <p className="mobile-site-feature-payment-copy">Simple 50/50 billing<br></br>50% to start, then the remaining 50% at launch</p>
      </div>

      {/* Single-Page - matches desktop */}
      <div className="mobile-site-card">
        <div className="site-feature-header">
          <div className="site-feature-col site-name-container left">
            <h3 className="site-header-name">
              Single-Page
              <br />
              <span>$1,595</span>
            </h3>
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Your Business Phase</h3>
          </div>
          <div className="site-feature-col site-feature-desc">
            Perfect for <span>coaches, consultants, and solopreneurs</span> that need a professional online presence.
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Custom Pages</h3>
          </div>
          <div className="site-feature-col">Single-page scroll website</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Mobile-Optimized</h3>
          </div>
          <div className="site-feature-col">
            <FaCheck className="site-feature-check" />
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Lead-Gen Form</h3>
          </div>
          <div className="site-feature-col">1 Form</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">SEO & Speed Setup</h3>
          </div>
          <div className="site-feature-col">SEO Setup</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Copy Support</h3>
          </div>
          <div className="site-feature-col">Polishing & Error Checking</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col site-feature-cta-container left border-radius-override">
            <p
              className="calendar-booking"
              onClick={() =>
                window.open("https://calendly.com/scheduling-golbi/30min", "_blank")
              }
            >
              Book a call to learn more
            </p>

            <button
              className="pricing-button button-pushable"
              onClick={() =>
                window.open("https://buy.stripe.com/dRmbJ377jfYF7zP7mD2cg06", "_blank")
              }
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Get started</span>
            </button>
          </div>
        </div>
      </div>

      {/* Multi-Page - matches desktop */}
      <div className="mobile-site-card">
        <div className="site-feature-header">
          <div className="site-feature-col site-name-container left">
            <h3 className="site-header-name">
              Multi-Page
              <br />
              <span>$3,995</span>
            </h3>
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Your Business Phase</h3>
          </div>
          <div className="site-feature-col site-feature-desc">
            Designed for businesses that need more space to clearly communicate their services, credibility, and value.
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Custom Pages</h3>
          </div>
          <div className="site-feature-col">Up to 5 Pages</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Mobile-Optimized</h3>
          </div>
          <div className="site-feature-col">
            <FaCheck className="site-feature-check" />
          </div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Lead-Gen Form</h3>
          </div>
          <div className="site-feature-col">Multiple Lead Capture Forms</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">SEO & Speed Setup</h3>
          </div>
          <div className="site-feature-col">SEO & Analytics Integration</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col">
            <h3 className="site-name">Copy Support</h3>
          </div>
          <div className="site-feature-col">Editing and Messaging Support</div>
        </div>

        <div className="site-feature-row">
          <div className="site-feature-col site-feature-cta-container left border-radius-override">
            <p
              className="calendar-booking"
              onClick={() =>
                window.open("https://calendly.com/scheduling-golbi/30min", "_blank")
              }
            >
              Book a call to learn more
            </p>

            <button
              className="pricing-button button-pushable"
              onClick={() =>
                window.open("https://buy.stripe.com/00w4gBcrD13L8DT6iz2cg07", "_blank")
              }
            >
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Get started</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pricing-header pricing-header-2">
        <div className="pricing-header-copy-container pricing-header-copy-container-bottom">
          <p className="pricing-header-copy">
            <span>Still want support after the launch?</span> Great! We’ve got
            you covered with that, too.
          </p>
        </div>
      </div>

      {/* Plan Pricing Table Mobile */}
      <div className="pricing-table-mobile">
        <div className="plan-feature-header">
          <div className="plan-feature-col">
            <h3 className="header-name">Plan</h3>
          </div>
          <div className="plan-feature-col">
            <h3 className="header-name">Hosting, SSL & Backups</h3>
          </div>
          <div className="plan-feature-col">
            <h3 className="header-name">
              SEO
              <br /> Reviews
            </h3>
          </div>
          <div className="plan-feature-col">
            <h3 className="header-name">
              Monthly
              <br /> Edits
            </h3>
          </div>
          <div className="plan-feature-col">
            <h3 className="header-name">Monthly Feature Adds</h3>
          </div>
          <div className="plan-feature-col">
            <h3 className="header-name">Analytics Reporting</h3>
          </div>
          <div className="plan-feature-col"></div>
        </div>

        <div className="plan-feature-row">
          <div className="plan-feature-col">
            <h3 className="plan-name">Care Plan</h3>
            <p>$295/mo</p>
          </div>
          <div className="plan-feature-col">
            <FaCheck className="plan-feature-check" />
          </div>
          <div className="plan-feature-col">
            <FaCheck className="plan-feature-check" />
          </div>
          <div className="plan-feature-col plan-feature-text">2 hours</div>
          <div className="plan-feature-col">
            <ImCross className="plan-feature-x" />
          </div>
          <div className="plan-feature-col">
            <ImCross className="plan-feature-x" />
          </div>
          <div className="plan-feature-col">
            <button
              // onClick={() => setShowModal(true)}
              className="support-button-pushable"
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/7sY00l1MZdQx2fv0Yf2cg09",
                  "_blank"
                )
              }
            >
              <span className="support-button-shadow"></span>
              <span className="support-button-accent-edge"></span>
              <span className="support-button-accent-front text">
                Subscribe
              </span>
            </button>
          </div>
        </div>

        <div className="plan-feature-row">
          <div className="plan-feature-col">
            <h3 className="plan-name">Boost Plan</h3>
            <p>$595/mo</p>
          </div>
          <div className="plan-feature-col">
            <FaCheck className="plan-feature-check" />
          </div>
          <div className="plan-feature-col">
            <FaCheck className="plan-feature-check" />
          </div>
          <div className="plan-feature-col plan-feature-text">4 hours</div>
          <div className="plan-feature-col">
            <FaCheck className="plan-feature-check" />
          </div>
          <div className="plan-feature-col">
            <FaCheck className="plan-feature-check" />
          </div>
          <div className="plan-feature-col">
            <button
              // onClick={() => setShowModal(true)}
              className="support-button-pushable"
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/fZu28tbnzaEl8DT8qH2cg0a",
                  "_blank"
                )
              }
            >
              <span className="support-button-shadow"></span>
              <span className="support-button-accent-edge"></span>
              <span className="support-button-accent-front text">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
