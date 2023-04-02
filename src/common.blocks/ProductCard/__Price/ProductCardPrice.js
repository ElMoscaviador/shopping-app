import "./ProductCardPrice.css";

const ProductCardPrice = ({ product }) => (
  <span className="Product-Card__Price">£{product.price}</span>
);

export default ProductCardPrice;
