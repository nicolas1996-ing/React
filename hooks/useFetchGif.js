import { useEffect, useState } from "react";
import { getGifs } from "../src/helpers/getGifs";

export const useFetchGif = (category) => {
  // variable del hook
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let gifs = [];
  const listGifs = async () => {
    gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  };

  // punto de entrada del hook, cuando se instancia esta es la primera f(x) que ejecuta
  useEffect(() => {
    listGifs(); // llamado de la f(x)
  }, []);

  return {
    images,
    isLoading,
  };
};
