// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../src/assets/imgs/golbi_logo.png";
import "../assets/css/style.css";
import eyes from "../assets/imgs/golbi_404_eyes.png";

const NotFound = () => {
  return (
    <div className="not-found-section">
    <Link to="/" className="not-found-logo-link">
            <div className="not-found-logo-container">
              <img className="not-found-logo" src={mainLogo} alt="Golbi Logo" />
              <div className="not-found-logo-arch-right"></div>
              <div className="not-found-logo-arch-left"></div>
            </div>
          </Link>
        <div className="not-found-header-container">
          <p className="not-found-number">4</p>
          <img src={eyes}  className="not-found-eyes"
          alt="golbi eyes" />
          <p className="not-found-number">4!</p>
        </div>
        <p className="not-found-header">PAGE NOT FOUND</p>
  
        <p className="not-found-subhead poppins">
          Uh oh... looks like you took a wrong turn.
        </p>
        <Link to="/">
          <button
              className="button-pushable pricing-schedule-btn">
              <span className="button-shadow"></span>
              <span className="button-accent-edge"></span>
              <span className="button-accent-front text">Back Home</span>
          </button>
        </Link>
    </div>
  );
};

export default NotFound;
