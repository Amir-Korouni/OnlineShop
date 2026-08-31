import React, { createContext, useState } from "react";
import type { Products } from "../Types/Product";

type cartContextType = {
  cartItem: Products[];
  setCartItem: React.Dispatch<React.SetStateAction<Products[]>>;
  addToCart: (product: Products) => void;
};

type ContextCartProp = {
  children: React.ReactNode;
};

export const contextCartItem = createContext<cartContextType | null>(null);

const CartContext = ({ children }: ContextCartProp) => {
  const [cartItem, setCartItem] = useState<Products[]>([]);

  /**
   * @version 1.0.0
   * @param product
   * @description This function add new item to cart page for shopping a product.
   * @description setCartItem have a previouse state and when we use this syntaxt, we said you have any element of cartState and please add new product at end of cart Item.
   */
  const addToCart = (product: Products) => {
    setCartItem((current) => {
      return [...current, product];
    });
  };
  return (
    <>
      <contextCartItem.Provider value={{ cartItem, setCartItem, addToCart }}>
        {children}
      </contextCartItem.Provider>
    </>
  );
};

export default CartContext;
