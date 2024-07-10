// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import greatSwordsReducer from './greatSwordsSlice';
import sessionReducer from './sessionSlice';
import shoppingCartReducer from './shoppingCartSlice';

const rootReducer = combineReducers({
  data: greatSwordsReducer,
  session: sessionReducer,
  shoppingCart: shoppingCartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
