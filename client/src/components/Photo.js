import React from 'react';

const Photo = React.memo(({ src, alt, onClick, style }) => {
  return (
    <div className="photo" onClick={onClick} style={style}>
      <img src={src} alt={alt} style={{ width: '100%', objectFit: 'cover' }} />
    </div>
  );
});

export default Photo;
