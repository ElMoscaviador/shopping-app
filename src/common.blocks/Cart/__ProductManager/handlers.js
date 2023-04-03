import {
  productInCart,
  updateProductInCart,
} from "../../../common.shared/handlers";

function calculatePrice(price, quantity) {
  return Math.round(price * quantity * 100) / 100;
}

function _returnCartCopyWithoutProduct(cart, sku) {
  return cart.filter((product) => product !== productInCart(cart, sku));
}

function updateProductQuantityInCart(sku, setCart, quantity) {
  setCart((previousCart) => {
    if (quantity === 0) {
      const cartWithoutMatchingProduct = _returnCartCopyWithoutProduct(
        previousCart,
        sku
      );
      return [...cartWithoutMatchingProduct];
    } else {
      const productIsInCart = productInCart(previousCart, sku);
      const cartWithUpdatedProduct = updateProductInCart(
        previousCart,
        productIsInCart,
        quantity,
        true
      );
      return [...cartWithUpdatedProduct];
    }
  });
}

export { calculatePrice, updateProductQuantityInCart };
