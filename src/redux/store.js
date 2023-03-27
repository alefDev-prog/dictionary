import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./wordSlice";
export const store = configureStore({
    reducer: {
        getWord: infoReducer
    }
})