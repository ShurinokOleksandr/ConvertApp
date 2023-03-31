import {configureStore} from "@reduxjs/toolkit";
import currencySlice from "src/store/slices/currencySlice";

export const store = configureStore({
    reducer: {
        currencyData:currencySlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch