import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const basketSlice = createSlice ({
    name: "basket",
    initialState,
    reducers:{
        increment: (state, action) => {
            state.products.push(action.payload)
        },
        decrement: (state, action) => {
            state.products = state.count - action.payload
        }
    }

})

export const {increment, decrement} = basketSlice.actions

export const getBasket = (state) => state.basket.products