import { configureStore } from "@reduxjs/toolkit";
import addtodo from "../addtocart/cart/Cardslice";
import removetodo from "../addtocart/cart/Cardslice";

const store = configureStore({
  reducer: addtodo,
  removetodo,
});

export default store;
