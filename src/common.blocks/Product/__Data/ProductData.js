import ProductTitle from "../__Title/ProductTitle";
import ProductPrice from "../__Price/ProductPrice";
import ProductDescription from "../__Description/ProductDescription";

const ProductData = ({ product }) => (
  <div className="Product__Data">
    <ProductTitle title={product.name.full} />
    <ProductPrice price={product.price} />
    <ProductDescription description={product.description} />
  </div>
);

export default ProductData;
