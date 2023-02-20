import { Navigate, Outlet } from "react-router-dom";

const protectedRout = ({ isAllowed, redirectTo = "/", Children }) => {
  {
    if (!isAllowed)
      return (
        <Navigate
          to={redirectTo}
          replace
        />
      );

    return Children ? Children : <Outlet />;
  }
};

export default protectedRout;
