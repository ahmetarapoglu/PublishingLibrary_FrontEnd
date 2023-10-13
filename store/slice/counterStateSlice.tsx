import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: boolean,
    data: any
}

const initialState: CounterState = {
    value: false,
    data: null
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        printStateActive: (state, action) => {
            state.value = action.payload
        },
        getData: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { printStateActive, getData } = counterSlice.actions

export default counterSlice.reducer