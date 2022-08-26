import React, { useState } from "react";

export const AddCategory2 = ({ onNewCategory }) => {

  // funcionamiento del input 
  const [inputValue, setinputValue] = useState("");
  const onInputChange = (e) => {
    const value = e.target.value;
    setinputValue(value);
  };

  // emitir valores hacia el componente padre
  const onSubmit = (e) => {
    e.preventDefault(); // evita la recarga del navegador
    if (inputValue.trim().length <= 1) return;
    // emite un evento hacia el componente padre
    // el valor de (event) = inputValue.trim()
    onNewCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    // al presiona enter se dispara la f(x) onSubmit()
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="add item"
        value={inputValue} // data-binding
        onChange={onInputChange}
      />
    </form>
  );
};
