import {createSlice} from '@reduxjs/toolkit';

export interface wishlistState {
    wishlist: any[];
}

const initialState: wishlistState = {
    wishlist: [],
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const item = action.payload;
            const existItem = state.wishlist.find((x) => x.id === item.id);
            if (!existItem) {
                state.wishlist = [...state.wishlist, item];
            }
        }
    }
})

export const {addToWishlist} = wishlistSlice.actions;