// components/CaseStudyCard.jsx
import React, { useState, useEffect, useRef } from "react";

export default function CaseStudyCard({
  type,
  thumbnail,
  industry,
  objective,
  deliverables,
  impact,
  alignment = "left",
}) {
  const [hovered, setHovered] = useState(false);
  const [delayedHover, setDelayedHover] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (hovered) {
      timeout = setTimeout(() => {
        setDelayedHover(true);
      }, 500);
    } else {
      setDelayedHover(false);

      // Reset scroll AFTER hiding content
      setTimeout(() => {
        if (textContainerRef.current) {
          textContainerRef.current.scrollTop = 0;
        }
      }, 0);

      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`case-study-card ${alignment === "right" ? "reverse" : ""} ${delayedHover ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="case-study-inner">
        <div className="case-study-text-container" ref={textContainerRef}>
          <div className={`case-study-text ${alignment === "right" ? "type-left" : "type-right"}`}>
            <p>{type}</p>
          </div>

          <div className={`case-study-copy-container ${delayedHover ? "show" : ""}`}>
            <p className="case-study-copy-item"><span>Industry: </span>{industry}</p>
            <p className="case-study-copy-item"><span>Objective: </span>{objective}</p>
            <ul className="case-study-copy-item case-study-copy-list">
              <span>Project Deliverable: </span>
              {deliverables.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="case-study-copy-item"><span>Impact: </span>{impact}</p>
            <div className="demo-btn">
              <button className="demo-button-pushable">
                <span className="demo-button-shadow"></span>
                <span className="demo-button-accent-edge"></span>
                <span className="demo-button-accent-front text">See Live Demo</span>
              </button>
            </div>
          </div>
        </div>

        <div className="case-study-hero-img-container">
          <div className="case-study-container-overlay"></div>
          <img
            src={thumbnail}
            className="case-study-hero-img"
            alt="case study thumbnail"
          />
        </div>
      </div>
    </div>
  );
}
