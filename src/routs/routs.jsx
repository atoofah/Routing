import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: <h1>Home</h1>,
    isAllowed: "true",
    redirectTo: "/",
  },
  {
    path: "/dashboard",
    component: <h1>Dashboard</h1>,
    isAllowed: "false",
    redirectTo: "/dashboard",
  },
];
export default routes;
