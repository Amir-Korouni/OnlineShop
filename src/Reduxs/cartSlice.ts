import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../Types/Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  cartItem: CartItem[];
};

const initialState: CartState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItem = action.payload;
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const existingCart = state.cartItem.find(
        (item) => item.product.id === product.id,
      );

      if (existingCart) {
        existingCart.quantity += 1;
      } else {
        state.cartItem.push({
          product,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cartItem.filter((item) => {
        return item.product.id !== productId;
      });
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      const item = state.cartItem.find((item) => item.product.id === productId);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const item = state.cartItem.find((item) => item.product.id === productId);
      if (item) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
