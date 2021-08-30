import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CalcState {
    value: number
}

const initialState: CalcState = {
    value: 0
}

export const calcSlice = createSlice({
    name: 'cacl',
    initialState,
    reducers: {
        add: state => {
            state.value += 1
        },
        sub: state => {
            state.value -= 1
        },
        oper: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { add, sub, oper } = calcSlice.actions;

export const selectCalc = (state: RootState) => state.counter.num

export default calcSlice.reducer