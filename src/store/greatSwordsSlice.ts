// src/store/greatSwordSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {GreatSword} from "../lib/api.ts";

export interface GreatSwordsState {
    greatSwords: GreatSword[];
}

const initialState = {greatSwords: []} satisfies GreatSwordsState as GreatSwordsState;

const greatSwordsSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        setAllGreatSwords: (state, action: PayloadAction<GreatSword[]>) => {
            state.greatSwords = action.payload;
        },
        fetchAllGreatSwords: () => {}
    },
});

export const {setAllGreatSwords, fetchAllGreatSwords} = greatSwordsSlice.actions;
export default greatSwordsSlice.reducer;
