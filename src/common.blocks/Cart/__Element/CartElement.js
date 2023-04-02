import ProductCard from "../../ProductCard/ProductCard";
import ProductTitle from "../../Product/__Title/ProductTitle";
import ProductPrice from "../../Product/__Price/ProductPrice";
import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";

const CartElement = () => (
  <div className="cart__element">
    <ProductCard />
    <ProductTitle />
    <ProductPrice />
    <QuantityUpdater />
  </div>
);

export default CartElement;
