import { getGitHubData } from "../features/personalHomepage/Portfolio/getDataAPI";
import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import {
  fetchDataFromGitHubLoad,
  fetchDataFromGitHubLoading,
  fetchDataFromGitHubSuccess,
  fetchDatFromGitHubError,
} from "../features/personalHomepage/Portfolio/portfolioSlice";
import { selectTheme } from "../features/personalHomepage/ThemeSwitcher/themeSwitchSlice";
import { saveThemeInLocalStorage } from "../features/personalHomepage/ThemeSwitcher/themeLocalStorage";

function* getDataFromGitHubHandler() {
  try {
    yield put(fetchDataFromGitHubLoading());
    const data = yield call(getGitHubData);

    yield delay(1500);
    yield put(fetchDataFromGitHubSuccess({ data }));
  } catch (error) {
    yield put(fetchDatFromGitHubError());
  }
}
function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* watchFetchPersonalHomePage() {
  yield takeLatest(fetchDataFromGitHubLoad.type, getDataFromGitHubHandler);
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
