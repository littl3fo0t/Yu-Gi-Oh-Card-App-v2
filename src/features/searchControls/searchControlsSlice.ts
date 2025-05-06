import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchControlsState, SearchTerm } from "@/types/searchControls.types";
import { RootState } from "@/store";

const searchControlsInitialState: SearchControlsState = {
    searchBy: "",
    searchTerm: null
}

const searchControlsSlice = createSlice({
    name: "searchControls",
    initialState: searchControlsInitialState,
    reducers: {
        setSearchBy: (state: SearchControlsState, action: PayloadAction<string>) => {
            state.searchBy = action.payload;
        },
        clearSearchBy: (state: SearchControlsState) => {
            state.searchBy = "";
        },
        setSearchTerm: (state: SearchControlsState, action: PayloadAction<SearchTerm>) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state: SearchControlsState) => {
            state.searchTerm = null;
        }
    }
});

export const { setSearchBy, clearSearchBy, setSearchTerm, clearSearchTerm } = searchControlsSlice.actions;

export const getSearchBy = (state: RootState) => state.searchControls.searchBy;
export const getSearchTerm = (state: RootState) => state.searchControls.searchTerm;

export default searchControlsSlice.reducer;