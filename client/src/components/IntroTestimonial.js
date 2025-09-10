import React from "react";
import spider from "../assets/imgs/logo_spider_only.png";

export default function IntroTestimonial() {
  return (
      <div className="testimonial-section">
        <img className="testimonial-spider-1" src={spider} alt="Golbi spider" />
        <p className="testimonial-copy">
          We are so pleased with our new site! We’re continuing to work with Golbi on new pages and features as we grow — highly recommend! 
        </p>
        <p className="testimonial-author">-Director of Operations</p>
        <p className="testimonial-author">Dependency Advocacy Center</p>
      </div>
  )
}