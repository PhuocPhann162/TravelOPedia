import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/destinationAPI";
import { randomDestinationAPI } from "../api/randomDestinationAPI";

export const store = configureStore({
    reducer: {
        [destinationAPI.reducerPath]: destinationAPI.reducer, 
        [randomDestinationAPI.reducerPath]: randomDestinationAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(destinationAPI.middleware).concat(randomDestinationAPI.middleware),
})