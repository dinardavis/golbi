import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import donutSite from "../assets/imgs/donutmissit_thumbnail.png";
import dacSite from "../assets/imgs/dac_thumbnail.png";
import suitSite from "../assets/imgs/suitsupply_thumbnail.png";
import spaceSite from "../assets/imgs/spacexclone_thumbnail.png";
import travelSite from "../assets/imgs/travel_thumbnail.png";
import yourSite from "../assets/imgs/yourproject_thumbnail.png";
import overlay1 from "../assets/imgs/overlay-1.png";
import overlay2 from "../assets/imgs/overlay-2.png";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="work"
      className="work-section"
      style={{
        transform: isInView ? "none" : "translateY(340px)",
        opacity: isInView ? 1 : 0,
        transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
      }}
    >
      {children}
    </section>
  );
}

export default function Work() {
  const workWidth = "500";
  const workHeight = "500";

  return (
    <Section>
      <div className="work-content section-content">
        <div className="work-grid">
          <div className="work-item">
            <img className="work-overlay" src={overlay1} alt="work sample" />
            <img
              className="work-screenshot"
              src={donutSite}
              width={workWidth}
              height={workHeight}
              alt="work sample"
            />
          </div>
          <div className="work-item">
            <img className="work-overlay" src={overlay2} alt="work sample" />
            <img
              className="work-screenshot"
              src={dacSite}
              width={workWidth}
              height={workHeight}
              alt="work sample"
            />
          </div>
          <div className="work-item">
            <img className="work-overlay" src={overlay1} alt="work sample" />
            <img
              className="work-screenshot"
              src={suitSite}
              width={workWidth}
              height={workHeight}
              alt="work sample"
            />
          </div>
          <div className="work-item">
            <img className="work-overlay" src={overlay2} alt="work sample" />
            <img
              className="work-screenshot"
              src={spaceSite}
              width={workWidth}
              height={workHeight}
              alt="work sample"
            />
          </div>
          <div className="work-item">
            <img className="work-overlay" src={overlay1} alt="work sample" />
            <img
              className="work-screenshot"
              src={travelSite}
              width={workWidth}
              height={workHeight}
              alt="work sample"
            />
          </div>
          <div className="work-item">
            <div className="work-overlay"></div>
            <img
              className="work-screenshot"
              src={yourSite}
              width={workWidth}
              height={workHeight}
              alt="work sample"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
