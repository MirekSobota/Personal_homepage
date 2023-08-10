import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import portfolioReducer from "../features/personalHomepage/Portfolio/portfolioSlice";
import themeSwitchSlice from "../features/personalHomepage/ThemeSwitcher/themeSwitchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeSwitch: themeSwitchSlice,
    portfolio: portfolioReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;


