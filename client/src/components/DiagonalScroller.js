import React from "react";
import dacthumbnail from "../assets/imgs/dac_thumbnail.png"
import elowen from "../assets/imgs/elowen_thumbnail.png"
import keystone from "../assets/imgs/keystone_thumbnail.png"
import stratuspoint from "../assets/imgs/stratuspoint_thumbnail.png"
import donutmissit from "../assets/imgs/donutmissit_thumbnail.png"

const images = [
  dacthumbnail,
  elowen,
  keystone,
  stratuspoint,
  donutmissit
];

export default function DiagonalScroller() {
  const repeatedImages = [...images, ...images]; // duplicate for looping

  return (
    <div className="diagonal-scroll-wrapper">
      <div className="diagonal-scroll-mask">
        <div className="diagonal-scroll-track">
          {repeatedImages.map((src, index) => (
            <img src={src} alt={`scroll-img-${index}`} className="diagonal-img" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
