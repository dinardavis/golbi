"use client";

import React, { useState, useRef } from "react";
import doodle2 from "../assets/imgs/doodle2.png";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import spider from "../assets/imgs/logo_spider_only.png";



export default function MobilePricing() {
  return (
    <div className="mobile-pricing-content">
        <div className="mobile-site-card">
            <div className="site-feature-header">
              <div className="site-feature-col site-name-container left">
                <h3 className="site-header-name">Starter Site<br/><span>$1,995</span></h3>
              </div>
            </div>
        
            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Your Business Phase</h3>
              </div>
              <div className="site-feature-col site-feature-desc">Ideal for solopreneurs and early-stage businesses with a clear, focused offering.</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Custom Pages</h3>
              </div>
              <div className="site-feature-col">Single Page Site</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Mobile-Optimized</h3>
              </div>
              <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
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
              <div className="site-feature-col">Basic</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Copy Support</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Landing Page or Funnel</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Analytics Setup</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
            
              <div className="site-feature-col site-feature-cta-container left border-radius-override">
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
        </div>  


        <div className="mobile-site-card">
            <div className="site-feature-header">
              <div className="site-feature-col site-name-container left">
                <h3 className="site-header-name">Growth Site<br/><span>$3,995</span></h3>
              </div>
            </div>
        
            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Your Business Phase</h3>
              </div>
              <div className="site-feature-col site-feature-desc">Built for growing teams focused on boosting visibility and conversions.</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Custom Pages</h3>
              </div>
              <div className="site-feature-col">Up to 6 Pages</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Mobile-Optimized</h3>
              </div>
              <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Lead-Gen Form</h3>
              </div>
              <div className="site-feature-col">Lead Capture Setup</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">SEO & Speed Setup</h3>
              </div>
              <div className="site-feature-col">Foundation</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Copy Support</h3>
              </div>
              <div className="site-feature-col">Copy Editing</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Landing Page or Funnel</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Analytics Setup</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
            
              <div className="site-feature-col site-feature-cta-container left border-radius-override">
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
        </div> 


        <div className="mobile-site-card">
            <div className="site-feature-header">
              <div className="site-feature-col site-name-container left">
                <h3 className="site-header-name">Scale Site<br/><span>$5,995</span></h3>
              </div>
            </div>
        
            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Your Business Phase</h3>
              </div>
              <div className="site-feature-col site-feature-desc">Ideal for solopreneurs and early-stage businesses with a clear, focused offering.</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Custom Pages</h3>
              </div>
              <div className="site-feature-col">Single Page Site</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Mobile-Optimized</h3>
              </div>
              <div className="site-feature-col"><FaCheck className="site-feature-check" /></div>
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
              <div className="site-feature-col">Basic</div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Copy Support</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Landing Page or Funnel</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
              <div className="site-feature-col">
                <h3 className="site-name">Analytics Setup</h3>
              </div>
              <div className="site-feature-col"><ImCross className="site-feature-x" /></div>
            </div>

            <div className="site-feature-row">
            
              <div className="site-feature-col site-feature-cta-container left border-radius-override">
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
        </div> 

      <div className="pricing-header pricing-header-2">
      <div className="pricing-header-copy-container pricing-header-copy-container-bottom">
        <p className="pricing-header-copy">
          <span>Still want support after the launch?</span> Great! We’ve got you covered with that, too.
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
          <h3 className="plan-name">Care Plan</h3>
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
          <h3 className="plan-name">Boost Plan</h3>
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
    </div>        
      </div>
  )
}
    
