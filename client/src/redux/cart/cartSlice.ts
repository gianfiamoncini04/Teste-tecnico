import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "../../types/cart";

const initialState: ICartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (!state.items.includes(action.payload)){
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const getCartItemsState = (state: { cart: ICartState }) => state.cart.items;

export default cartSlice.reducer;