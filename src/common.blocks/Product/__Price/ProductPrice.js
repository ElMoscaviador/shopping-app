import "./ProductPrice.css";
import "./--location/ProductPrice--location--shop.css";
import "./--location/ProductPrice--location--cart.css";
import { addBEMClasses } from "../../../common.shared/utils/handlers";

const ProductPrice = ({ additionalClasses, price }) => (
  <p
    className={`Product__Price ${
      additionalClasses
        ? addBEMClasses(additionalClasses, "Product__Price")
        : ""
    }`}
  >
    £{price}
  </p>
);

export default ProductPrice;
