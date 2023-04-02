import "./ProductShowcase.css";
import ProductData from "../__Data/ProductData";
import ProductForm from "../__Form/ProductForm";

const ProductShowcase = ({ product }) => (
  <div className="Product__Showcase">
    <ProductData product={product} />
    <ProductForm sku={product.sku} />
  </div>
);

export default ProductShowcase;
