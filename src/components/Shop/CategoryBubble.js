import { NavLink } from "react-router-dom";

const CategoryBubble = ({ category, touchEvents }) => {
  const {
    onDragEnd,
    onDragOver,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    onPointerDown,
  } = touchEvents;

  return (
    <li
      aria-label="shop navbar link-group"
      className={`shop__navbar__link-group ${category.name}`}
    >
      <NavLink
        aria-label="shop navbar link"
        className={`shop__navbar__link ${category.name}`}
        to={`/shop/${category.name}/?page=1`}
        onDragEnd={onDragEnd}
      >
        <img
          draggable="false"
          alt={`category-bubble ${category.name}`}
          aria-label="category-bubble"
          className={`category-bubble ${category.status} ${category.name} ${category.direction}`}
          data-category={category.name}
          name={category.name}
          onDragOver={onDragOver}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
          onPointerDown={onPointerDown}
          src={require(`../../assets/shop/${category.name}_${category.status}.png`)}
        />
      </NavLink>
    </li>
  );
};

export default CategoryBubble;
