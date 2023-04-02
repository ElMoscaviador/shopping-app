function addBEMClasses(classes, namespace) {
  const modifiers =
    classes?.modifiers
      ?.filter((m) => m)
      .map((modifier) => `${namespace}${modifier}`) || [];
  const blocks =
    classes?.blocks?.filter((b) => b).map((block) => `${block}${namespace}`) ||
    [];

  return [...modifiers, ...blocks].join(" ") || [];
}

function calculatePrice(price, quantity) {
  return Math.round(price * quantity * 100) / 100;
}

function fetchQuantity(form) {
  return Number(new FormData(form).get("quantity"));
}

function productInCart(cart, sku) {
  return cart.find((product) => product.sku === sku);
}

function returnCartCopyWithoutProduct(cart, sku) {
  return cart.filter((product) => product !== productInCart(cart, sku));
}

function sendProductToCart(event, sku, { cart, setCart }) {
  const productIsInCart = productInCart(cart, sku);
  const quantity = fetchQuantity(event.target);
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
      { sku, quantity: fetchQuantity(event.target) },
    ]);
  }
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

function updateProductQuantityInCart(quantity, sku, setCart) {
  setCart((previousCart) => {
    if (quantity === 0) {
      const cartWithoutMatchingProduct = returnCartCopyWithoutProduct(
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

export {
  addBEMClasses,
  calculatePrice,
  productInCart,
  returnCartCopyWithoutProduct,
  sendProductToCart,
  updateProductInCart,
  updateProductQuantityInCart,
};
