import React, { useState, useMemo } from 'react';
import ImageModal from './ImageModal';
import Photo from './Photo';
import '../assets/css/mosaicandmodal.css';

import donutSite from '../assets/imgs/donutmissit_thumbnail.png';
import dacSite from '../assets/imgs/dac_thumbnail.png';
import suitSite from '../assets/imgs/suitsupply_thumbnail.png';
import spaceSite from '../assets/imgs/spacexclone_thumbnail.png';
import travelSite from '../assets/imgs/travel_thumbnail.png';
import yourSite from '../assets/imgs/yourproject_thumbnail.png';
import keystone from '../assets/imgs/keystone_thumbnail.png';
import stratuspoint from '../assets/imgs/stratuspoint_thumbnail.png';
import toyd from '../assets/imgs/toyd_thumbnail.png';

const rawImages = [
  keystone,
  stratuspoint,
  toyd,
  donutSite,
  dacSite,
  suitSite,
  spaceSite,
  stratuspoint,
  yourSite,
];

function ImageMosaic() {
  const [selectedImage, setSelectedImage] = useState(null);

  const columnCount = 3;

  // Generate image objects with random "weight"
  const imagesWithWeights = useMemo(() => {
    return rawImages.map((src) => ({
      src,
      weight: 1 + Math.random(), // random "importance" between 1–2
    }));
  }, []);

  // Distribute into columns and normalize weights to fill container
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    imagesWithWeights.forEach((img, i) => {
      cols[i % columnCount].push(img);
    });

    // Normalize weights so total height == 100% per column
    return cols.map((col) => {
      const totalWeight = col.reduce((sum, img) => sum + img.weight, 0);
      return col.map((img) => ({
        ...img,
        heightPercent: (img.weight / totalWeight) * 100,
      }));
    });
  }, [imagesWithWeights]);

  return (
    <div className="mosaic-wrapper">
      <div className="mosaic-container">
        {columns.map((columnImages, colIndex) => (
          <div className="mosaic-column" key={colIndex}>
            {columnImages.map((imgObj, idx) => (
              <Photo
                key={idx}
                src={imgObj.src}
                alt={`Photo ${colIndex}-${idx}`}
                onClick={() => setSelectedImage(imgObj.src)}
                style={{ height: `${imgObj.heightPercent}%` }}
              />
            ))}
          </div>
        ))}
        {selectedImage && (
          <ImageModal onClose={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="image-modal-image"
            />
          </ImageModal>
        )}
      </div>
    </div>
  );
}

export default ImageMosaic;
