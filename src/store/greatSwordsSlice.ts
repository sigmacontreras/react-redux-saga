// src/store/greatSwordSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {GreatSword} from "../lib/api.ts";

export interface GreatSwordsState {
    greatSwords: GreatSword[];
    loading: boolean;
    success: boolean;
    failure: boolean;
}

const initialState = {
    greatSwords: [],
    loading: false,
    success: false,
    failure: false
} satisfies GreatSwordsState as GreatSwordsState;

const greatSwordsSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        allGreatSwordsOnSuccess: (state, action: PayloadAction<GreatSword[]>) => {
            state.greatSwords = action.payload;
            state.success = true;
        },
        allGreatSwords: (state) => {
            state.loading = true;
        },
        allGreatSwordsOnFailure: (state, action: PayloadAction<GreatSword[]>) => {
            state.failure = true;
            state.greatSwords = action.payload;
        }
    },
});

export const {allGreatSwordsOnSuccess, allGreatSwords, allGreatSwordsOnFailure} = greatSwordsSlice.actions;
export default greatSwordsSlice.reducer;
