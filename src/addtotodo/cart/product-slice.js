import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
  IDLE: "idle",
  Error: "error",
  LOADING: "loading",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },

  reducers: {
    SetProducts(state, action) {
      state.data = action.payload;
    },
    SetStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { SetProducts, SetStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

// Thaunks

export function getproducts() {
  return async function getproductsthunk(dispatch, getstate) {
    dispatch(SetStatus(STATUS.LOADING));

    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (res.data) {
          dispatch(SetProducts(res.data));
          console.log("data imported successfuly");
          dispatch(SetStatus(STATUS.IDLE));
        }
      })
      .catch(function (err) {
        console.log("error :" + err);
        dispatch(SetStatus(STATUS.Error));
      });
  };
}
