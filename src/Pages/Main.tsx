import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CartContext from "../Context/CartContext";

const Main = () => {
  return (
    <>
      <NavBar />
      <CartContext>
        <Outlet />
      </CartContext>
    </>
  );
};

export default Main;
