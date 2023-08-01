import {getReposData} from "./getDataAPI";
import { call, delay, put,  takeLatest } from "redux-saga/effects"
import {fetchDataFromGitHubSuccess, fetchDatFromGitHubError, fetchHomePageLoad} from "./homePageSlice";

function* getDataFromGitHubHandler() {
    try {
      
      const data = yield call(getReposData);
      yield delay(1000);
      yield put(fetchDataFromGitHubSuccess({ data }));
    } catch (error) {
      yield put(fetchDatFromGitHubError());
    }
  }


  export function* watchFetchHomePage() {
    yield takeLatest(fetchHomePageLoad.type, getDataFromGitHubHandler);
  }