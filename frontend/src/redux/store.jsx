import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import productsReducer from "./slices/productSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";
import additiveReducer from "./slices/additiveSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    additivies: additiveReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
