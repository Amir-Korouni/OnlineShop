import Home from "../Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetails";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";
import Cart from "../Pages/Cart";
import Orders from "../Pages/Orders";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import Main from "../Pages/Main";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
