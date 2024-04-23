import { createSlice } from '@reduxjs/toolkit';

export const solicitudesSlice = createSlice({
    name: 'solicitudes',
    initialState: {
        cargando: false,
        solicitudes: {},
        solicitudesByDni: {},
    },
    reducers: {
        onLoading: (state) => {
            state.status = true;
        },
        onCarga: (state, { payload }) => {
            state.status = false;
            state.solicitudes = payload;
            state.errorMessage = undefined;
        },
        onCargaByDni: (state, { payload }) => {
            state.status = false;
            state.solicitudesByDni = payload;
            state.errorMessage = undefined;
        },
        onDescarga: (state, { payload }) => {
            state.status = false;
            state.solicitudes = {};
        },
    }
});


export const { onLoading, onCarga, onDescarga, onCargaByDni } = solicitudesSlice.actions;