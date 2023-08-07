import { all } from "redux-saga/effects";
import {watchFetchRepository} from "./features/personalHomepage/Portfolio/portfolioSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRepository(),
  ]);
}

