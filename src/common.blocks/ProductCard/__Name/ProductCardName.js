import "./ProductCardName.css";

const ProductCardName = ({ product }) => (
  <h1 aria-label={product.name.full} className="Product-Card__Name">{product.name.short}</h1>
);

export default ProductCardName;
