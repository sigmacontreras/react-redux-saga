// src/store/greatSwordSaga.ts
import {call, takeEvery, put} from 'redux-saga/effects';
import {fetchAllGreatSwords, setAllGreatSwords} from './greatSwordsSlice.ts';
import {getAllGreatSwords, GreatSword} from "../lib/api.ts";


function* handleFetchGreatSwords() {
    try {
        const greatSwords: GreatSword[] = yield call(getAllGreatSwords);
        yield put(setAllGreatSwords(greatSwords));
    } catch (error) {
        console.error(error);
    }
}

export function* watchFetchGreatSwords() {
    yield takeEvery(fetchAllGreatSwords.type, handleFetchGreatSwords);
}

