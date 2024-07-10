// src/store/rootSaga.ts
import {all} from 'redux-saga/effects';
import {watchFetchGreatSwords} from './greatSwordsSaga.ts';
import {watchSessionUpdate} from "./sessionSaga.ts";

export default function* rootSaga() {
    yield all([watchFetchGreatSwords(), watchSessionUpdate()]);
}
