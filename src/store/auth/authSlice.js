import { createSlice } from '@reduxjs/toolkit';

const EmptyUser = {
    nombre: '',
    apellido: '',
    email: '',
    dni: 0,
    rol: 0,
}

export const UserKey = 'user';

export const persistLocalStorage = (key, value) => {
    console.log(key, value)
    localStorage.setItem(key, JSON.stringify({ ...value }));
}

export const clearLocalStorageUser = () => {
    localStorage.removeItem('user')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        // status: 'checking', // authenticaded, not-authenticated
        status: localStorage.getItem('user') ? 'authenticaded' : 'not-authenticated',
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : EmptyUser,
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
            state.errorMessage = undefined;
           persistLocalStorage(UserKey, payload)
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