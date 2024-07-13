// src/store/favouritesSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {GreatSword} from "../lib/api.ts";

export interface FavouritesState {
    favourites: GreatSword[];
    loading: boolean;
    success: boolean;
    failure: boolean;
}

const initialState: FavouritesState = {
    favourites: [],
    loading: false,
    success: false,
    failure: false,
}

export const favouritesSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        allFavourites: (state) => {
            state.loading = true;
        },
        favouritesOnSuccess: (state, action: PayloadAction<GreatSword[]>) => {
            state.favourites = action.payload;
            state.success = true;
        },
        favouritesOnFailure: (state, action: PayloadAction<GreatSword[]>) => {
            state.favourites = action.payload;
            state.failure = true;
        },
        setFavourites: (state, _action: PayloadAction<GreatSword>) => {
            state.loading = true;
        },
        setFavouritesOnSuccess: (state, _action: PayloadAction<GreatSword>) => {
            state.success = true;
        },
        setFavouritesOnFailure: (state, _action: PayloadAction<GreatSword>) => {
            state.failure = true;
        }
    }
})

export const {
    allFavourites,
    favouritesOnSuccess,
    favouritesOnFailure,
    setFavourites,
    setFavouritesOnSuccess,
    setFavouritesOnFailure
} = favouritesSlice.actions;
export default favouritesSlice.reducer;