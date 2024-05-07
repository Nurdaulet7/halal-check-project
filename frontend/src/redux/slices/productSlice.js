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
    const cachedProducts = localStorage.getItem("products");
    const cacheTime = localStorage.getItem("cacheTime");
    const now = new Date();

    // if (
    //   cachedProducts &&
    //   cacheTime &&
    //   now.getTime() - Number(cacheTime) < 43200000
    // ) {
    //   // 43200000 ms = 12 hours
    //   return JSON.parse(cachedProducts);
    // }
    try {
      const res = await axios.get(url);
      localStorage.setItem("products", JSON.stringify(res.data));
      localStorage.setItem("cacheTime", now.getTime().toString());
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
