import "./ProductCartButton.css";
import GradientContainer from "../../GradientContainer/GradientContainer";
import ProductCartText from "../__CartText/ProductCartText";

const ProductCartButton = () => (
  <button
    aria-label="Add product to cart"
    className="Product__Cart-Button"
    type="submit"
  >
    <GradientContainer>
      <ProductCartText />
    </GradientContainer>
  </button>
);

export default ProductCartButton;
