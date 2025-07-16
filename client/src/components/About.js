import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import spider from "../assets/imgs/logo_spider_only.png";


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
        <div className="about-content">
          <img className="about-spider-1" src={spider} alt="Golbi spider" />
          <p className="about-copy">Before founding Golbi, its founder (<a className="about-link">Dinar</a>) spent years shaping campaigns for global giants like Pfizer, Disney, Coca-Cola, General Motors, and the U.S. Army.</p>

          <p className="about-copy">Now, he provides that same standard of execution to small businesses without the overhead, inflated timelines, or agency fluff.</p>

          <p className="about-copy">Golbi is lean by design, delivering sharp, fast, web work for businesses that want results, not the runaround.</p>
          <img className="about-spider-2" src={spider} alt="Golbi spider" />
        </div>

      </Section>
    </>
  );
}
