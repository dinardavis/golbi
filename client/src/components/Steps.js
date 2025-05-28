import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaTools, FaSyncAlt, FaBullhorn } from "react-icons/fa";
import { ImBullhorn } from "react-icons/im";

import { HiOutlineAdjustments } from "react-icons/hi";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="steps"
      className="steps-section"
      // style={{
      //   transform: isInView ? "none" : "translateY(340px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      // }}
    >
      {children}
    </section>
  );
}

export default function Steps() {
  return (
    <Section>
      <div className="steps-content text-center font-light">
        <div className="step-offer-container steps-left">
        <div className="intro-cta-copy intro-cta-copy-1">
          <div className="steps-header oswald">Hire <span className="steps-golbi-name">Golbi</span> to:</div>
          <div className="hire-to-section"> 
            <div className="hire-to-item">  
              <div className="icon-container">
                <FaTools className="hire-to-icon" />
              </div>
              Build a new site, with easy-to-follow update instructions</div> 
            <div className="hire-to-item">
                  <div className="icon-container">
              <FaSyncAlt className="hire-to-icon" />
              </div>
              Keep your existing site up to date with new content</div> 
            <div className="hire-to-item">
                  <div className="icon-container">
              <HiOutlineAdjustments className="hire-to-icon" />
              </div>
              Redesign or refresh a site that you already have</div> 
            <div className="hire-to-item">
                  <div className="icon-container">
              <ImBullhorn className="hire-to-icon" />
              </div>
              Launch landing pages, blog posts, promos, or anything new
            </div>
          </div>
        </div>
      </div>
      

        <div className="step-offer-container steps-right">
   
          <div className="steps-header oswald">How it works:</div>
          <p className="intro-cta-copy">Add Golbi to your team <br></br><span className="intro-cta-italic">only when you need to.</span></p>
        
          <div className="intro-cta-copy-container">
            <div className="intro-cta-copy intro-cta-copy-2">
            <div className="intro-cta-numbers">Step 1</div> Hire Golbi for your next project in less than 5-minutes.
            </div>
            <p className="intro-cta-copy intro-cta-copy-3">
            <span className="intro-cta-numbers">Step 2</span>We get to work delivering content that will boost your business.
            </p>
            <p className="intro-cta-copy intro-cta-copy-4">
            <span className="intro-cta-numbers">Step 3</span>   When the project’s done, just pause or cancel. That’s it. No strings attached.
            </p>
          </div>

          <div className="intro-button-container">
          <p className="intro-cta-copy intro-cta-copy-5">
            It&apos;s that easy! <span>(Yes, really.)</span>
          </p>
          <a href="#pricing">
            <button className="button-pushable intro-cta-button">
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Compare our plans</span>
            </button>
          </a>
          <span className="intro-radar-text">
            Now accepting new clients <span className="radar"></span>
          </span>
        </div>
        </div>
      </div>
    </Section>
    
  )
}
