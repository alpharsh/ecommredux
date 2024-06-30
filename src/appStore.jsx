import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "./CardSlice";

export const appStore = configureStore({
  reducer: { cart: cardSliceReducer },
});
