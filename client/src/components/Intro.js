import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="intro"
      className="intro-section"
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

export default function Intro() {
  return (
    <>
      <Section>
        <div className="intro-header-container-left text-center">
          <p className="intro-headline">
            <span className="intro-headline-gradient-layer">Turn your page views into clients.</span>
        
           
          </p>

          <p className="intro-subhead-copy">Sure, AI can create a site. But <span className="copy-highlight">Golbi</span> makes sure your site <span>actually works</span> for your business.</p>
     
          <p className="intro-subhead">Clear Pricing. Easy Sign-up. Big Impact.</p>

          <div className="intro-button-container">
            <a href="#pricing">
              <button className="button-pushable intro-cta-button">
                <span className="button-shadow"></span>
                <span className="button-accent-edge"></span>
                <span className="button-accent-front text">View Packages</span>
              </button>
            </a>
          </div>
        </div>
        
      </Section>
    </>
  );
}
