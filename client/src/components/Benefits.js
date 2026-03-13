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
      <p className='benefits-subhead'>((Yes, we know about site builders. And F!>#rr.))</p>

      <div className='benefits-items'>
        <div className="benefits-item">
          <div className="lottie-container meeting-container">
            <Lottie
              className='benefits-lottie-meeting'
              animationData={call} 
              loop={true} 
            />
          </div>
       
          <h2 className="benefits-item-header">Skip the DIY maze.</h2>
          <p className="benefits-item-copy">Sure, scrapbooking is fun. This isn't that. When it comes to the success of your business's image, you want a professional at the helm. So skip the headache of wearing yet another hat. </p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-heart'
              animationData={heart} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Wanna bet on the freelancer lottery?</h2>
          <p className="benefits-item-copy">Marketplaces are cheap and feel easy, but results will vary. With Golbi you get a consistent process, clear communication, and work shaped by years of industry experience.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-fingerprint'
              animationData={fingerprint} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Dodging big agency bloat.</h2>
          <p className="benefits-item-copy">No endless kickoff meetings. No project managers managing other project managers.Just clear decisions, practical execution, and a direct line to the person doing the work.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-gears'
              animationData={gears} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Pay for work. Not overhead.</h2>
          <p className="benefits-item-copy">No retainers. No idle hours. No mystery invoices. You pay for what gets done — simple as that. Want ongoing support? We offer that too. The choice is yours.</p>
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
