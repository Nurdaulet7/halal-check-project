import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productName: "",
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProductNameFilter: (state, action) => {},
  },
});
