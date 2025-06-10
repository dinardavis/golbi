import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import doodle1 from "../assets/imgs/doodle1.png";
import ImageMosaic from "./ImageMosaic";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="work"
      className="work-section"
      // style={{
      //   transform: isInView ? "none" : "translateY(340px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
      // }}
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
      <img className="doodle-1" src={doodle1} alt="" />
      <div className="work-container section-content">    
        <h1 className="products-header section-header">
          <span>Big web energy,</span> for your small biz.
        </h1>
        <div className="work-content">

          <ImageMosaic />

          <div className="products-items-container">
            <p className="products-items-header">
            From full builds to quick updates, we support everything your business needs to grow.
            </p>
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
    </Section>
  );
}
