import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

/**
 * @version 1.0.0
 * @returns Outlet
 * @description 
 */
const ProtectedRoutes = () => {
  const users = useContext(AuthContext);

  if (!users?.users) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
