import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchControlsState, SearchTerm } from "@/types/searchControls.types";

const searchControlsSlice = createSlice({
    name: "searchControls",
    initialState: {
        searchBy: "",
        searchTerm: null
    },
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

export const getSearchBy = (state: SearchControlsState) => state.searchBy;
export const getSearchTerm = (state: SearchControlsState) => state.searchTerm;

export default searchControlsSlice.reducer;