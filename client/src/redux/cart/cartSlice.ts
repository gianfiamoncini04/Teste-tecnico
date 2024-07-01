import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "../../types/products";

const initialState: IProductsState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const getCartItemsState = (state: { cart: IProductsState }) => state.cart.items;

export default cartSlice.reducer;