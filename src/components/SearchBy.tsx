import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchBy, setSearchBy } from "@/features/searchControls/searchControlsSlice";
import { RootState } from "@/store";

const SearchBy: React.FC = () => {
    const dispatch = useDispatch();
    const searchBy = useSelector((state: RootState) => getSearchBy(state.searchControls));

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value) {
            dispatch(setSearchBy(e.target.value));
        }
    };

    // For testing purposes
    useEffect(() => {
        console.log(`seachBy updated: ${searchBy}`);
    }, [searchBy]);

    return (
        <>
            <label htmlFor="searchBy">Search By:</label>
            <select name="searchBy" id="searchBy" value={searchBy} onChange={handleChange}>
                <option value="name">Exact Name</option>
                <option value="fname">Fuzzy Name</option>
                <option value="random">Random Card</option>
                <option value="level">Level/Rank/Link Value</option>
            </select>
        </>
    );
}

export default SearchBy;