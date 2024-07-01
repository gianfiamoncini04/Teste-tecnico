import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "../../types/products";

const initialState: IProductsState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
        state.items = action.payload;
    }
  },
});

export const { setProducts } = productsSlice.actions;

export const getProductsItemsState = (state: { products: IProductsState }) => state.products.items;

export default productsSlice.reducer;