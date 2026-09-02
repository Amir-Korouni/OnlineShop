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
                </Route>
              </Route>
                  <Route path="/payment" element={<Payment />} />

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
