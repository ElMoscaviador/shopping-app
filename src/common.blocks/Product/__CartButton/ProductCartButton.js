import "./ProductCartButton.css";
import "./--accessibility/ProductCartButton--accessibility.css";
import { useContext } from "react";
import AccessibilityContext from "../../../common.shared/contexts";
import GradientContainer from "../../GradientContainer/GradientContainer";
import ProductCartText from "../__CartText/ProductCartText";

const ProductCartButton = () => {
  const { accessibilityMode } = useContext(AccessibilityContext);

  return (
    <button
      aria-label="Add product to cart"
      className={`Product__Cart-Button ${
        accessibilityMode ? "Product__Cart-Button--accessibility" : ""
      }`}
      type="submit"
    >
      <GradientContainer>
        <ProductCartText />
      </GradientContainer>
    </button>
  );
};

export default ProductCartButton;
