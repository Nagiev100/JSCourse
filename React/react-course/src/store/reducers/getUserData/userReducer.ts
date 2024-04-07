import { createAction, createReducer } from '@reduxjs/toolkit';

interface UserState {
    login: string;
    imageUrl: string;
}

const initialState: UserState = {
    login: '',
    imageUrl: '',
};


interface SetUserDataPayload {
    login: string;
    imageUrl: string;
}


export const setUserAction = createAction<SetUserDataPayload>('user/setUserData');

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(setUserAction, (state, action) => {
        state.login = action.payload.login;
        state.imageUrl = action.payload.imageUrl;
    });
});