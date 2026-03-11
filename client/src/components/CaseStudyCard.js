// components/CaseStudyCard.jsx
import React, { useState, useEffect, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CaseStudyFlag from "./CaseStudyFlag";

export default function CaseStudyCard({
  type,
  thumbnail,
  images: imagesProp,
  flagText,
  industry,
  objective,
  deliverables,
  impact,
  demoSite,
  alignment = "left",
}) {
  const [hovered, setHovered] = useState(false);
  const [delayedHover, setDelayedHover] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const textContainerRef = useRef(null);

  const carouselImages = imagesProp?.length ? imagesProp : [thumbnail];

  const goToPrev = (e) => {
    e.stopPropagation();
    const len = carouselImages.length;
    setCarouselIndex((i) => (i === 0 ? len - 1 : i - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const len = carouselImages.length;
    setCarouselIndex((i) => (i === len - 1 ? 0 : i + 1));
  };

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
      <CaseStudyFlag text={flagText} />
      <div className="case-study-inner">
        <div className="case-study-text-container" ref={textContainerRef}>
          <div className={`case-study-text ${alignment === "right" ? "type-left" : "type-right"}`}>
            <p>{type}</p>
          </div>

          <div className={`case-study-copy-container ${delayedHover ? "show" : ""}`}>
            <div className="demo-button">
              <button
                className="demo-button-pushable"
                onClick={() => window.open(demoSite, "_blank")}
              >
                <span className="demo-button-shadow"></span>
                <span className="demo-button-accent-edge"></span>
                <span className="demo-button-accent-front text">See Live Demo</span>
              </button>
            </div>
            <div className="case-study-copy-carousel">
              <div
                className="case-study-copy-track"
                style={{
                  transform: `translateX(-${(carouselIndex % 3) * (100 / 3)}%)`,
                }}
              >
                <div className="case-study-copy-card">
                  <p className="case-study-copy-item"><span>Industry: </span>{industry}</p>
                  <p className="case-study-copy-item"><span>Objective: </span>{objective}</p>
                </div>
                <div className="case-study-copy-card">
                  <p className="case-study-copy-item"><span>Project Deliverable: </span></p>
                  <ul className="case-study-copy-list">
                    {deliverables.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-study-copy-card">
                  <p className="case-study-copy-item"><span>Impact: </span>{impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="case-study-hero-img-container">
          <div className="case-study-container-overlay"></div>
          <div
            className="case-study-carousel-track"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {carouselImages.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                className="case-study-hero-img"
                alt="case study thumbnail"
              />
            ))}
          </div>
          <button
            type="button"
            className="case-study-carousel-arrow case-study-carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <IoChevronBack className="case-study-carousel-arrow-icon" />
          </button>
          <button
            type="button"
            className="case-study-carousel-arrow case-study-carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next image"
          >
            <IoChevronForward className="case-study-carousel-arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
