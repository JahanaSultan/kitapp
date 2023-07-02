import { createSlice } from "@reduxjs/toolkit";

export interface cartState {
    cart: any[];
    totalPrice: number;
}

const initialState: cartState = {
    cart: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cart.find((x) => x.id === item.id);
            if (existItem) {
                state.cart = state.cart.map((x) =>
                    x.id === existItem.id ? item : x
                );
            } else {
                state.cart = [...state.cart, item];
            }
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.price, 0);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((x) => x.id !== action.payload);
            const totalPrice = state.cart.reduce((acc, item) => acc + item.price, 0);
            state.totalPrice = parseFloat(totalPrice.toFixed(2));
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
