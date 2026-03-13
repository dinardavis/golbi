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
            <p className="about-copy">Before founding Golbi, <span className="about-link">Dinar</span> worked on advertising and marketing initiatives for brands like Pfizer, Disney, Coca-Cola, General Motors, and Procter & Gamble.</p>

            <p className="about-copy">Those organizations invest heavily in understanding what makes people pay attention and take action.</p>

            <p className="about-copy">Golbi applies that same strategic thinking to each of the websites we create, while leaving out the bloated processes, and cookie cutter templates. Just clear, thoughtful sites designed to build trust and bring in clients.</p>

            <img className="about-spider-2" src={spider} alt="Golbi spider" />
          </div>
        </div>
      </Section>
    </>
  );
}
