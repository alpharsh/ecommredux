import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cart",
    initialState: {
        ordercart: [],
    },
    reducers: {
        addOrderCart: (state, action) => {
            state.ordercart = action.payload;
        },
    },
});

export const { addOrderCart } = cardSlice.actions;
export default cardSlice.reducer;