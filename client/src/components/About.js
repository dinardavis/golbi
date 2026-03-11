import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import spider from "../assets/imgs/logo_spider_only.png";
import IntroTestimonial from "./IntroTestimonial"
import Intro from "./Intro";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="about"
      className="about-section"
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

export default function About() {
  return (
    <>
      <Section>
        <div className="about-section-inner">
          <IntroTestimonial />
          <div className="about-content">
            <img className="about-spider-1" src={spider} alt="Golbi spider" />
            <p className="about-copy">Before founding Golbi, its founder (<a className="about-link">Dinar</a>) worked on advertising and marketing initiatives for global brands including Pfizer, Disney, Coca-Cola, General Motors, and Procter & Gamble.</p>

            <p className="about-copy">Those companies invest heavily in understanding what makes people take action online.</p>

            <p className="about-copy">Golbi brings that same thinking to small businesses. Instead of generic templates or bloated agency processes, Golbi delivers focused, practical websites designed to help businesses communicate clearly, build trust, and generate new clients.</p>
            <p className="about-copy">Lean by design. Strategic by experience.</p>
            <img className="about-spider-2" src={spider} alt="Golbi spider" />
          </div>
        </div>
      </Section>
    </>
  );
}
