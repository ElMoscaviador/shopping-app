import {
  productInCart,
  updateProductInCart,
} from "../../../common.shared/handlers";

function _fetchQuantity(form) {
  return Number(new FormData(form).get("quantity"));
}

function sendProductToCart(event, sku, { cart, setCart }) {
  const productIsInCart = productInCart(cart, sku);
  const quantity = _fetchQuantity(event.target);
  if (productIsInCart) {
    const cartWithUpdatedProduct = updateProductInCart(
      cart,
      productIsInCart,
      quantity
    );
    setCart(cartWithUpdatedProduct);
  } else {
    setCart((previousCart) => [
      ...previousCart,
      { sku, quantity: _fetchQuantity(event.target) },
    ]);
  }
}

export default sendProductToCart;
