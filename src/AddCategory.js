import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => setInputValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) return;

    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
