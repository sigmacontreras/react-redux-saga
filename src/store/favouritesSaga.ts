// src/store/favouritesSaga.ts
import {call, takeEvery, put} from 'redux-saga/effects';
import {PayloadAction} from "@reduxjs/toolkit";
import {allFavourites, favouritesOnSuccess, setFavourites, setFavouritesOnSuccess,} from './favouritesSlice.ts';
import {getFavouritesGreatSwords, GreatSword, setFavouritesGreatSwords} from "../lib/api.ts";


function* handleFetchFavourites() {
    try {
        const favourites: GreatSword[] = yield call(getFavouritesGreatSwords);
        yield put(favouritesOnSuccess(favourites));
    } catch (error) {
        // yield put(favouritesOnFailure([]))
        console.error(error);
    }
}
function* handleFetchSetFavourites(action: PayloadAction<GreatSword>) {
    try {
        const favourites: GreatSword = yield call(setFavouritesGreatSwords, action.payload);
        yield put(setFavouritesOnSuccess(favourites));
    } catch (error) {
        // yield put(favouritesOnFailure([]))
        console.error(error);
    }
}

export function* watchFetchFavourites() {
    yield takeEvery(allFavourites.type, handleFetchFavourites);
}
export function* watchFetchSetFavourites() {
    yield takeEvery(setFavourites.type, handleFetchSetFavourites);
}

