"use client"
import { configureStore } from '@reduxjs/toolkit'
import tableState from "./slice/tableStateSlice"


export const store = configureStore({
    reducer: {
        tableState: tableState
    },
})