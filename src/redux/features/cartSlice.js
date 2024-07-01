import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        // add to cart
        addToCart: (state, action) => {

        },

        // remove perticular iteams
        removeToCart: (state, action) => {
          
        },

        // remove single iteams
        removeSingleIteams: (state, action) => {
            
        },

        // clear cart
        emptycartIteam: (state, action) => {
            
        }
    }
});

export const { addToCart, removeToCart, removeSingleIteams, emptycartIteam } = cartSlice.actions;

export default cartSlice.reducer;