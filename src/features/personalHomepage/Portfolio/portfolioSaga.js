import { getGitHubData } from "./getDataAPI";
import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchDataFromGitHubLoad, fetchDataFromGitHubSuccess, fetchDatFromGitHubError} from "./portfolioSlice";

function* getDataFromGitHubHandler() {
  try {

    const data = yield call(getGitHubData);
    yield delay(1000);
    yield put(fetchDataFromGitHubSuccess({ data }));
  } catch (error) {
    yield put(fetchDatFromGitHubError());
  }
}


export function* watchFetchRepository() {
  yield takeLatest(fetchDataFromGitHubLoad.type, getDataFromGitHubHandler);
}