import "./CategoriesNavPicture.css";
import "./--direction/CategoriesNavPicture--direction.css";
import "./--status/CategoriesNavPicture--status.css";
import "./--direction--swipe/CategoriesNavPicture--direction--swipe.css";

const CategoriesNavPicture = ({ category }) => (
  <img
    alt={`${category.name}`}
    className={`Categories-Nav__Picture Categories-Nav__Picture--status--${category.status} Categories-Nav__Picture--name--${category.name} Categories-Nav__Picture--direction--${category.direction}`}
    data-category={category.name}
    name={category.name}
    src={require(`./assets/${category.name}_${category.status}.png`)}
  />
);

export default CategoriesNavPicture;
