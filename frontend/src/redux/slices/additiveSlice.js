import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";

const initialState = {
  additivies: [], //JSON.parse(localStorage.getItem("additivies")) ||
  isLoadingViaAPI: false,
};

export const fetchAdditive = createAsyncThunk(
  "additivies/fetchAdditive",
  async (url, thunkAPI) => {
    const now = new Date();
    const cachedAdditives = localStorage.getItem("additives");
    const cacheTime = localStorage.getItem("additivesCacheTime");

    // Проверяем наличие кэша и время кэша
    if (
      cachedAdditives &&
      cacheTime &&
      now.getTime() - Number(cacheTime) < 43200000
    ) {
      // 43200000 ms = 12 часа
      return JSON.parse(cachedAdditives);
    }
    try {
      const res = await axios.get(url);
      localStorage.setItem("additives", JSON.stringify(res.data));
      localStorage.setItem("additivesCacheTime", now.getTime().toString());
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(`Error during fetching: ${error.message}`));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const additiviesSlice = createSlice({
  name: "additivies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdditive.pending, (state) => {
        state.isLoadingViaAPI = true;
      })
      .addCase(fetchAdditive.fulfilled, (state, action) => {
        state.isLoadingViaAPI = false;
        state.additivies = action.payload.map((additive) => ({
          ...additive,
          id: uuidv4(), // или любой другой уникальный идентификатор, если нужно
        }));
        localStorage.setItem("additives", JSON.stringify(state.additivies));
      })
      .addCase(fetchAdditive.rejected, (state) => {
        state.isLoadingViaAPI = false;
      });
  },
});

export const selectIsLoadingAdditiveViaAPI = (state) =>
  state.additivies.isLoadingViaAPI;

export const selectAdditivies = (state) => state.additivies.additivies;

export default additiviesSlice.reducer;
