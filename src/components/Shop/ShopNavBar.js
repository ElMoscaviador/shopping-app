import { React, useState } from "react";
import CategoryBubble from "./CategoryBubble";

const ShopNavBar = () => {
  const [categories, setCategories] = useState([
    { direction: "left", name: "sonics", status: "unfocused" },
    { direction: "center", name: "costumes", status: "focused" },
    { direction: "right", name: "figures", status: "unfocused" },
  ]);
  const [touchHistory, setTouchHistory] = useState({});

  function animateCategoriesPositionsInDOM() {
    fetchDOMCategories().forEach((category) => {
      category.classList.remove(`swipe-${isLeftSwipe() ? "right" : "left"}`);
      category.classList.add(`swipe-${isLeftSwipe() ? "left" : "right"}`);
    });
  }

  function assignCurrentTouchAsEndTouch(currentTouch) {
    setTouchHistory((prev) => {
      return {
        ...prev,
        end: currentTouch,
      };
    });
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
    const isMoreThan50 = getSwipeDistance() > 50;
    return isMoreThan50;
  }

  function onDragEnd() {
    resetCategoryPositionsinDOM();
    updateCategoryPositionsInState();
  }

  function onDragOver(event) {
    if (touchHistory.start) animateCategoriesPositionsInDOM();
    assignCurrentTouchAsEndTouch(event.clientX);
  }

  function onPointerDown(event) {
    setTouchHistory({ start: event.clientX, end: null });
  }

  function onTouchEnd() {
    if (!touchHistory.start || !touchHistory.end) return;
    resetCategoryPositionsinDOM();
    updateCategoryPositionsInState();
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

  function updateCategoryPositionsInState() {
    const leftSwipeCheck = isLeftSwipe();

    setCategories((previousCategories) => [
      {
        ...previousCategories[0],
        name: previousCategories[leftSwipeCheck ? 1 : 2].name,
      },
      {
        ...previousCategories[1],
        name: previousCategories[leftSwipeCheck ? 2 : 0].name,
      },
      {
        ...previousCategories[2],
        name: previousCategories[leftSwipeCheck ? 0 : 1].name,
      },
    ]);
  }

  return (
    <nav aria-label="shop navbar" className="shop__navbar">
      <ul aria-label="shop navbar list" className="shop__navbar__list">
        {categories.map((category) => {
          return (
            <CategoryBubble
              category={category}
              key={category.name}
              touchEvents={{
                onTouchEnd,
                onTouchMove,
                onTouchStart,
                onPointerDown,
                onDragOver,
                onDragEnd,
              }}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default ShopNavBar;
