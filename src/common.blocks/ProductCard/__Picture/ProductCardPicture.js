import "./ProductCardPicture.css";
import "./--sku/ProductCardPicture--sku.css";

const ProductCardPicture = ({ product }) => (
  <img
    alt={`${product.name.short}`}
    className={`Product-Card__Picture Product-Card__Picture--sku--${product.sku}`}
    src={require(`./assets/${product.sku}.png`)}
  />
);

export default ProductCardPicture;
