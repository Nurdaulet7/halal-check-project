import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import productsReducer from "./slices/productSlice";
import filterReducer from "./slices/filterProductsSlice";
import errorReducer from "./slices/errorSlice";
import additiveReducer from "./slices/additiveSlice";
import enterpriseReduser from "./slices/certificateSlice";
import filterAdditiviesSlice from "./slices/filterAdditiviesSlice";
import filterEnterprise from "./slices/filterEnterprise";
import barcodeSlice from "./slices/barcodeSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    additivies: additiveReducer,
    enterprises: enterpriseReduser,
    filter: filterReducer,
    filterAdditive: filterAdditiviesSlice,
    filterEnterprise: filterEnterprise,
    error: errorReducer,
    barcode: barcodeSlice,
  },
});

export default store;
