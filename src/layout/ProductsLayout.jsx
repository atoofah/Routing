import React from "react";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <aside>
      <div>ProductsLayout</div>
      <Outlet />
    </aside>
  );
};

export default ProductsLayout;
