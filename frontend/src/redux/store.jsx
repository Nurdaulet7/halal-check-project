import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import productsReducer from "./slices/productSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    error: errorReducer,
  },
});

export default store;
