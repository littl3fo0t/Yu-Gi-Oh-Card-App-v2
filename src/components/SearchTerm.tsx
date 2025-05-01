import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSearchTerm, getSearchTerm, getSearchBy, clearSearchTerm } from "@/features/searchControls/searchControlsSlice";

const SearchTerm: React.FC = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => getSearchTerm(state.searchControls));
    const searchBy = useSelector((state: RootState) => getSearchBy(state.searchControls));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            dispatch(setSearchTerm(e.target.value));
        }
    };

    // Clear the search term when the value of search by changes
    useEffect(() => {
        dispatch(clearSearchTerm());
    }, [searchBy, dispatch]);

    // for testing purposes
    useEffect(() => {
        console.log(`searchTerm updated: ${searchTerm}`);
    }, [searchTerm]);

    if (searchBy == "name" || searchBy == "fname") {
        return (
            <>
                <label htmlFor="searchTerm">Search by <b>{searchBy == "name" ? "Exact" : "Fuzzy"}</b> Name:</label>
                <input
                    type="text"
                    id="searchTerm"
                    value={searchTerm ?? ""}
                    onChange={handleChange}
                />
            </>
        );
    } else {
        return null;
    }
};

export default SearchTerm;