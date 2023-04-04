import "./ProductCardInfo.css";
import "./--transparent/ProductCardInfo--transparent.css";
import ProductCardName from "../__Name/ProductCardName";
import ProductCardPrice from "../__Price/ProductCardPrice";

const ProductCardInfo = ({ product, transparent }) => (
  <div
    aria-hidden={transparent}
    className={`Product-Card__Info ${
      transparent ? `Product-Card__Info--transparent` : ""
    }`}
  >
    <ProductCardName product={product} />
    <ProductCardPrice product={product} />
  </div>
);

export default ProductCardInfo;
