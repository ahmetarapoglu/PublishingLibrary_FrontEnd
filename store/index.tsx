"use client"
import { configureStore } from '@reduxjs/toolkit'
import tableState from "./slice/tableStateSlice"
import userStateSlice from './slice/userStateSlice'


export const store = configureStore({
    reducer: {
        tableState: tableState,
        UserState: userStateSlice
    },
})