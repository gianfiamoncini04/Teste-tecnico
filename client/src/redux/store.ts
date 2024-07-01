import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import wishSlice from "./wish/wishSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    wish: wishSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
