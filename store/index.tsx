"use client"
import { configureStore } from '@reduxjs/toolkit'
import tableState from "./slice/tableStateSlice"
import selectStateSlice from './slice/selectStateSlice'


export const store = configureStore({
    reducer: {
        tableState: tableState,
        selectState: selectStateSlice
    },
})