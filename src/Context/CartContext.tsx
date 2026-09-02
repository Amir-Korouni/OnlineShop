import React, { createContext, useState } from "react";
import type { Product } from "../Types/Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cartItem: CartItem[];
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>;

  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;

  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

type ContextCartProp = {
  children: React.ReactNode;
};

export const contextCartItem = createContext<CartContextType | null>(null);

const CartContext = ({ children }: ContextCartProp) => {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItem((current) => {
      const existingCart = current.find(
        (item) => item.product.id === product.id,
      );

      if (existingCart) {
        return current.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...current,
        {
          product,
          quantity: 1,
        },
      ];
    });
  };

  /**
   * @version 1.0.0
   * @param productId
   * @description This function is a connection for delete data from database with id.
   */
  const removeFromCart = async (productId: number) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:4000/cart/items/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.text();

      console.log("STATUS:", response.status);
      console.log("SERVER RESPONSE:", result);

      if (!response.ok) {
        console.log("❌ Couldn't remove item");
        return;
      }

      setCartItem((current) =>
        current.filter((item) => item.product.id !== productId),
      );
    } catch (error) {
      console.log("❌ Remove error:", error);
    }
  };

  /**
   *
   * @version 1.0.0
   * @param productId
   * @description This function is called increaseQuantity and insert quantity of product.
   *
   */
  const increaseQuantity = async (productId: number) => {
    const item = cartItem.find((item) => item.product.id === productId);

    if (!item) {
      console.log("Product not found in cart");
      return;
    }

    const newQuantity = item.quantity + 1;

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:4000/cart/items/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            quantity: newQuantity,
          }),
        },
      );

      console.log("🔥 STATUS:", response.status);

      const result = await response.json();

      console.log("🔥 API RESPONSE:", result);

      if (!response.ok) {
        console.log("Couldn't update quantity");
        return;
      }

      setCartItem((current) =>
        current.map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item,
        ),
      );
    } catch (error) {
      console.log("❌ Increase error:", error);
    }
  };

  const decreaseQuantity = async (productId: number) => {
    console.log("🔥 DECREASE CALLED");
    console.log("🔥 productId:", productId);

    const item = cartItem.find((item) => item.product.id === productId);

    if (!item) {
      console.log("❌ Product not found in cart");
      return;
    }

    const newQuantity = item.quantity - 1;

    if (newQuantity <= 0) {
      console.log("⚠️ Quantity cannot be 0");
      return;
    }

    console.log("🔥 OLD QUANTITY:", item.quantity);
    console.log("🔥 NEW QUANTITY:", newQuantity);

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:4000/cart/items/${productId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            quantity: newQuantity,
          }),
        },
      );

      console.log("🔥 STATUS:", response.status);

      const result = await response.json();

      console.log("🔥 API RESPONSE:", result);

      if (!response.ok) {
        console.log("❌ Couldn't update quantity");
        return;
      }

      setCartItem((current) =>
        current.map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item,
        ),
      );
    } catch (error) {
      console.log("❌ Decrease error:", error);
    }
  };

  return (
    <contextCartItem.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </contextCartItem.Provider>
  );
};

export default CartContext;
