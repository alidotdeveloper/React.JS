import { configureStore } from "@reduxjs/toolkit";
import cardslice from "../addtotodo/cart/card-slice";

const store = configureStore({
  reducer: {
    cart: cardslice,
  },
});

export default store;
