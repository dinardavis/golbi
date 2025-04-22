"use client";

import React from "react";
import MobileNav from "./MobileNav";
import { MdOutlineRocket } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { debounce } from "./utilities/helpers";

export default function Navbar(props) {
  const [prevScroll, setPrevScroll] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [mobileNavState, setMobileNavState] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function handleToggle() {
    setMobileNavState((prevNav) => !prevNav);
  }

  function closeMobileNav() {
    setMobileNavState(false);
  }

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

  React.useEffect(() => {
    if (scrollTop === 0) {
      setRocketShake(false);
    }
  }, [scrollTop]);

  function shake() {
    if (scrollTop !== 0) {
      setRocketShake(true);
    }
  }

  return (
    <>
      <nav className="nav-container">
        <div className="main-nav">
          {/* <div className="nav-line-left"></div> */}
          <span className="nav-dark-edge"></span>
          <a href="#about" className="nav-link main-link">
            Why Golbi?
          </a>
          <a href="#work" className="nav-link main-link">
            Work
          </a>
          <a href="#pricing" className="nav-link main-link">
            Pricing
          </a>
          <a href="#faqs" className="nav-link main-link">
            FAQs
          </a>
          <a
            href="#top"
            className="nav-link main-link top-icon"
            onClick={shake}
          >
            <MdKeyboardDoubleArrowUp className="up-arrow-icon" />
          </a>
          {/* <div className="nav-line-right"></div> */}
        </div>
      </nav>

      <MobileNav
        closeMobileNav={closeMobileNav}
        mobileNavState={mobileNavState}
        handleToggle={handleToggle}
      />
    </>
  );
}
