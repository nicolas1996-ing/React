import React from "react";

export const GifItem = ({ image }) => {
  return (
    <div className="card">
      <img className="img-grid" src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};
