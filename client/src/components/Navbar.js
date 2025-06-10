"use client";

import React from "react";
import MobileNav from "./MobileNav";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { debounce } from "./utilities/helpers";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

export default function Navbar({
  showModal,
  setShowModal,
  showEmailForm,
  setShowEmailForm,
  email,
  setEmail,
  error,
  setError,
  isSubmitting,
  setIsSubmitting,
  success,
  setSuccess,
}) {
  const [prevScroll, setPrevScroll] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [mobileNavState, setMobileNavState] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const { handleNavigation } = useScrollNavigation();

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
          <span
            className="nav-link main-link"
            onClick={() => handleNavigation("how")}
            style={{ cursor: "pointer" }}
          >
            How To
          </span>
          <span
            className="nav-link main-link"
            onClick={() => handleNavigation("about")}
            style={{ cursor: "pointer" }}
          >
            Why Golbi
          </span>
          <span
            className="nav-link main-link"
            onClick={() => handleNavigation("work")}
            style={{ cursor: "pointer" }}
          >
            Work
          </span>
          <span
            className="nav-link main-link"
            onClick={() => handleNavigation("pricing")}
            style={{ cursor: "pointer" }}
          >
            Pricing
          </span>
          <span
            className="nav-link main-link"
            onClick={() => handleNavigation("faqs")}
            style={{ cursor: "pointer" }}
          >
            FAQs
          </span>
          <span
            className="nav-link main-link"
            onClick={() => {
              setShowModal(true);
              setShowEmailForm(false);
              setError("");
              setSuccess(false);
            }}
            style={{ cursor: "pointer" }}
          >
            Account
          </span>
          <span
            className="nav-link main-link"
            onClick={() => handleNavigation("top")}
            style={{ cursor: "pointer" }}
          >
            <MdKeyboardDoubleArrowUp className="up-arrow-icon" />
          </span>
          {/* <div className="nav-line-right"></div> */}
        </div>
      </nav>

      <MobileNav
        closeMobileNav={closeMobileNav}
        mobileNavState={mobileNavState}
        handleToggle={handleToggle}
        showModal={showModal}
        setShowModal={setShowModal}
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
        email={email}
        setEmail={setEmail}
        error={error}
        setError={setError}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        success={success}
        setSuccess={setSuccess}
      />
    </>
  );
}
