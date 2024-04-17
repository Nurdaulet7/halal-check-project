import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";

const initialState = {
  products: [], //JSON.parse(localStorage.getItem("products")) ||
  isLoadingViaAPI: false,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoadingViaAPI = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload.map((product) => ({
          ...product,
          id: product.id,
        }));
        localStorage.setItem("products", JSON.stringify(state.products));
        state.isLoadingViaAPI = false;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.isLoadingViaAPI = false;
      });
  },
});

export const selectIsLoadingViaAPI = (state) => state.products.isLoadingViaAPI;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
