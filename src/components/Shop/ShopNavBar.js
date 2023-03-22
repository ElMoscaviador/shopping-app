import { React, useState } from "react";
import CategoryBubble from "./CategoryBubble";

const ShopNavBar = () => {
  const [categories, setCategories] = useState([
    { direction: "left", name: "sonic", status: "unfocused" },
    { direction: "center", name: "costume", status: "focused" },
    { direction: "right", name: "figure", status: "unfocused" },
  ]);
  const [touchHistory, setTouchHistory] = useState({});

  function animateCategoriesPositionsInDOM() {
    fetchDOMCategories().forEach((category) => {
      category.classList.remove(`swipe-${isLeftSwipe() ? "right" : "left"}`);
      category.classList.add(`swipe-${isLeftSwipe() ? "left" : "right"}`);
    });
  }

  function assignCurrentTouchAsEndTouch(currentTouch) {
    setTouchHistory((prev) => ({
      ...prev,
      end: currentTouch,
    }));
  }

  function fetchDOMCategories() {
    return categories.map((category) =>
      document.querySelector(`[data-category=${category.name}`)
    );
  }

  function getSwipeDistance() {
    return touchHistory.start - touchHistory.end;
  }

  function isLeftSwipe() {
    return getSwipeDistance() > 50;
  }

  function onTouchEnd() {
    if (!touchHistory.start || !touchHistory.end) return;
    resetCategoryPositionsinDOM();
    updateCategoryPositionsinState();
  }

  function onTouchMove(event) {
    animateCategoriesPositionsInDOM();
    assignCurrentTouchAsEndTouch(event.targetTouches[0].clientX);
  }

  function onTouchStart(event) {
    setFirstTouchPosition(event.targetTouches[0].clientX);
  }

  function resetCategoryPositionsinDOM() {
    fetchDOMCategories().forEach((category) => {
      category.classList.remove("swipe-left");
      category.classList.remove("swipe-right");
    });
  }

  function setFirstTouchPosition(firstTouch) {
    setTouchHistory({ start: firstTouch, end: null });
  }

  function updateCategoryPositionsinState() {
    setCategories((previousCategories) => [
      {
        ...previousCategories[0],
        name: previousCategories[isLeftSwipe() ? 1 : 2].name,
      },
      {
        ...previousCategories[1],
        name: previousCategories[isLeftSwipe() ? 2 : 0].name,
      },
      {
        ...previousCategories[2],
        name: previousCategories[isLeftSwipe() ? 0 : 1].name,
      },
    ]);
  }

  return (
    <nav aria-label="shop navbar" className="shop__navbar">
      <ul aria-label="shop navbar list" className="shop__navbar__list">
        {categories.map((category) => (
          <CategoryBubble
            category={category}
            key={category.name}
            touchEvents={{ onTouchEnd, onTouchMove, onTouchStart }}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ShopNavBar