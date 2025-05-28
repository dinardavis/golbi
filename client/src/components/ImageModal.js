import React, { useEffect, useState } from 'react';
import '../assets/css/mosaicandmodal.css';

function ImageModal({ children, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // match CSS transition duration
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('image-modal-overlay')) {
      handleClose();
    }
  };

  return (
    <div
      className={`image-modal-overlay ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleClickOutside}
    >
     <button className="image-modal-close" onClick={handleClose}>
          ×
        </button>
      <div className={`image-modal-content ${isVisible ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

export default ImageModal;
