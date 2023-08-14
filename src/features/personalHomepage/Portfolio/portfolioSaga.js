import { getGitHubData } from "./getDataAPI";
import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchDataFromGitHubLoad, fetchDataFromGitHubLoading, fetchDataFromGitHubSuccess, fetchDatFromGitHubError} from "./portfolioSlice";

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


export function* watchFetchRepository() {
  yield takeLatest(fetchDataFromGitHubLoad.type, getDataFromGitHubHandler);
}