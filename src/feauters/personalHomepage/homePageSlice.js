import { createSlice } from "@reduxjs/toolkit";

const homePageDataSlice = createSlice({
  name: "homePage",
  initialState: {
    repos: [],
    status: "loading",
  },
  reducers: {
    fetchHomePageLoad: (state) => {
      state.status = "loading";
    },
    fetchDataFromGitHubSuccess: (state, {payload: repos}) => {
      state.repos = repos.data;
      state.status = "success";
    },
    fetchDatFromGitHubError: (state) => {
      state.status = "error";
    },
  },
});
export const {
  fetchHomePageLoad,
  fetchDataFromGitHubSuccess,
  fetchDatFromGitHubError,
} = homePageDataSlice.actions;

export const selectHomePageListState = (state) => state.homePage;
export const selectReposState = (state) => selectHomePageListState(state).repos;

export default homePageDataSlice.reducer;
