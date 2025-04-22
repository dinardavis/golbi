import React from "react";
import mainLogo from "../assets/imgs/golbi_logo.png";
import Lottie from "lottie-react";
import wink from "../lotties/wink.json";

export default function BottomCTA() {
  return (
    <div className="bottom-cta-container">
      <div className="bottom-cta-content">
        <h1 className="bottom-cta-header">
          Still not convinced that <span>Golbi</span> is right for you?
        </h1>
        <div className="bottom-cta-subhead-container">
          <p className="bottom-cta-subhead">(Tough crowd.</p>
          <Lottie
            className="bottom-cta-lottie-wink"
            animationData={wink}
            loop={true}
          />
          <p className="bottom-cta-subhead">)</p>
        </div>
        <p className="bottom-cta-copy">
          That&apos;s ok, we like a challenge! Just reach out, and we&apos;re
          happy to answer any other questions that you have.
        </p>
        <button className="button-pushable bottom-cta-button">
          <span className="button-shadow"></span>
          <span className="button-accent-edge"></span>
          <span className="button-accent-front text">Book a call</span>
        </button>

        <div className="bottom-cta-logo-container">
          <img className="bottom-cta-logo" src={mainLogo} alt="Golbi Logo" />
          <p className="logo-trademark">TM</p>
        </div>
      </div>
    </div>
  );
}
