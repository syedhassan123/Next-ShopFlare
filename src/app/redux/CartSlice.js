"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // Check if the item already exists in the cart
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // Otherwise, add it to the cart with an initial quantity
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { add, remove, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
