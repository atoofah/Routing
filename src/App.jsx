import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductsLayout from "./layout/ProductsLayout";
import Home from "./pages";

import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Routing from "./pages/Routing";
import SingleProductPage from "./pages/SingleProductPage";
import routes from "./routs/routs";

function App() {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={route.component}
        ></Route>
      ))}

      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;
