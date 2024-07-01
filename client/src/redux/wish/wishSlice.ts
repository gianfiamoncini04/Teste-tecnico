import { createSlice } from "@reduxjs/toolkit";
import { IWishState } from "../../types/wish";

const initialState: IWishState = {
	items: [],
};

const wishSlice = createSlice({
	name: "wish",
	initialState,
	reducers: {
		addItem(state, action) {
			if (!state.items.includes(action.payload)) {
				state.items.push(action.payload);
			}
		},
		removeItem(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addItem, removeItem } = wishSlice.actions;

export const getWishItemsState = (state: { wish: IWishState }) =>
	state.wish.items;

export default wishSlice.reducer;
