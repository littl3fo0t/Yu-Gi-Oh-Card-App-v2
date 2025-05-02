import { configureStore } from "@reduxjs/toolkit";
import searchControlsReducer from "@/features/searchControls/searchControlsSlice";
import cardDataReducer from "@/features/cardData/cardDataSlice";

export const store = configureStore({
    reducer: {
        searchControls: searchControlsReducer,
        cardData: cardDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;