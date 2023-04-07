import "./CategoriesNavName.css";

const CategoriesNavName = ({ name }) => (
  <h2 aria-label={name} className="Categories-Nav__Name">
    {name}
  </h2>
);

export default CategoriesNavName;
