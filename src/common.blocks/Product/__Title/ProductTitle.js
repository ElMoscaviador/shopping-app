import "./--location/ProductTitle--location--cart.css";
import "./--location/ProductTitle--location--shop.css";
import { addBEMClasses } from "../../../common.shared/utils";

const ProductTitle = ({ title, additionalClasses }) => (
  <h1
    className={`Product__Title ${
      additionalClasses
        ? addBEMClasses(additionalClasses, "Product__Title")
        : ""
    }`}
  >
    {title.toUpperCase()}
  </h1>
);

export default ProductTitle;
