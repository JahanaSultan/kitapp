import { createSlice } from '@reduxjs/toolkit';
import { langs } from '../lang/langContext';

export interface langState {
    lang: any;
    langName: string;
}

const initialState: langState = { lang: langs.en , langName: 'en' }

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        langChange: (state, action,) => {
            state.langName = action.payload;
            action.payload === 'en' ? state.lang = langs.en : state.lang = langs.az;
        }
    }
})

export const { langChange } = langSlice.actions
