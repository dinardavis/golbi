// components/CaseStudies.jsx
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import doodle1 from "../assets/imgs/doodle1.png";
import CaseStudyCard from "./CaseStudyCard"
import caseStudyData from "../data/caseStudyData";
import DiagonalScroller from "./DiagonalScroller";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="case-studies"
      className="case-studies-section"
    >
      {children}
    </section>
  );
}

export default function CaseStudies() {
  const workWidth = "500";
  const workHeight = "500";

  return (
    <Section>
      <img className="doodle-1" src={doodle1} alt="" />
      <div className="case-studies-container section-content">
        <h1 className="case-studies-header">
          Big web energy, <span>for your small biz.</span>
        </h1>
        <div className="case-studies-content">
          <div className="case-studies-main-content">
            <p className="case-studies-subheader">
              From full builds to quick updates, we support everything your business needs to grow.
            </p>
            <div className="case-studies-top-content-container">
              <DiagonalScroller />
            
              <div className="products-items">
                <div className="products-item">Lead Captures</div>
                <div className="products-item">List Builders</div>
                <div className="products-item">Launch Pages</div>
                <div className="products-item">Brand Stories</div>
                <div className="products-item">Promo Countdown Timers</div>
                <div className="products-item">Testimonials</div>
                <div className="products-item">Quick Edits</div>
                <div className="products-item">Zapier Hooks</div>
                <div className="products-item">Mobile Views</div>
                <div className="products-item">Shop Pages</div>
                <div className="products-item">SEO Enhancements</div>
                <div className="products-item">And More...</div>
              </div>

            </div>         
          </div>
        </div>

        <div className="case-studies-content-container">
          <h3 className="case-studies-content-header">Client Snapshots</h3>
          {caseStudyData.map((item, index) => (
            <CaseStudyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
