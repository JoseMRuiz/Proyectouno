import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // authenticaded, not-authenticated
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
            console.log(payload.email)
            localStorage.setItem('email', payload.email)
            
    // localStorage.setItem('miValor', newValue);
        },
        onLogout: (state, { payload }) => {
            state.status = 'no-authenticated'
            state.user = {};
            state.errorMessage = payload
            localStorage.clear()
        },
    }
});


export const { onChecking, onLogin, onLogout } = authSlice.actions;