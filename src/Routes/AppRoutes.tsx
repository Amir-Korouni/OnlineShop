import Home from "../Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetails";
import Checkout from "../Pages/Checkout";
import Cart from "../Pages/Cart";
import Orders from "../Pages/Orders";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import Main from "../Pages/Main";
import ContextProvider from "../Context/ContextProvider";
import ProtectedRoutes from "./ProtectedRoute";
import CartContext from "../Context/CartContext";
import OrderDetail from "../Pages/OrderDetails";
import Payment from "../Pages/Payment";
import Admin from "../Pages/Admin";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminProducts from "../Pages/Admin/AdminProducts";
import AdminOrders from "../Pages/Admin/AdminOrders";
import AdminUsers from "../Pages/Admin/AdminUsers";
import AdminLogin from "../Pages/Admin/AdminLogin";

const AppRoute = () => {
  return (
    <>
      <Router>
        <ContextProvider>
          <CartContext>
            <Routes>
              <Route element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="/productdetail/:id" element={<ProductDetail />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/orderdetail/:id" element={<OrderDetail />} />
                  <Route path="/payment" element={<Payment />} />
                </Route>
              </Route>

              <Route element={<Admin />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/admin/users" element={<AdminUsers />} />
              </Route>

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartContext>
        </ContextProvider>
      </Router>
    </>
  );
};

export default AppRoute;
