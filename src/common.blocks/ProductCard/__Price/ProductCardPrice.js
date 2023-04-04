import "./ProductCardPrice.css";

const ProductCardPrice = ({ product }) => (
  <h2 className="Product-Card__Price">£{product.price}</h2>
);

export default ProductCardPrice;
