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

const AppRoute = () => {
  return (
    <>
      <Router>
        <ContextProvider>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/productdetail/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
};

export default AppRoute;
