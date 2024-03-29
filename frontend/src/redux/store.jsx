import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import productsReducer from "./slices/productSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
