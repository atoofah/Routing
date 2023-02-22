import {Route, Routes} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Navbar from "./layout/Navbar";
import About from "./pages/About";
import AppLayout from "./pages/app/AppLayout";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Notifications from "./pages/dashboard/Notifications";
import Home from "./pages/Home";
import Login from "./pages/Login";

import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";

import routes from "./routes/routes";
import CookieService from "./services/CookieService";

const App = () => {
  /** Get Cookies */
  const cookies = CookieService.get("user_token");
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout isAllowed={cookies} />}>
          <Route index element={<Dashboard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<h1>Messages</h1>} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="login" element={<Login isAllowed={!cookies} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <Routes>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <ProtectedRoute
                isAllowed={route.isAllowed}
                redirectTo={route.redirectTo}
              >
                <Navbar />
                {route.component}
              </ProtectedRoute>
            }
          />
        ))}
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAllowed={!cookies}
              redirectTo={"/"}
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes> */}
      <ToastContainer />
    </>
  );
};

export default App;
