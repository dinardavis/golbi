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

  useEffect(() => {
    let timeout;
    if (hovered) {
      timeout = setTimeout(() => {
        setDelayedHover(true);
      }, 500);
    } else {
      setDelayedHover(false);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [hovered]);


  const textContainerRef = useRef(null);

const handleMouseEnter = () => {
  setHovered(true);
};

const handleMouseLeave = () => {
  setHovered(false);

  if (textContainerRef.current) {
    textContainerRef.current.scrollTop = 0;
  }
};


  return (
<div
  className={`case-study-card ${alignment === "right" ? "reverse" : ""} ${delayedHover ? "hovered" : ""}`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
   {/* <div className="case-study-container-overlay">
      </div> */}

  <div className="case-study-inner">
    {/* Text section */}
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
      
      


      <img
        src={thumbnail}
        className="case-study-hero-img"
        alt="case study thumbnail"
      />
    </div>
    </div>
  );
}
