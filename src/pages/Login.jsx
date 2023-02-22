import {Navigate} from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";

const Login = ({isAllowed}) => {
  if (!isAllowed) return <Navigate to="/" replace />;
  return (
    <div className="container mx-auto m-10">
      <LoginPage />
    </div>
  );
};

export default Login;
