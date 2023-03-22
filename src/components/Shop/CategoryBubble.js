import { NavLink } from "react-router-dom";

const CategoryBubble = ({ category, touchEvents }) => {
  const { onTouchEnd, onTouchMove, onTouchStart } = touchEvents;
  return (
    <li
      aria-label="shop navbar link-group"
      className={`shop__navbar__link-group ${category.name}`}
    >
      <NavLink
        aria-label="shop navbar link"
        className={`shop__navbar__link ${category.name}`}
        to={`/shop/${category.name}`}
      >
        <img
          alt={`category-bubble ${category.name}`}
          aria-label="category-bubble"
          className={`category-bubble ${category.status} ${category.name} ${category.direction}`}
          data-category={category.name}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
          src={require(`../../assets/shop/${category.name}_${category.status}.png`)}
        />
      </NavLink>
    </li>
  );
};

export default CategoryBubble;
