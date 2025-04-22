import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import mainLogo from "../assets/imgs/golbi_logo.png";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="intro"
      className="intro-section"
      style={{
        transform: isInView ? "none" : "translateY(340px)",
        opacity: isInView ? 1 : 0,
        transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </section>
  );
}

export default function Intro() {
  return (
    <>
      <div className="intro-logo-container">
        <img className="intro-logo" src={mainLogo} alt="Golbi Logo" />
        <div className="intro-logo-arch-right"></div>
        <div className="intro-logo-arch-left"></div>
      </div>

      <Section>
        <div className="intro-header-container-left text-center">
          <p className="intro-headline oswald font-bold">
            <span className="">Golbi</span> is a web development agency.{" "}
          </p>
          <p className="intro-subhead">(Minus the annoying parts.)</p>
        </div>

        <div className="intro-header-container-right text-center font-light">
          <p className="intro-cta-copy intro-cta-copy-1">
            Perfect for starting or growing your business. Add a developer to
            the team <span>only when you need one.</span>
          </p>

          <p className="intro-cta-copy intro-cta-copy-2">
            <span className="step-accent">Step 1 :</span> Hire Golbi in less
            than 5-minutes, when you have a project for us.
          </p>
          <p className="intro-cta-copy intro-cta-copy-3">
            <span className="step-accent">Step 2 :</span> Pause or cancel your
            subscription when the project is complete.
          </p>

          <div className="intro-button-container">
            <p className="intro-cta-copy intro-cta-copy-4">
              It&apos;s that easy! Yes, really.
            </p>
            <button className="button-pushable intro-cta-button">
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">See plans</span>
            </button>

            <span className="intro-radar-text">
              Now accepting new clients <span className="radar"></span>
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
