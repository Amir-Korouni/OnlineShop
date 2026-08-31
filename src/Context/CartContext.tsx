import React, { createContext, useState } from "react";
import type { Product } from "../Types/Product";

type cartItem = {
  product: Product;
  quantity: number;
};

type cartContextType = {
  cartItem: cartItem[];
  setCartItem: React.Dispatch<React.SetStateAction<cartItem[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

type ContextCartProp = {
  children: React.ReactNode;
};

export const contextCartItem = createContext<cartContextType | null>(null);

const CartContext = ({ children }: ContextCartProp) => {
  const [cartItem, setCartItem] = useState<cartItem[]>([]);

  /**
   * @version 1.0.0
   * @param product
   * @description This function add new item to cart page for shopping a product.
   * @description setCartItem is a state function for set new value and also it check if we selected one product before,when click on that product again, increase number of that instead of adding cart again.
   */
  const addToCart = (product: Product) => {
    setCartItem((current) => {
      const existingCart = current.find(
        (item) => item.product.id === product.id,
      );
      if (existingCart) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItem((current) =>
      current.filter((item) => item.product.id !== productId),
    );
  };

  const increaseQuantity = (productId: number) => {
    setCartItem((current) =>
      current.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItem((current) =>
      current
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  return (
    <>
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
    </>
  );
};

export default CartContext;
