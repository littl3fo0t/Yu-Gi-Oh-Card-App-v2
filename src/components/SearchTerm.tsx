import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const searchTerm = useSelector(getSearchTerm);
    const searchBy = useSelector(getSearchBy);

    const [searchTermName, setSearchTermName] = useState<string | null>("");
    const [minLevel, setMinLevel] = useState<number>(0);
    const [maxLevel, setMaxLevel] = useState<number>(1);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            //dispatch(setSearchTerm(e.target.value));
            setSearchTermName(value);

            if (searchBy === "name" || searchBy === "fname") {
                dispatch(setSearchTerm(value));
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

    // Set the search term when the min and max levels change
    useEffect(() => {
        if (searchBy === "level" && minLevel && maxLevel) {
            dispatch(setSearchTerm([minLevel, maxLevel]));
        }
    }, [minLevel, maxLevel, dispatch, searchBy]);

    // for testing purposes
    useEffect(() => {
        console.log(`searchTerm updated: ${searchTerm}`);
    }, [searchTerm]);

    if (searchBy === "name" || searchBy === "fname") {
        return (
            <div className="field">
                <label htmlFor="searchTermName">Search by <strong>{searchBy == "name" ? "Exact" : "Fuzzy"}</strong> Name:</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        id="searchTermName"
                        value={searchTermName ?? ""}
                        onChange={handleNameChange}
                        placeholder="ex: Ash Blossom & Joyous Spring"
                    />
                </div>
            </div>
        );
    } else if (searchBy === "level") {
        return (
            <div className="content">
                Retrieve all monster cards with a Level/Rank/Link value between&nbsp;
                <div className="select is-small">
                    <select
                        id="minLevel"
                        value={minLevel}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setMinLevel(parseInt(e.target.value))}
                    >
                        {levelOptions.map(level => (
                            <option key={level.value} value={level.value}>{level.label}</option>
                        ))}
                    </select>
                </div>
                &nbsp;and&nbsp;
                <div className="select is-small">
                    <select
                    id="maxLevel"
                    value={maxLevel}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setMaxLevel(parseInt(e.target.value))}
                >
                    {levelOptions
                        .filter(level => level.value >= minLevel)
                        .map(level => (
                            <option key={level.value} value={level.value}>{level.label}</option>
                        ))
                    }
                </select>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default SearchTerm;