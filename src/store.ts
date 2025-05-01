import { configureStore } from "@reduxjs/toolkit";
import searchControlsReducer from "@/features/searchControls/searchControlsSlice";

export const store = configureStore({
    reducer: {
        searchControls: searchControlsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;