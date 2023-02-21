import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Navbar from "./layout/Navbar";
import Login from "./pages/Login";

import PageNotFound from "./pages/PageNotFound";

import routes from "./routes/routes";

const App = () => {
  return (
    <>
      <Routes>
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
              isAllowed={true}
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
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
