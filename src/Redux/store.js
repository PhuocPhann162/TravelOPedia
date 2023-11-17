import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/destinationAPI";

export const store = configureStore({
    reducer: {
        [destinationAPI.reducerPath]: destinationAPI.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(destinationAPI.middleware),
})