import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductsLayout from "./layout/ProductsLayout";
import Home from "./pages";

import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Routing from "./pages/Routing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="routing" element={<Routing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
