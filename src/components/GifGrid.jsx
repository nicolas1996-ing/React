import React from "react";
import { useFetchGif } from "../../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  // hook personalizado
  const { images, isLoading } = useFetchGif(category);
  // console.log(images, isLoading)

  return (
    <>
      <h3>{category}</h3>

      {/* {isLoading ? <h4> 'cargando gifs...'</h4> : null} */}
      {isLoading && <h4> 'cargando gifs...'</h4>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {};
