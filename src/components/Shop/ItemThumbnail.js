import { NavLink } from "react-router-dom";

const ItemThumbnail = ({ item }) => {
  return (
    <NavLink
      aria-label="item thumbnail wrapper"
      className="item-thumbnail__wrapper"
      to={`${item.sku}`}
    >
      <div className="item-thumbnail__front" />
      <img
        alt="item thumbnail"
        className={`item-thumbnail ${item.sku}`}
        src={require(`../../assets/products/thumbnail/${item.sku}.png`)}
      />
      <div className="item-thumbnail__transparency-band ">
        <span aria-label="item thumbnail name" className="item-thumbnail__name">
          {item.name.short}
        </span>
        <span
          aria-label="item thumbnail price"
          className="item-thumbnail__price"
        >
          £{item.price}
        </span>
      </div>
      <div aria-label="item thumbnail info" className="item-thumbnail__info">
        <span aria-label="item thumbnail name" className="item-thumbnail__name">
          {item.name.short}
        </span>
        <span
          aria-label="item thumbnail price"
          className="item-thumbnail__price"
        >
          £{item.price}
        </span>
      </div>
      <div className="item-thumbnail__back" />
    </NavLink>
  );
};

export default ItemThumbnail;
