import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  additiveCode: "",
  slug: "",
  category: "",
};

const filterAdditivesSlice = createSlice({
  name: "filterAdditive",
  initialState,
  reducers: {
    setAdditiveNameFilter: (state, action) => {
      state.additiveCode = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setAdditiveNameFilter, setCategoryFilter, resetFilters } =
  filterAdditivesSlice.actions;

export const selectAdditiviesCodeFilter = (state) =>
  state.filterAdditive.additiveCode;
export const selectCategoryFilter = (state) => state.filterAdditive.category;

export default filterAdditivesSlice.reducer;
