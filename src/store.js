import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import personalPageReducer from "./personalPageSlice";
import portfolioReducer from "./features/personalHomepage/Portfolio/portfolioSlice";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalPage: personalPageReducer, 
    portfolio: portfolioReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;


