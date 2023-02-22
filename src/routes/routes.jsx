import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import CookieService from "../services/CookieService";

const cookies = CookieService.get("user_token");

//** for only pages use NavBar

const routes = [
  {
    path: "/",
    component: <Home />,
    isAllowed: true,
    redirectTo: "/",
  },
  {
    path: "/contact",
    component: <Contact />,
    isAllowed: true,
    redirectTo: "/",
  },
  {
    path: "/about",
    component: <About />,
    isAllowed: true,
    redirectTo: "/",
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
    isAllowed: cookies,
    redirectTo: "/",
  },
];
export default routes;
