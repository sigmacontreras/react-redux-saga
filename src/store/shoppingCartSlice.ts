import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {GreatSword} from "../lib/api.ts";

export interface ShoppingCartState {
    items: GreatSword[];
}

const initialState: ShoppingCartState = {
    items: [],
};

const shoppingCartSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<GreatSword>) => {
            if (state.items.length < 3) {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
