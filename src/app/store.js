import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "../addtotodo/cart/card-slice";
import ProductReducer from "../addtotodo/cart/product-slice";

const store = configureStore({
  reducer: {
    cart: CardReducer,
    product: ProductReducer,
  },
});

export default store;
