import "./ProductPrice.css";
import "./--location/ProductPrice--location--shop.css";
import "./--location/ProductPrice--location--cart.css";
import { addBEMClasses } from "../../../common.shared/utils";

const ProductPrice = ({ additionalClasses, price }) => (
  <h2
    className={`Product__Price ${
      additionalClasses
        ? addBEMClasses(additionalClasses, "Product__Price")
        : ""
    }`}
  >
    £{price}
  </h2>
);

export default ProductPrice;
