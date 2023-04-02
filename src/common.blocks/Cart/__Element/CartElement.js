import "./CartElement.css";
import ProductCard from "../../ProductCard/ProductCard";
import ProductTitle from "../../Product/__Title/ProductTitle";
import ProductPrice from "../../Product/__Price/ProductPrice";
import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";

const CartElement = ({ product }) => (
  <div className="Cart__Element">
    <ProductCard product={product} />
    <ProductTitle title={product.title} />
    <ProductPrice price={product.price} />
    <QuantityUpdater />
  </div>
);

export default CartElement;
