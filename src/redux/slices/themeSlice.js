import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLightTheme: true };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
