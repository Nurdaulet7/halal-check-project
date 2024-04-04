import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarVisible: false,
  mobileSidebarVisible: false,
  darkMode: true,
};

// const sidebarSlice = createSlice({
//   name: "sidebar",
//   initialState,
//   reducers: {
//     setSidebarWidth: (state) => {
//       state.sidebarVisible = !state.sidebarVisible;
//     },
//     setDarkMode: (state) => {
//       state.darkMode = !state.darkMode;
//     },
//   },
// });

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    // Модификация setSidebarWidth для приема явного значения
    setSidebarWidth: (state, action) => {
      state.sidebarVisible =
        action.payload !== undefined ? action.payload : !state.sidebarVisible;
    },
    setMobileSidebar: (state, action) => {
      state.mobileSidebarVisible =
        action.payload !== undefined
          ? action.payload
          : !state.mobileSidebarVisible;
    },
    // Модификация setDarkMode для приема явного значения
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setSidebarWidth, setMobileSidebar, setDarkMode } =
  sidebarSlice.actions;

export const selectMobileSidebarVisible = (state) =>
  state.sidebar.mobileSidebarVisible;
export const selectsidebarVisible = (state) => state.sidebar.sidebarVisible;
export const selectdarkMode = (state) => state.sidebar.darkMode;

export default sidebarSlice.reducer;
