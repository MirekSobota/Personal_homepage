import { all } from "redux-saga/effects";
import {watchFetchPersonalHomePage} from "./personelHomePageSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPersonalHomePage(),
  ]);
}

