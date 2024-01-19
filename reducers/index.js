import { combineReducers } from "@reduxjs/toolkit";
import digitSlice from "./digit";
import sumSlice from "./sum";
import usersSlice  from "./userData";


const rootReducer = combineReducers(
    {
        sumReducer : sumSlice,
        digitReducer : digitSlice,
        users: usersSlice,
    });

export default rootReducer;