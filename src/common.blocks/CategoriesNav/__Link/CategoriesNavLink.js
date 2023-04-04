import { useState } from "react";
import { NavLink } from "react-router-dom";
import { animateCategories, assignCoordinatesDynamically } from "../utils";

const CategoriesNavLink = ({ category, categoriesState, children }) => {
  const [coordinates, setCoordinates] = useState({
    original: null,
    latest: null,
  });

  function getPointerEvents() {
    return [
      "onMouseDown",
      "onTouchStart",
      "onDragOver",
      "onTouchMove",
      "onDragEnd",
      "onTouchEnd",
    ].reduce((collection, pointerEvent, index) => {
      collection[pointerEvent] =
        index === 0 || index === 1
          ? assignCoordinatesDynamically.bind(null, false, setCoordinates)
          : animateCategories.bind(null, categoriesState, {
              coordinates,
              setCoordinates,
            });
      return collection;
    }, {});
  }

  return (
    <NavLink
      aria-label={`Open the ${category.name} category`}
      className="Categories-Nav__Link"
      to={`/shop/${category.name}/?page=1`}
      {...getPointerEvents()}
    >
      {children}
    </NavLink>
  );
};

export default CategoriesNavLink;
