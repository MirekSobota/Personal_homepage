import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    repository: [],
    status: null,
  },
  reducers: {
    fetchDataFromGitHubLoad: (state) => {
      state.status = "loading";
    },
    fetchDataFromGitHubLoading: (state) => {
      state.status = "loading";
    },
    fetchDataFromGitHubSuccess: (state, { payload: repository }) => {
      state.repository = repository.data;
      state.status = "success";
    },
    fetchDatFromGitHubError: (state) => {
      state.status = "error";
    },
  },
});
export const {
  fetchDataFromGitHubLoading,
  fetchDataFromGitHubLoad,
  fetchDataFromGitHubSuccess,
  fetchDatFromGitHubError,
} = portfolioSlice.actions;

export const selectPortfolioListState = (state) => state.portfolio;
export const selectRepositoryState = (state) =>
  selectPortfolioListState(state).repository;
export const selectStatus = (state) => selectPortfolioListState(state).status;

export default portfolioSlice.reducer;
