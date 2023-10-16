"use client"
import { createSlice } from '@reduxjs/toolkit'

export interface DataType {
    isModalOpen: boolean,
    editState: boolean,
    editData: {},
    id: number,
    tableUpdateNumber: number,
    search: string
}

const initialState: DataType = {
    isModalOpen: false,
    editState: false,
    editData: {},
    id: 0,
    tableUpdateNumber: 0,
    search: ""
}

export const TableSlice = createSlice({
    name: 'tableState',
    initialState,
    reducers: {
        changeModelState: (state, action) => {
            state.isModalOpen = action.payload
        },
        changeEditState: (state, action) => {
            state.editState = action.payload
        },
        getId: (state, action) => {
            state.id = action.payload
        },
        updateTable: (state, action) => {
            state.tableUpdateNumber = action.payload
        },
        getSearchValue: (state, action) => {
            state.search = action.payload
        },
        saveEditData: (state, action) => {
            state.editData = action.payload
        }
    },
})

export const { changeModelState, changeEditState, getId, updateTable, getSearchValue, saveEditData } = TableSlice.actions

export default TableSlice.reducer