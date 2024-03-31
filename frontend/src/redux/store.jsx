import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import productsReducer from "./slices/productSlice";
import filterReducer from "./slices/filterProductsSlice";
import errorReducer from "./slices/errorSlice";
import additiveReducer from "./slices/additiveSlice";
import filterAdditiviesSlice from "./slices/filterAdditiviesSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    additivies: additiveReducer,
    filter: filterReducer,
    filterAdditive: filterAdditiviesSlice,
    error: errorReducer,
  },
});

export default store;
