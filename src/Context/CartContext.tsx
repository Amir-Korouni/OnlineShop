import React, { createContext, useState } from "react";
import type { Product } from "../Types/Product";
import { Navigate } from "react-router-dom";

type cartContextType = {
  cartItem: Product[];
  setCartItem: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
};

type ContextCartProp = {
  children: React.ReactNode;
};

export const contextCartItem = createContext<cartContextType | null>(null);

const CartContext = ({ children }: ContextCartProp) => {
  const [cartItem, setCartItem] = useState<Product[]>([]);

  /**
   * @version 1.0.0
   * @param product
   * @description This function add new item to cart page for shopping a product.
   * @description setCartItem have a previouse state and when we use this syntaxt, we said you have any element of cartState and please add new product at end of cart Item.
   */
  const addToCart = (product: Product) => {
    setCartItem((current) => {
      <Navigate to="/cart" />;
      const newCart = [...current, product];

      console.log("🛒 Cart:", newCart);

      return newCart;
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
