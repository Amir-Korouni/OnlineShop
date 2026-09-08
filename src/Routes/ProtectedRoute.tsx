import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Reduxs/store";

/**
 * @version 1.0.0
 * @returns Outlet
 * @description This component is a protected route component. Protecte of cart,order and checkout which user can't access to these page when user isn't still login.
 */
const ProtectedRoutes = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user?.username) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
