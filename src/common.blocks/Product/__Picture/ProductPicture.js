const ProductPicture = ({ product }) => (
  <img
    aria-label={`${product.name}`}
    className={`Product__Picture Product__Picture--sku--${product.sku}`}
    src={require(`./assets/${product.sku}.png`)}
  />
);

export default ProductPicture;
