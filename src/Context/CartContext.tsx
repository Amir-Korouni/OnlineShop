import React, { createContext, useState } from "react";
import type { Products } from "../Types/Product";

type contextProp = {
  children: React.ReactNode;
};

// export const contextCartItem = createContext();

const CartContext = () => {
  const [cartItem, setCartItem] = useState<Products[]>([]);

  const addToCart = (product: Products) => {
    setCartItem([product]);
  };
  return <></>;
};

export default CartContext;
