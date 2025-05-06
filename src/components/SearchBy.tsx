import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchBy, setSearchBy } from "@/features/searchControls/searchControlsSlice";

const SearchBy: React.FC = () => {
    const dispatch = useDispatch();
    const searchBy = useSelector(getSearchBy);

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
        <div className="field">
            <div className="select">
                <select name="searchBy" id="searchBy" value={searchBy} onChange={handleChange}>
                    <option value="">Select an Option to Seach By</option>
                    <option value="name">Exact Name</option>
                    <option value="fname">Fuzzy Name</option>
                    <option value="random">Random Card</option>
                    <option value="level">Level/Rank/Link Value</option>
                </select>
            </div>
        </div>
    );
}

export default SearchBy;