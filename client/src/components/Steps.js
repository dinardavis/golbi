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
      <div className="steps-header oswald">Hire <span className="steps-golbi-name">Golbi</span> to:</div>
      <div className="hire-to-section">
        <div className="hire-to-item">
          <div className="icon-container">
            <FaTools className="hire-to-icon" />
          </div>
          Build fast, clean sites designed to convert - not just look good.
          </div> 
        <div className="hire-to-item">
          <div className="icon-container">
            <FaRegGem className="hire-to-icon" />
          </div>
          Move on from <span className="no-wrap">cookie-cutter</span> templates. We design with intention and personality.</div> 

        <div className="hire-to-item">
          <div className="icon-container">
            <RxRocket className="hire-to-icon" />
          </div>
          Create custom Shopify or <span className="no-wrap">e-commerce</span> setups that move real product.</div> 

        <div className="hire-to-item">
          <div className="icon-container">
            <FaMagnifyingGlassDollar className="hire-to-icon" />
          </div>
          We optimize your site structure, speed, and content for search visibility.</div>
      </div>
    </div>
  </div>

        <div id="how" className="step-offer-container steps-right">
   
          <div className="steps-header oswald">How <span className="steps-golbi-name">it</span> works:</div>
          <p className="intro-cta-copy">Sign up with Golbi <br></br><span className="intro-cta-italic">only when you need to.</span></p>
        
          <div className="intro-cta-copy-container">
            <div className="intro-cta-copy intro-cta-copy-2">
            <div className="intro-cta-numbers">Step 1</div> Pick your build package and tell us what type of site your business needs.
            </div>
            <div className="intro-cta-copy intro-cta-copy-3">
            <span className="intro-cta-numbers">Step 2</span> We get to work designing, building, and launching a site that converts.
            </div>
            <div className="intro-cta-copy intro-cta-copy-4">
            <span className="intro-cta-numbers">Step 3</span> Subscribe for monthly support, and tech peace of mind. Or don’t. It's up to you.
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
