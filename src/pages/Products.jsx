import { Link } from "react-router-dom";

const Products = () => {
  return (
    <ul>
      <li>
        <Link to="/products/1">Product 1</Link>
      </li>
      <li>
        <Link to="/products/2">Product 2</Link>
      </li>
      <li>
        <Link to="/products/3">Product 3</Link>
      </li>{" "}
      <li>
        <Link to="/products/3">Product 4</Link>
      </li>{" "}
      <li>
        <Link to="/products/3">Product 5</Link>
      </li>
    </ul>
  );
};

export default Products;
