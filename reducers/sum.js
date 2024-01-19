import { createSlice } from "@reduxjs/toolkit";

export const sumSlice = createSlice ({
    name:"Sum",
    initialState:{numData :100},
    reducers:{
        increment1:(state) => 
        {
            console.log("state" , state.numData);
        
        }
    }
});

export const {increment}   = sumSlice.actions;

export default  sumSlice.reducer;