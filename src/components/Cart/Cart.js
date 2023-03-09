const Cart = () => {
  return (
    <main className="cart" aria-label="cart">
      <h1 className="cart__title" aria-label="cart-title">
        Your cart
      </h1>
      <p
        className="cart__empty-placeholder"
        aria-label="cart-empty-placeholder"
        role="generic"
      >
        Your cart is empty.
      </p>
    </main>
  );
};

export default Cart;
