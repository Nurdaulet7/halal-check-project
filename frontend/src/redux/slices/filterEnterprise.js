import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enterpriseName: "",
  slug: "",
  category: "",
};

const filterEnterpriseSlice = createSlice({
  name: "filterEnterprise",
  initialState,
  reducers: {
    setEnterpriseNameFilter: (state, action) => {
      state.enterpriseName = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setEnterpriseNameFilter, setCategoryFilter, resetFilters } =
  filterEnterpriseSlice.actions;

export const selectEnterpriseFilter = (state) =>
  state.filterEnterprise.enterpriseName;
export const selectCategoryFilter = (state) => state.filterEnterprise.category;

export default filterEnterpriseSlice.reducer;
