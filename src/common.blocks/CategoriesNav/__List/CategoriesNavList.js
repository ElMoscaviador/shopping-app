import "./CategoriesNavList.css";
import { React, useState } from "react";
import CategoriesNavElement from "../__Element/CategoriesNavElement";

const CategoriesNavList = () => {
  const [categories, setCategories] = useState([
    { direction: "left", name: "sonics", status: "unfocused" },
    { direction: "center", name: "costumes", status: "focused" },
    { direction: "right", name: "figures", status: "unfocused" },
  ]);

  return (
    <ul className="Categories-Nav__List">
      {categories.map((category) => (
        <CategoriesNavElement
          category={category}
          categoriesState={{ categories, setCategories }}
          key={category.name}
        />
      ))}
    </ul>
  );
};

export default CategoriesNavList;
