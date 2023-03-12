import { useLoaderData, useOutletContext } from "react-router-dom";
import { data } from "../Shop/data";

const loader = ({ params }) => {
  const { categoryId, productId } = params;
  return { categoryId, productId };
};

const ItemPage = () => {
  const { categoryId, productId } = useLoaderData();
  const currentData = data.itemsData[categoryId].find(
    (item) => item.name === productId
  );
  const [cart, setCart] = useOutletContext()["cartState"];

  function fetchDataInForm(form, query) {
    return new FormData(form).get(query);
  }

  function itemInCart() {
    return cart.find((item) => item.name === currentData.name);
  }

  function sendItemToCart(event) {
    event.preventDefault();
    const itemAlreadyInCart = itemInCart();
    const quantity = Number(fetchDataInForm(event.target, "quantity"));
    const withoutItemToUpdate = !!itemAlreadyInCart
      ? cart.filter((item) => item.name !== itemAlreadyInCart.name)
      : [];
    setCart((previousCart) => [
      ...(!!itemAlreadyInCart ? withoutItemToUpdate : previousCart),
      {
        category: categoryId,
        name: currentData.name,
        quantity: !!itemAlreadyInCart
          ? itemAlreadyInCart.quantity + quantity
          : quantity,
      },
    ]);
  }

  return (
    <main
      className="item-page"
      aria-label="item-page"
      data-testid={`item-page-${categoryId}`}
    >
      <h1 className="item-page__name" aria-label="item-page-name">
        {currentData.name}
      </h1>
      <img
        className="item-page__image"
        aria-label="item-page-image"
        alt="product"
        src={currentData.img.page[0]}
      />
      <p
        className="item-page__price"
        aria-label="item-page-price"
        data-testid="item-page-price"
      >
        ${currentData.price}
      </p>
      <form
        className="item-page__form"
        aria-label="item-page-form"
        onSubmit={sendItemToCart}
      >
        <input
          min={1}
          type="number"
          className="quantity-input"
          aria-label="quantity"
          name="quantity"
          defaultValue={1}
        />
        <button
          className="item-page__add-to-cart"
          aria-label="add-to-cart"
          type="submit"
        >
          Add to cart
        </button>
        <button className="item-page__buy-now" aria-label="buy-now">
          Buy now
        </button>
      </form>
    </main>
  );
};

export default ItemPage;
export { loader };
