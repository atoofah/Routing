import { NavLink } from "react-router-dom";
import CookieService from "../services/CookieService";

const Navbar = () => {
  const cookies = CookieService.get("user_token");
  const logout = () => {
    CookieService.remove("user_token");
    window.location.reload();
  };

  return (
    <nav className="my-10">
      <ul className="flex items-center justify-center">
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/routing">Routing</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          {cookies ? (
            <span
              className="cursor-pointer"
              onClick={logout}
            >
              Logout
            </span>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
