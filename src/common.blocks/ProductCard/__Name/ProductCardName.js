import "./ProductCardName.css";

const ProductCardName = ({ product }) => (
  <span className="Product-Card__Name">{product.name.short}</span>
);

export default ProductCardName;
