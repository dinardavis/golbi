"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import doodle1 from "../assets/imgs/doodle1.png";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="products"
      className="products-section"
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

export default function Products() {
  return (
    <Section>
      <img className="doodle-1" src={doodle1} alt="" />
      <h1 className="products-header section-header">
        You need it, we build it!
      </h1>
      <ul className="products-items">
        <li className="products-item">Branding</li>
        <li className="products-item">Landing Pages</li>
        <li className="products-item">Mobile Apps</li>
        <li className="products-item">WordPress</li>
        <li className="products-item">LMS</li>
        <li className="products-item">Blogs</li>
        <li className="products-item">Static Site</li>
        <li className="products-item">JavaScript</li>
        <li className="products-item">React</li>
        <li className="products-item">NextJS</li>
        <li className="products-item">E-commerce</li>
        <li className="products-item">More...</li>
      </ul>
    </Section>
  );
}
