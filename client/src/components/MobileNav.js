import React from "react";
import navLogo from "../assets/imgs/golbi_logo.png";

export default function MobileNav(props) {
  if (props.mobileNavState) {
    document.body.classList.add("fixed-position");
  } else {
    document.body.classList.remove("fixed-position");
  }

  return (
    <div className="mobile-nav">
      <div className="mobile-logo-container">
        <a href="#top" onClick={props.closeMobileNav}>
          <img src={navLogo} width={100} alt="Golbi Logo" />
        </a>

        <div className="hamburger" onClick={props.handleToggle}>
          <div
            className={`burger-lines ${
              props.mobileNavState ? "animate-burger" : ""
            }`}
          ></div>
          <div
            className={`burger-lines ${
              props.mobileNavState ? "animate-burger" : ""
            }`}
          ></div>
          <div
            className={`burger-lines ${
              props.mobileNavState ? "animate-burger" : ""
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`mobile-nav-container ${
          props.mobileNavState ? "show-mobile-nav" : ""
        }`}
        onClick={props.handleToggle}
      >
        <a href="#about" className="mobile-link">
          Why Golbi?
        </a>
        <a href="#work" className="mobile-link">
          The Work
        </a>
        <a href="#pricing" className="mobile-link">
          Pricing
        </a>
        <a href="#faqs" className="mobile-link">
          FAQs
        </a>
        {/* <a href="#login" className="mobile-link nav-link login">Login</a> */}
      </div>
    </div>
  );
}
