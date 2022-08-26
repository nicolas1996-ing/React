// rafc + enter
// hook: states
// usf : snippet => useState
// rafc: snippet => component

import React, { useState } from "react";

import { AddCategory, AddCategory2, GifGrid } from "./components"; // index.js - componente de barril

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // f(x) que se dispara cuando una nueva categoria es emitida
  const onAddCategory = (newCategory) => {
    if (categories.map((c) => c.toLowerCase()).includes(newCategory)) return; // evitar repetidos
    setCategories([...categories, newCategory]); // actualizar valor del hook
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      {/* forma 1 */}
      {/* 2. input */}
      {/* enviar el hook como argumento al componente hijo */}
      {/* cada que haya un cambio en el estado del hook, éste se verá reflejadoo en el componente padre que maneja esta variable */}
      {/* <AddCategory setCategories={setCategories} /> */}

      {/* forma 2 */}
      {/* onAddCategory se ejecuta cada vez que el hijo envia una prop */}
      <AddCategory2 onNewCategory={(event) => onAddCategory(event)} />

      {/* 3.1 items list */}
      {categories.map((c) => (
        <GifGrid category={c} key={c} />
      ))}
    </>
  );
};
