function productInCart(cart, sku) {
  return cart.find((product) => product.sku === sku);
}

function updateProductInCart(cart, productIsInCart, quantity, isCart) {
  return cart.map((product) => {
    return product === productIsInCart
      ? {
          sku: product.sku,
          quantity: isCart ? quantity : quantity + product.quantity,
        }
      : product;
  });
}

export {
  productInCart,
  updateProductInCart,
};
