import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  // cambios en el input
  // el valor del input está siendo supervisado por el hook
  const onInputChange = (e) => {
    const value = e.target.value;
    setinputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // evita la recarga del navegador
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]); // modificar hook del componente padre
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="add item"
        value={inputValue} // data-binding
        // onChange={(e) => onInputChange(e)}
        onChange={onInputChange}
      />
    </form>
  );
};
