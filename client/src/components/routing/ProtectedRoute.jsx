import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  return !isAuthenticated ? <Navigate to="/dash" /> : <Navigate to="/login" />
};

export default ProtectedRoute;
