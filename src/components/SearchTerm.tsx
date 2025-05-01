import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSearchTerm, getSearchTerm, getSearchBy, clearSearchTerm } from "@/features/searchControls/searchControlsSlice";

interface LevelOptions {
    value: number,
    label: string
}

const levelOptions: LevelOptions[] = [
    { value: 0, label: "Level/Rank 0" },
    { value: 1, label: "Level/Rank/Link 1" },
    { value: 2, label: "Level/Rank/Link 2" },
    { value: 3, label: "Level/Rank/Link 3" },
    { value: 4, label: "Level/Rank/Link 4" },
    { value: 5, label: "Level/Rank/Link 5" },
    { value: 6, label: "Level/Rank/Link 6" },
    { value: 7, label: "Level/Rank 7" },
    { value: 8, label: "Level/Rank 8" },
    { value: 9, label: "Level/Rank 9" },
    { value: 10, label: "Level/Rank 10" },
    { value: 11, label: "Level/Rank 11" },
    { value: 12, label: "Level/Rank 12" },
    { value: 13, label: "Level/Rank 13" }
];

const SearchTerm: React.FC = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => getSearchTerm(state.searchControls));
    const searchBy = useSelector((state: RootState) => getSearchBy(state.searchControls));

    const [searchTermName, setSearchTermName] = useState<string | null>("");
    const [minLevel, setMinLevel] = useState<number>(0);
    const [maxLevel, setMaxLevel] = useState<number>(0);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            //dispatch(setSearchTerm(e.target.value));
            setSearchTermName(value);

            if (searchBy === "name" || searchBy === "fname") {
                dispatch(setSearchTerm(searchTermName));
            }
        }
    };

    // Clear the search term when the value of search by changes
    useEffect(() => {
        dispatch(clearSearchTerm());
        setSearchTermName("");
        setMinLevel(0);
        setMaxLevel(1);
    }, [searchBy, dispatch]);

    // for testing purposes
    useEffect(() => {
        console.log(`searchTerm updated: ${searchTerm}`);
    }, [searchTerm]);

    if (searchBy === "name" || searchBy === "fname") {
        return (
            <>
                <label htmlFor="searchTermName">Search by <b>{searchBy == "name" ? "Exact" : "Fuzzy"}</b> Name:</label>
                <input
                    type="text"
                    id="searchTermName"
                    value={searchTermName ?? ""}
                    onChange={handleNameChange}
                />
            </>
        );
    } else if (searchBy === "level") {
        return (
            <>
                <p>
                    Retrieve all cards with a Level/Rank/Link value between 
                    <select id="minLevel" 
                        value={minLevel} 
                        onChange={ (e: ChangeEvent<HTMLSelectElement>) => setMinLevel(parseInt(e.target.value)) }
                    >
                        {levelOptions.map(level => (
                            <option key={level.value} value={level.value}>{level.label}</option>
                        ))}
                    </select>
                    and 
                    <select id="maxLevel"
                        value={maxLevel}
                        onChange={ (e: ChangeEvent<HTMLSelectElement>) => setMaxLevel(parseInt(e.target.value)) }
                    >
                        {levelOptions
                            .filter(level => level.value >= minLevel)
                            .map(level => (
                                <option key={level.value} value={level.value}>{level.label}</option>
                            ))
                        }
                    </select>
                </p>
            </>
        );
    } else {
        return null;
    }
};

export default SearchTerm;