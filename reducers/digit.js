import { createSlice } from "@reduxjs/toolkit";

export const digitSlice = createSlice({
  name: "counter",
  initialState: { countData: 0 },
  reducers: {
    increment: (state) => {
      console.log("===state====", state.countData);
      state.countData += 1;
    },
  },
});

export const { increment } = digitSlice.actions;

export default digitSlice.reducer;