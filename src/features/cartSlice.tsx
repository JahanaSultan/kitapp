import { createSlice } from "@reduxjs/toolkit";

export interface cartState {
    cart: any[];
    total: number;
    totalItems: number;
}

const initialState: cartState = {
    cart: [],
    total: 0,
    totalItems: 0,
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
            state.totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
            state.total = state.cart.reduce((acc, item) => acc + item.qty * item.price, 0);
        }
    }
})