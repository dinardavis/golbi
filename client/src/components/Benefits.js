"use client"

import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import Lottie from "lottie-react";
import call from "../lotties/call.json";
import heart from "../lotties/heart.json";
import fingerprint from "../lotties/fingerprint.json";
import gears from "../lotties/gears.json";
import infinity from "../lotties/infinity.json";




function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="about" className='benefits-section' 
    //  style={{
    //   transform: isInView ? "none" : "translateY(340px)",
    //   opacity: isInView ? 1 : 0,
    //   transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"
    // }}
  >
      {children}
    </section>
  );
}


export default function Benefits() {
  return (
    <Section >
      <p className='benefits-header section-header'><span className='benefits-name'>Golbi</span> vs.<br></br><span className='benefits-options'>The Other Options</span></p> 
      <p className='benefits-subhead'>(Starts with an &ldquo;F&ldquo;, ends with an &ldquo;errrrrr&ldquo;)</p>

      <div className='benefits-items'>
        <div className="benefits-item">
          <div className="lottie-container meeting-container">
            <Lottie
              className='benefits-lottie-meeting'
              animationData={call} 
              loop={true} 
            />
          </div>
       
          <h2 className="benefits-item-header">Zero songs. No dancing.</h2>
          <p className="benefits-item-copy">Endless Zooms? Status calls? Slack check-ins? Nah. Just send us what you’ve got — we’ll get to work. Prefer to talk it out first? Cool. We can do that too.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-heart'
              animationData={heart} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Your Teammate...even less drama.</h2>
          <p className="benefits-item-copy">No onboarding. No time tracking. No HR paperwork. Just clean, effective web builds from a studio that gets it. You get results, not red tape.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-fingerprint'
              animationData={fingerprint} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">A unique business imprint.</h2>
          <p className="benefits-item-copy">Cookie cutters are for cookies — not your site. Golbi delivers tailored, thoughtful builds with your voice and goals baked in. No templates. No fluff. No identity crisis.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-gears'
              animationData={gears} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">All go, no bloat.</h2>
          <p className="benefits-item-copy">No retainers. No idle hours. No mystery invoices. You pay for what gets done — simple as that. Want ongoing support? We offer that too, on your terms.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-infinity'
              animationData={infinity} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Add-Ons, Not Add-Ons</h2>
          <p className="benefits-item-copy">Need a new page? A landing campaign? We’re always here when you need us — and only then. Think of us like a web team on call, without the payroll.</p>
        </div>
      </div>
      <a href="#pricing" className="benefits-pricing-btn">
        <button className="button-pushable benefits-cta-button">
          <span className="button-shadow"></span>
          <span className="button-accent-edge"></span>
          <span className="button-accent-front text">
            See plans
          </span>
        </button>
      </a>
    </Section>
  )
}
