import { Outlet } from "react-router-dom";
import AdminNav from "../Components/Admin/AdminNav";
import AdminSidebar from "../Components/Admin/AdminSibebar";

const Admin = () => {
  return (
    <>
      <AdminSidebar />
      <AdminNav />
      <Outlet />
    </>
  );
};

export default Admin;
