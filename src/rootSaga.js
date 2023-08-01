import { all } from "redux-saga/effects";
import {watchFetchHomePage} from "../src/feauters/personalHomepage/homePageSaga";

export default function* rootSaga() {
  yield all([
    watchFetchHomePage(),
  ]);
}

