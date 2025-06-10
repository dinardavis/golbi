"use client"
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="technologies" className='technologies-section'>
      <span
        className="technologies-content"
        style={{
          transform: isInView ? "none" : "translateX(1000px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function ServicesTicker() {

  return (
    <div className="service-ticker">
      <ul>
        <li className="service-item-container">Brand Makeovers</li>
        <li className="service-item-container">Online Stores</li>
        <li className="service-item-container">Blog Setup</li>
        <li className="service-item-container">Course Platforms</li>
        <li className="service-item-container">Custom UI/UX</li>
        <li className="service-item-container">Mobile-First Sites</li>
        <li className="service-item-container">Launch Funnels</li>
        <li className="service-item-container">SEO Boosts</li>
      </ul>

      <ul aria-hidden="true">
        <li className="service-item-container">Brand Makeovers</li>
        <li className="service-item-container">Online Stores</li>
        <li className="service-item-container">Blog Setup</li>
        <li className="service-item-container">Course Platforms</li>
        <li className="service-item-container">Custom UI/UX</li>
        <li className="service-item-container">Mobile-First Sites</li>
        <li className="service-item-container">Launch Funnels</li>
        <li className="service-item-container">SEO Boosts</li>
      </ul>
    </div>
  )
}