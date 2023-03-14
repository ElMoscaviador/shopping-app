import { Link, useOutletContext } from "react-router-dom";

const ItemThumbnail = ({ sku }) => {
  const { fetchItems } = useOutletContext();
  const currentItemData = fetchItems("sku", sku);

  const { category, name, price, img } = currentItemData;

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
          src={img.thumbnail}
        />
      </div>
      <Link
        to={`/shop/${category}/${sku}`}
        className="item-thumbnail__name"
        aria-label="thumbnail-name"
      >
        <h3>{name}</h3>
      </Link>
      <p
        data-testid="thumbnail-price"
        className="item-thumbnail__price"
        aria-label="thumbnail-price"
      >
        ${parseFloat(price).toFixed(2)}
      </p>
    </div>
  );
};

export default ItemThumbnail;
