function addAnimation(category, swipedLeft) {
  category.classList.remove(
    `Categories-Nav__Picture--swipe--${swipedLeft ? "right" : "left"}`
  );
  category.classList.add(
    `Categories-Nav__Picture--swipe--${swipedLeft ? "left" : "right"}`
  );
}

function animateCategories(categoriesState, coordinatesState, event) {
  const { categories, setCategories } = categoriesState;
  const { coordinates, setCoordinates } = coordinatesState;
  const swipeCompleted = event.type === "touchend" || event.type === "dragend";
  toggleCategoriesAnimation(
    categories,
    coordinates,
    swipeCompleted ? "remove" : "add"
  );
  return swipeCompleted
    ? updateCategoriesPosition(coordinates, setCategories)
    : assignCoordinatesDynamically(true, setCoordinates, event);
}

function assignCoordinatesDynamically(isUpdating, setCoordinates, event) {
  const coordinates = fetchCoordinates(event);
  setCoordinates((prev) => ({
    original: isUpdating ? prev.original : coordinates,
    latest: isUpdating ? coordinates : null,
  }));
}

function fetchCoordinates(event) {
  return event.targetTouches?.[0].clientX || event.clientX;
}

function fetchInDOM(categories) {
  return categories.map((category) =>
    document.querySelector(`[data-category=${category.name}`)
  );
}

function isLeftSwipe(coordinates) {
  return coordinates.original - coordinates.latest > 50;
}

function removeAnimation(category) {
  ["left", "right"].forEach((direction) =>
    category.classList.remove(`Categories-Nav__Picture--swipe-${direction}`)
  );
}

function toggleCategoriesAnimation(categories, pointerHistory, action) {
  const swipedLeft = isLeftSwipe(pointerHistory);
  fetchInDOM(categories).forEach((category) =>
    action === "add"
      ? addAnimation(category, swipedLeft)
      : removeAnimation(category)
  );
}

function updateCategoriesPosition(coordinates, setCategories) {
  setCategories((prev) =>
    prev.map((category, i) => ({
      ...category,
      name: prev[
        isLeftSwipe(coordinates)
          ? i === 2
            ? i - 2
            : i + 1
          : i === 0
          ? i + 2
          : i - 1
      ].name,
    }))
  );
}

export {
  animateCategories,
  assignCoordinatesDynamically,
  fetchCoordinates,
  isLeftSwipe,
  toggleCategoriesAnimation,
};
