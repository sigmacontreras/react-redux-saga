// src/store/sessionSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';


export interface SessionState {
    isAuthenticated: boolean,
    isAuthorized: boolean
}

const initialState: SessionState = {
    isAuthenticated: false,
    isAuthorized: false
};

const sessionSlice = createSlice({
    name: 'create',
    initialState,
    reducers: {
        newSession: (state, action: PayloadAction<SessionState>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isAuthorized = action.payload.isAuthorized;
        },
        sessionUpdate: (_state, _action: PayloadAction<{ email: string; password: string }>) => {
            console.log("session slice update");
        }
    }
})

export const {newSession, sessionUpdate} = sessionSlice.actions;
export default sessionSlice.reducer;
