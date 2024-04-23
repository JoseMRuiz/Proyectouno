import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './auth/authSlice'
import { solicitudesSlice } from "./solicitudes/solicitudesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        solicitudes: solicitudesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})