import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";

const initialState = {
  enterprises: [],
  isLoadingViaAPI: false,
};

// /enterprises-list-delayed
export const fetchEnterprise = createAsyncThunk(
  "enterprises/fetchEnterprise",
  async (url, thunkAPI) => {
    const now = new Date();
    const cachedEnterprises = localStorage.getItem("enterprises");
    const cacheTime = localStorage.getItem("enterprisesCacheTime");

    if (
      cachedEnterprises &&
      cacheTime &&
      now.getTime() - Number(cacheTime) < 43200000
    ) {
      // 43200000 ms = 12 часа
      return JSON.parse(cachedEnterprises);
    }
    try {
      const res = await axios.get(url);
      localStorage.setItem("enterprises", JSON.stringify(res.data));
      localStorage.setItem("enterprisesCacheTime", now.getTime().toString());
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(`Error during fetching: ${error.message}`));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const enterprisesSlice = createSlice({
  name: "enterprises",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnterprise.pending, (state) => {
        state.isLoadingViaAPI = true;
      })
      .addCase(fetchEnterprise.fulfilled, (state, action) => {
        state.isLoadingViaAPI = false;
        state.enterprises = action.payload.map((enterprise) => ({
          ...enterprise,
          id: uuidv4(), // или любой другой уникальный идентификатор, если нужно
        }));
        localStorage.setItem("enterprises", JSON.stringify(state.enterprises));
      })
      .addCase(fetchEnterprise.rejected, (state) => {
        state.isLoadingViaAPI = false;
      });
  },
});

export const selectIsLoadingEnterpriseViaAPI = (state) =>
  state.enterprises.isLoadingViaAPI;

export const selectEnterprises = (state) => state.enterprises.enterprises;

export default enterprisesSlice.reducer;
