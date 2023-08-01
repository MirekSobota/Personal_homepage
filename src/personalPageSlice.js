import { createSlice } from "@reduxjs/toolkit";
import { lightTheme } from "./theme";

const personalPageSlice = createSlice({
  name: "personalPage",
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    toggleTheme: (state)=> {
        state.lightTheme = !state.darkTheme;
    },
  },
});

export const {
    toggleTheme,
} = personalPageSlice.actions;

export const selectPersonalPageState = (state) => state.personalPage;
export const selectTheme = (state) => selectPersonalPageState(state).theme;

export default personalPageSlice.reducer;