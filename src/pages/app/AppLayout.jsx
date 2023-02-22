import {NavLink, Outlet} from "react-router-dom";
import Cookies from "universal-cookie";
import CookieService from "../../services/CookieService";

const AppLayout = () => {
  const Cookies = CookieService.get("user_token");

  const logout = () => {
    CookieService.remove("user_token");
    window.location.reload();
  };
  return (
    <>
      <ul className="flex items-center justify-center my-10">
        <li className="mx-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-2">
          <NavLink to="/about" end>
            About
          </NavLink>
        </li>

        <li className="mx-2">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="mx-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li className="mx-2">
          {Cookies ? <span onClick={logout}>Logout</span> : <NavLink to="/login">Login</NavLink>}
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default AppLayout;
