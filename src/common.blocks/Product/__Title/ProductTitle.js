import './ProductTitle.css'

const ProductTitle = ({ title }) => (
  <h1 className="Product__Title">{title.toUpperCase()}</h1>
);

export default ProductTitle;
