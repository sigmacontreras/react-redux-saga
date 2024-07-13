// src/store/greatSwordSaga.ts
import {call, takeEvery, put} from 'redux-saga/effects';
import {allGreatSwords, allGreatSwordsOnSuccess} from './greatSwordsSlice.ts';
import {getAllGreatSwords, GreatSword} from "../lib/api.ts";


function* handleFetchGreatSwords() {
    try {
        const greatSwords: GreatSword[] = yield call(getAllGreatSwords);
        yield put(allGreatSwordsOnSuccess(greatSwords));
    } catch (error) {
        // yield put(allGreatSwordsOnFailure([]))
        console.error(error);
    }
}

export function* watchFetchGreatSwords() {
    yield takeEvery(allGreatSwords.type, handleFetchGreatSwords);
}

