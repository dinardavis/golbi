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
            <span className="">Golbi</span> is
            a web agency specializing in supporting small businesses.
          </p>
          <p className="intro-subhead">Clear Pricing. Zero bloat. Just big results.</p>

          <div className="intro-button-container">
            <a href="#pricing">
              <button className="button-pushable intro-cta-button">
                <span className="button-shadow"></span>
                <span className="button-accent-edge"></span>
                <span className="button-accent-front text">See plans</span>
              </button>
            </a>
          </div>
        </div>
        
      </Section>
    </>
  );
}
