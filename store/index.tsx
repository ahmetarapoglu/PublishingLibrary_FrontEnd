import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slice/counterStateSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})