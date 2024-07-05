import {configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/RootReducers";

export const store= configureStore({
    reducer : rootReducer
})

export default store