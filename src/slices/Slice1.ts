import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value:number
}
const initialState:CounterStateType = {
    value:0
}
export const counter1Slice = createSlice({
    name:"counter1",
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.value = state.value +1;
        },
        decrement:(state)=>{
            state.value = state.value -1;
        },
        reset:(state)=>{
            state.value = 0;
        },
        incrementAction:(state,action:PayloadAction<number>)=>{
            state.value = state.value + action.payload;
        },
        decrementAction:(state,action:PayloadAction<number>)=>{
            state.value = state.value - action.payload;
        }
    }
});
export const {increment,decrement,reset,incrementAction,decrementAction} = counter1Slice.actions