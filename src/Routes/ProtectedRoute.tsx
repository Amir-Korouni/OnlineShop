import type React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { Navigate } from "react-router-dom";

type RouteType = {
  children: React.ReactNode;
};

const ProtectedRoutes = ({ children }: RouteType) => {
  const users = useContext(AuthContext);
  return <>{users?.users !== null ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoutes;
