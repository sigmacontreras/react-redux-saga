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
    name: 'shoppingCart',
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
//
//
// // src/store/greatSwordSlice.ts
// import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
// import {GreatSword} from "../lib/api.ts";
//
// export interface GreatSwordsState {
//     greatSwords: GreatSword[];
// }
//
// const initialState = {greatSwords: []} satisfies GreatSwordsState as GreatSwordsState;
//
// const greatSwordsSlice = createSlice({
//     name: 'fetch',
//     initialState,
//     reducers: {
//         setAllGreatSwords: (state, action: PayloadAction<GreatSword[]>) => {
//             state.greatSwords = action.payload;
//         },
//         fetchAllGreatSwords: () => {}
//     },
// });
//
// export const {setAllGreatSwords, fetchAllGreatSwords} = greatSwordsSlice.actions;
// export default greatSwordsSlice.reducer;
