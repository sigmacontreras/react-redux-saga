// src/store/sessionSaga.ts
import {call, takeEvery, put} from 'redux-saga/effects';
import {PayloadAction} from "@reduxjs/toolkit";
import {newSession, SessionState, sessionUpdate} from './sessionSlice.ts'
import {createSession, UserCredentials} from '../lib/api.ts'


function* handleSessionUpdate(action: PayloadAction<UserCredentials>) {
    try {
        const isAuthenticated: SessionState = yield call(createSession, action.payload)
        yield put(newSession(isAuthenticated))
    } catch (error) {
        console.error(error);
    }

}



export function* watchSessionUpdate() {
    yield takeEvery(sessionUpdate.type, handleSessionUpdate);
}
