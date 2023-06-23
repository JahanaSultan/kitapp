import {createSlice} from '@reduxjs/toolkit';

export interface modalState {
    open: boolean;
}

const initialState: modalState= { open: false }

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state) => {
          state.open = true;
        },
        modalClose: (state) => {
            state.open = false;
        }
      }
})

export const { modalOpen, modalClose } = modalSlice.actions

