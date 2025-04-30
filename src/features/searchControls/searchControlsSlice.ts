import { createSlice } from "@reduxjs/toolkit";
import { SearchControlsInitialState, SearchControlsAction } from "@/types/searchControls.types";

const searchControlsSlice = createSlice({
    name: "searchControls",
    initialState: {
        searchBy: "",
        searchTerm: null
    },
    reducers: {}
});