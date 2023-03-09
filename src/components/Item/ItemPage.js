import { useLoaderData, useLocation } from "react-router-dom";

const loader = ({ params }) => {
  return params;
};

const ItemPage = () => {
  const itemData = useLocation().state;
  const { categoryId } = useLoaderData();
  return (
    <main
      className="item-page"
      aria-label="item-page"
      data-testid={`item-page-${categoryId}`}
    >
      <h1 className="item-page__name" aria-label="item-page-name">
        {itemData.name}
      </h1>
      <img
        className="item-page__image"
        aria-label="item-page-image"
        alt="product"
        src={itemData.img.page[0]}
      />
      <p
        className="item-page__price"
        aria-label="item-page-price"
        data-testid="item-page-price"
      >
        ${itemData.price}
      </p>
      <button className="item-page__add-to-cart" aria-label="add-to-cart">
        Add to cart
      </button>
      <button className="item-page__buy-now" aria-label="buy-now">
        Buy now
      </button>
      <input
        type="text"
        className="item-page__quantity-input"
        aria-label="quantity"
      />
      <button className="item-page__increment" aria-label="increment">
        Buy now
      </button>
      <button className="item-page__decrement" aria-label="decrement">
        Buy now
      </button>
    </main>
  );
};

export default ItemPage;
export { loader };
