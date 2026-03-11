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
      id="work"
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
                <div className="products-item">Lead Capture Forms</div>
                <div className="products-item">Launch Landing Pages</div>
                <div className="products-item">Brand Storytelling</div>
                <div className="products-item">Testimonials</div>
                <div className="products-item">Booking Integrations</div>
                <div className="products-item">Email List Builders</div>
                <div className="products-item">SEO Optimization</div>
                <div className="products-item">Mobile-First Design</div>
                <div className="products-item">Performance Optimization</div>
                <div className="products-item">Service Pages</div>
                <div className="products-item">Socials Linking</div>
                <div className="products-item">And More...</div>
              </div>

            </div>         
          </div>
        </div>

        <div className="case-studies-content-container">
          <h3 className="case-studies-content-header">Client Case Studies</h3>
          {caseStudyData.map((item, index) => (
            <CaseStudyCard key={index} {...item} />
          ))}
        </div>

       
      </div>
    </Section>
  );
}
