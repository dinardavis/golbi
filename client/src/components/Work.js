import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import doodle1 from "../assets/imgs/doodle1.png";
import dacthumbnail from "../assets/imgs/dac_thumbnail.png"
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



        {/* <div class="our-work-grid">
  <div class="spotlight-card">
    <h3>📍 Client Spotlight: Luna Yoga Studio</h3>
    <ul>
      <li>🛠️ <strong>What They Needed:</strong> A landing page to promote their new online classes</li>
      <li>🚀 <strong>What We Delivered:</strong> A responsive, calming page with booking integration via Calendly</li>
      <li>📈 <strong>Impact:</strong> 150+ class signups in the first month</li>
    </ul>
    <blockquote>
      💬 “They turned my idea into a clean, professional site that matched my vibe perfectly.”
    </blockquote>

    <div class="screenshots">
      <img src={dacthumbnail} alt="Desktop view of Luna Yoga Studio site"/>
      <img src={dacthumbnail} alt="Mobile view of Luna Yoga Studio site"/>
    </div>

   
    <a href="#" class="see-live-btn">🔗 See Live</a>
  </div>
  
  <div class="spotlight-card">
    <h3>📍 Client Spotlight: Luna Yoga Studio</h3>
    <ul>
      <li>🛠️ <strong>What They Needed:</strong> A landing page to promote their new online classes</li>
      <li>🚀 <strong>What We Delivered:</strong> A responsive, calming page with booking integration via Calendly</li>
      <li>📈 <strong>Impact:</strong> 150+ class signups in the first month</li>
    </ul>
    <blockquote>
      💬 “They turned my idea into a clean, professional site that matched my vibe perfectly.”
    </blockquote>

    <div class="screenshots">
      <img src={dacthumbnail} alt="Desktop view of Luna Yoga Studio site"/>
      <img src={dacthumbnail} alt="Mobile view of Luna Yoga Studio site"/>
    </div>

   
    <a href="#" class="see-live-btn">🔗 See Live</a>
  </div>

  <div class="spotlight-card">
    <h3>📍 Client Spotlight: Luna Yoga Studio</h3>
    <ul>
      <li>🛠️ <strong>What They Needed:</strong> A landing page to promote their new online classes</li>
      <li>🚀 <strong>What We Delivered:</strong> A responsive, calming page with booking integration via Calendly</li>
      <li>📈 <strong>Impact:</strong> 150+ class signups in the first month</li>
    </ul>
    <blockquote>
      💬 “They turned my idea into a clean, professional site that matched my vibe perfectly.”
    </blockquote>

    <div class="screenshots">
      <img src={dacthumbnail} alt="Desktop view of Luna Yoga Studio site"/>
      <img src={dacthumbnail} alt="Mobile view of Luna Yoga Studio site"/>
    </div>

   
    <a href="#" class="see-live-btn">🔗 See Live</a>
  </div>

</div>



<div class="our-work-vertical">
  <div class="spotlight-vertical">
    <h2>📍 Client Spotlight: A Local Food Truck Expanding to Catering</h2>
    
    <p><strong>🛠️ What They Needed:</strong> A modern site to highlight their catering services and collect event requests</p>
    <p><strong>🚀 What We Delivered:</strong> A bold, scroll-friendly site with a contact form connected to Google Sheets</p>
    <p><strong>📈 Impact:</strong> Booked 8 catering events in the first 2 weeks</p>
    
    <blockquote>
      💬 “We didn’t even know how to start. They made the site look amazing *and* helped us show up on Google.”
    </blockquote>

    <div class="screenshots-vertical">
      <img src={dacthumbnail} alt="Desktop view of food truck site"/>
      <img src={dacthumbnail} alt="Mobile view of food truck site"/>
    </div>

    <a href="#" class="see-live-btn">🔗 See Live</a>
  </div>

  <div class="spotlight-vertical">
    <h2>📍 Client Spotlight: A Local Food Truck Expanding to Catering</h2>
    
    <p><strong>🛠️ What They Needed:</strong> A modern site to highlight their catering services and collect event requests</p>
    <p><strong>🚀 What We Delivered:</strong> A bold, scroll-friendly site with a contact form connected to Google Sheets</p>
    <p><strong>📈 Impact:</strong> Booked 8 catering events in the first 2 weeks</p>
    
    <blockquote>
      💬 “We didn’t even know how to start. They made the site look amazing *and* helped us show up on Google.”
    </blockquote>

    <div class="screenshots-vertical">
      <img src={dacthumbnail} alt="Desktop view of food truck site"/>
      <img src={dacthumbnail} alt="Mobile view of food truck site"/>
    </div>

    <a href="#" class="see-live-btn">🔗 See Live</a>
  </div>

  <div class="spotlight-vertical">
    <h2>📍 Client Spotlight: A Local Food Truck Expanding to Catering</h2>
    
    <p><strong>🛠️ What They Needed:</strong> A modern site to highlight their catering services and collect event requests</p>
    <p><strong>🚀 What We Delivered:</strong> A bold, scroll-friendly site with a contact form connected to Google Sheets</p>
    <p><strong>📈 Impact:</strong> Booked 8 catering events in the first 2 weeks</p>
    
    <blockquote>
      💬 “We didn’t even know how to start. They made the site look amazing *and* helped us show up on Google.”
    </blockquote>

    <div class="screenshots-vertical">
      <img src={dacthumbnail} alt="Desktop view of food truck site"/>
      <img src={dacthumbnail} alt="Mobile view of food truck site"/>
    </div>

    <a href="#" class="see-live-btn">🔗 See Live</a>
  </div>
</div> */}





      </div>
    </Section>
  );
}
