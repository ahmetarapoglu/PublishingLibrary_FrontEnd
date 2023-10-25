"use client"
import { createSlice } from '@reduxjs/toolkit'

export interface DataType {
    bookCategoryName: string
}

const initialState: DataType = {
    bookCategoryName: ""
}

export const SelectSlice = createSlice({
    name: 'selectState',
    initialState,
    reducers: {
        setbookCategoryName: (state, action) => {
            state.bookCategoryName = action.payload
        },

    },
})
export const { setbookCategoryName } = SelectSlice.actions

export default SelectSlice.reducer