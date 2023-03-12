import { Link } from "react-router-dom";

const ItemThumbnail = ({ categoryId, itemData }) => {
  return (
    <div className="item-thumbnail" aria-label="item-thumbnail">
      <div
        className="item-thumbnail__picture_wrapper"
        aria-label="thumbnail-picture-wrapper"
      >
        <img
          alt="product"
          className="item-thumbnail__picture"
          aria-label="thumbnail-picture"
          src={itemData.img.thumbnail}
        />
      </div>
      <Link
        to={`/shop/${categoryId}/${itemData.name}`}
        className="item-thumbnail__name"
        aria-label="thumbnail-name"
      >
        <h3>{itemData.name}</h3>
      </Link>
      <p
        data-testid="thumbnail-price"
        className="item-thumbnail__price"
        aria-label="thumbnail-price"
      >
        ${itemData.price}
      </p>
    </div>
  );
};

export default ItemThumbnail;
