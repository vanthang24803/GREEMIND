import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./slice/CheckoutSlice";
import cartReducer from "./slice/CartSlice";
export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: cartReducer,
  },
});
