import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

/**
 * @version 1.0.0
 * @returns Outlet
 * @description This component is a protected route component. Protecte of cart,order and checkout which user can't access to these page when user isn't still login.
 */
const ProtectedRoutes = () => {
  const users = useContext(AuthContext);

  if (!users?.users) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
