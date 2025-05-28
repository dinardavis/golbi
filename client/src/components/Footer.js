"use client";

import React from "react";
import MobileNav from "./MobileNav";
import { debounce } from "./utilities/helpers";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [prevScroll, setPrevScroll] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [mobileNavState, setMobileNavState] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleScroll = debounce(
    () => {
      setScrollTop(window.pageYOffset);
    },
    10,
    10
  );

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, visible, handleScroll]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    if (windowWidth > 800) {
      setMobileNavState(false);
    }
  }, [windowWidth]);

  const [rocketShake, setRocketShake] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className="footer-container">
        <div className="footer-row-2">
          <p href="" className="footer-desc">
            Contact:
          </p>
          <a  
            href="mailto:support@golbi.co?subject=Greetings%20Golbi%20support!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            support@golbi.co
          </a>
          <a href="tel:+15109826565" className="footer-link">
            +1.510.982.6565
          </a>
        </div>
        <div className="footer-row-1">
          <a href="#pricing" className="footer-link">
            Pricing
          </a>
          <a href="https://billing.stripe.com/p/login/test_bJebJ3ezL8wd4nD22j2cg00" target="_blank" className="footer-link">
            Client login
          </a>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div> 
      </div>
    </>
  );
}
