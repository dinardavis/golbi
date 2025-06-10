import React from "react";
import navLogo from "../assets/imgs/golbi_logo.png";
import MobileLoginBtn from "./MobileLoginBtn";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

export default function MobileNav(props) {
  const { handleNavigation } = useScrollNavigation();

  // Prevent page scrolling when mobile nav is open
  React.useEffect(() => {
    if (props.mobileNavState) {
      document.body.classList.add("fixed-position");
    } else {
      document.body.classList.remove("fixed-position");
    }
  }, [props.mobileNavState]);

  // Logo click scrolls to top only (no toggle)
  const handleLogoClick = () => {
    handleNavigation("top");
  };

  // Nav item click scrolls and closes menu
  const handleNavClick = (sectionId) => {
    handleNavigation(sectionId, props.handleToggle);
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-logo-container">
        <span onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <img src={navLogo} width={100} alt="Golbi Logo" />
        </span>

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
      >
        <span
          className="mobile-link"
          onClick={() => handleNavClick("how")}
          style={{ cursor: "pointer" }}
        >
          How To
        </span>
        <span
          className="mobile-link"
          onClick={() => handleNavClick("about")}
          style={{ cursor: "pointer" }}
        >
          Why Golbi
        </span>
        <span
          className="mobile-link"
          onClick={() => handleNavClick("work")}
          style={{ cursor: "pointer" }}
        >
          Work
        </span>
        <span
          className="mobile-link"
          onClick={() => handleNavClick("pricing")}
          style={{ cursor: "pointer" }}
        >
          Pricing
        </span>
        <span
          className="mobile-link"
          onClick={() => handleNavClick("faqs")}
          style={{ cursor: "pointer" }}
        >
          FAQs
        </span>
        <MobileLoginBtn />
      </div>
    </div>
  );
}
