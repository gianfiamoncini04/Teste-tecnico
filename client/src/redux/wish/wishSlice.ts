import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "../../types/products";

const initialState: IProductsState = {
  data: [],
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addItem(state, action) {
      state.data.push(action.payload);
    },
    removeItem(state, action) {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishSlice.actions;

export const getWishItemsState = (state: { wish: IProductsState }) =>
  state.wish.data;

export default wishSlice.reducer;