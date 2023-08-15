import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSwitchSlice = createSlice({
  name: "themeSwitch",
  initialState: {
    theme: getThemeFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state)=> {
        state.theme = !state.theme;
    },
  },
});


export const {
    toggleTheme,
} = themeSwitchSlice.actions;

export const selectThemeSwitchState = (state) => state.themeSwitch;
export const selectTheme = (state) => selectThemeSwitchState(state).theme;

export default  themeSwitchSlice.reducer;