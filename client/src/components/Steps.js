import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaTools, FaRegGem } from "react-icons/fa";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { RxRocket } from "react-icons/rx";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
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
      <div className="steps-header oswald">What <span className="steps-golbi-name">Golbi</span> does better:</div>
      <div className="hire-to-section">
        <div className="hire-to-item">
          <div className="icon-container">
            <FaTools className="hire-to-icon" />
          </div>
          Strong digital work begins with clarity. Years of advertising experience helps distill what makes your business valuable and why someone should care.
          </div> 
        <div className="hire-to-item">
          <div className="icon-container">
            <FaRegGem className="hire-to-icon" />
          </div>
         Every section has a job. The goal is to guide someone from curiosity to trust to action without confusion or friction.</div> 

        <div className="hire-to-item">
          <div className="icon-container">
            <RxRocket className="hire-to-icon" />
          </div>
         Automated tools can generate layouts, but strategy, taste, and restraint still require a thinking human.</div> 

        <div className="hire-to-item">
          <div className="icon-container">
            <FaMagnifyingGlassDollar className="hire-to-icon" />
          </div>
          The final result should feel intentional, credible, and aligned with the way you actually work with clients.</div>
      </div>
    </div>
  </div>

        <div id="how" className="step-offer-container steps-right">
   
          <div className="steps-header oswald">How <span className="steps-golbi-name">it</span> works:</div>
          <p className="intro-cta-copy">Sign up with Golbi <br></br><span className="intro-cta-italic">only when you need to.</span></p>
        
          <div className="intro-cta-copy-container">
            <div className="intro-cta-copy intro-cta-copy-2">
            <div className="intro-cta-numbers">Step 1</div> Choose the website package that fits your business and share a few details about your goals.
            </div>
            <div className="intro-cta-copy intro-cta-copy-3">
            <span className="intro-cta-numbers">Step 2</span> Golbi designs, builds, and launches a clean, modern website tailored to your services.
            </div>
            <div className="intro-cta-copy intro-cta-copy-4">
            <span className="intro-cta-numbers">Step 3</span> After launch, you can keep Golbi on call for updates and improvements. Or simply take the site and run with it.
            </div>
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
