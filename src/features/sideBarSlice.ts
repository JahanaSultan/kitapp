import { createSlice } from "@reduxjs/toolkit";

export interface sideBarState {
    sideBar: boolean;
}

const initialState: sideBarState = {
    sideBar: false,
}

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.sideBar = !state.sideBar;
        }
    }
})

export const { toggleSideBar } = sideBarSlice.actions;