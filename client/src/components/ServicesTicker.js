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
        <li className="service-item-container">
        Branding
        </li>
        <li className="service-item-container">
        Landing Pages
        </li>
        <li className="service-item-container">
        Mobile Apps
        </li>
        <li className="service-item-container">
        WordPress
        </li>
        <li className="service-item-container">
        LMS
        </li>
        <li className="service-item-container">
        Blogs
        </li>
        <li className="service-item-container">
        Static Site
        </li>
        <li className="service-item-container">
        E-commerce
        </li>
      </ul>

      <ul aria-hidden="true">
      <li className="service-item-container">
        Branding
        </li>
        <li className="service-item-container">
        Landing Pages
        </li>
        <li className="service-item-container">
        Mobile Apps
        </li>
        <li className="service-item-container">
        WordPress
        </li>
        <li className="service-item-container">
        LMS
        </li>
        <li className="service-item-container">
        Blogs
        </li>
        <li className="service-item-container">
        Static Site
        </li>
        <li className="service-item-container">
        E-commerce
        </li>
      </ul>
    </div>
  )
}