import { itemInCart, updateItemInCart } from "../../handlers";

const loader = ({ params }) => Number(params.sku);

const fetchQuantity = (form) => Number(new FormData(form).get("quantity"));

const sendItemToCart = (event, sku, { cart, setCart }) => {
  const itemIsInCart = itemInCart(cart, sku);
  const quantity = fetchQuantity(event.target);
  if (itemIsInCart) {
    const cartWithUpdatedItem = updateItemInCart(cart, itemIsInCart, quantity);
    setCart(cartWithUpdatedItem);
  } else {
    setCart((previousCart) => [
      ...previousCart,
      { sku, quantity: fetchQuantity(event.target) },
    ]);
  }
};

export default sendItemToCart;
export { loader };
