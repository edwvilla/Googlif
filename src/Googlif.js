import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./components/GifGrid";

const Googlif = () => {
  const [categories, setCategories] = useState(["Fairy tail"]);

  return (
    <>
      <h2>Googlif</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ol>
    </>
  );
};

export default Googlif;
