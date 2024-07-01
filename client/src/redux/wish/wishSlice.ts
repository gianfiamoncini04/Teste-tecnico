import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "../../types/products";

const initialState: IProductsState = {
  items: [],
};

const wishSlice = createSlice({
  name: "wish",
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

export const { addItem, removeItem } = wishSlice.actions;

export const getWishItemsState = (state: { wish: IProductsState }) => state.wish.items;

export default wishSlice.reducer;