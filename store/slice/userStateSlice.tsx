"use client"
import { createSlice } from '@reduxjs/toolkit'

export interface DataType {
}

const initialState: DataType = {
}

export const UserSlice = createSlice({
    name: 'UserState',
    initialState,
    reducers: {


    },
})
export const { } = UserSlice.actions

export default UserSlice.reducer