import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productName: "",
  category: "",
  onlyCertified: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProductNameFilter: (state, action) => {
      state.productName = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    setOnlyCertified: (state) => {
      state.onlyCertified = !state.onlyCertified;
    },
  },
});

export const { setProductNameFilter, setCategoryFilter, setOnlyCertified } =
  filterSlice.actions;

export const selectProductNameFilter = (state) => state.filter.productName;
export const selectCategoryFilter = (state) => state.filter.category;
export const selectOnlyCertifiedFilter = (state) => state.filter.onlyCertified;

export default filterSlice.reducer;
