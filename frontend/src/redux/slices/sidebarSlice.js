import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: false,
  darkMode: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarWidth: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setSidebarWidth, setDarkMode } = sidebarSlice.actions;

export const selectsidebarVisible = (state) => state.sidebar.sidebarVisible;
export const selectdarkMode = (state) => state.sidebar.darkMode;

export default sidebarSlice.reducer;
