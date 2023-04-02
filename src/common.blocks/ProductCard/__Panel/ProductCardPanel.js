import "./--position/ProductCardPanel--position--back.css";
import "./--position/ProductCardPanel--position--front.css";

const ProductCardPanel = ({position}) => (
  <div
    className={`Product-Card__Panel Product-Card__Panel--position--${position}`}
  />
);

export default ProductCardPanel;
