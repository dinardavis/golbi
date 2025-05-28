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
       
          <h2 className="benefits-item-header">Face-to-face...or not</h2>
          <p className="benefits-item-copy">Please schedule lots of meetings. Said NO ONE ever! <br></br>That&apos;s why with Golbi you send over your ideas, and we get to work. But if you&apos;d like to schedule a chat first, that&apos;s cool too!</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-heart'
              animationData={heart} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">HR departments love us</h2>
          <p className="benefits-item-copy">Onboarding a new hire? Nope! Tracking billable time? No need! When is open enrollment? Who cares!<br></br>Golbi offers all the perks of a team member, with none of the hassle. </p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-fingerprint'
              animationData={fingerprint} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">No one-size-fits-all</h2>
          <p className="benefits-item-copy">It&apos;s so cringe when you wear the same thing as someone else, right? Imagine how your biz feels wearing that same old AI-generated, hand-me-down template! At Golbi we build products just for YOU.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-gears'
              animationData={gears} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Flexible availability</h2>
          <p className="benefits-item-copy">Never pay for your dev&apos;s twiddled thumbs again. We work when there IS work. It&apos;s kinda perfect, when you think about it.</p>
        </div>

        <div className="benefits-item">
          <div className="lottie-container">
            <Lottie
              className='benefits-lottie-infinity'
              animationData={infinity} 
              loop={true} 
            />
          </div>
          <h2 className="benefits-item-header">Unlimited Submissions</h2>
          <p className="benefits-item-copy">You keep sending your ideas, we&apos;ll keep producing products that will do your business proud.</p>
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
