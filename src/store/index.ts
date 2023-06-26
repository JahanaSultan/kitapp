import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {modalSlice} from '../features/modalSlice';
import {cartSlice} from '../features/cartSlice';
import { sideBarSlice } from '../features/sideBarSlice';
import { langSlice } from '../features/langSlice';


const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        cart: cartSlice.reducer,
        sideBar: sideBarSlice.reducer,
        lang: langSlice.reducer,
    }
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

