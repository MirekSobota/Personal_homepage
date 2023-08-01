import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import personalPageReducer from "./personalPageSlice";
import homePageReducer from "../src/feauters/personalHomepage/homePageSlice";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalPage: personalPageReducer, 
    homePage: homePageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;


