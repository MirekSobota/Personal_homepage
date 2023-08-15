import { getGitHubData } from "./getDataAPI";
import { call, delay, put, takeEvery, takeLatest, select } from "redux-saga/effects"
import { fetchDataFromGitHubLoad, fetchDataFromGitHubLoading, fetchDataFromGitHubSuccess, fetchDatFromGitHubError} from "./portfolioSlice";
import { selectTheme } from "../ThemeSwitcher/themeSwitchSlice";
import { saveThemeInLocalStorage } from "../ThemeSwitcher/themeLocalStorage";

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


export function* watchFetchRepository() {
  yield takeLatest(fetchDataFromGitHubLoad.type, getDataFromGitHubHandler);
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}