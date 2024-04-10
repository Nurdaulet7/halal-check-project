import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";

const initialState = {
  product: null,
  isLoading: false,
  error: null,
};

export const fetchProductByBarcode = createAsyncThunk(
  "products/fetchProductByBarcode",
  async (barcode, thunkAPI) => {
    const url = `http://localhost:8080/product/products?barcode=${barcode}`;
    try {
      const response = await axios.get(url);
      return response.data; // Предполагается, что сервер возвращает данные продукта
    } catch (error) {
      thunkAPI.dispatch(setError(error.message)); // Использование другого slice для обработки ошибок
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const scannedProductsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByBarcode.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductByBarcode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload; // Сохранение полученного продукта
      })
      .addCase(fetchProductByBarcode.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectScannedProduct = (state) => state.barcode.product;
export const selectScannedProductIsLoading = (state) => state.barcode.isLoading;
export const selectError = (state) => state.barcode.error;

export default scannedProductsSlice.reducer;
