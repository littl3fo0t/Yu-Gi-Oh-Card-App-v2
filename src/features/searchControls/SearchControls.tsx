import React from "react";
import SearchBy from "@/components/SearchBy";
import SearchTerm from "@/components/SearchTerm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getSearchBy, getSearchTerm } from "@/features/searchControls/searchControlsSlice";
import {
    getAllCards,
    loadCardDataByFuzzyName,
    loadCardDataByName,
    isLoadingCards,
    loadRandomCardData,
    loadCardDataByLevel
} from "@/features/cardData/cardDataSlice";
import isDarkMode from "@/utils/isDarkMode";

interface SearchControlsProps {
    setError: (error: string) => void,
    setSpellChkBox: (checked: boolean) => void,
    setTrapChkBox: (checked: boolean) => void,
    setMonsterChkBox: (checked: boolean) => void,
    setFilterTerms: (terms: string[]) => void
};

const SearchControls: React.FC<SearchControlsProps> = ({
    setError,
    setSpellChkBox,
    setTrapChkBox,
    setMonsterChkBox,
    setFilterTerms
}) => {
    const dispatch = useDispatch<AppDispatch>();

    const cards = useSelector(getAllCards);
    const isLoading = useSelector(isLoadingCards);
    const searchTerm = useSelector(getSearchTerm);
    const searchBy = useSelector(getSearchBy);

    const showButton = (searchTerm && searchBy) || searchBy === "random";
    const buttonColor = isDarkMode ? "is-white" : "is-black";


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset checkboxes and filter terms
        setSpellChkBox(false);
        setTrapChkBox(false);
        setMonsterChkBox(false);
        setFilterTerms([]);

        try {
            switch (searchBy) {
                case "name":
                    await dispatch(loadCardDataByName(searchTerm as string)).unwrap();
                    break;
                case "fname":
                    await dispatch(loadCardDataByFuzzyName(searchTerm as string)).unwrap();
                    break;
                case "random":
                    await dispatch(loadRandomCardData()).unwrap();
                    break;
                case "level":
                    await dispatch(loadCardDataByLevel(searchTerm as [number, number])).unwrap();
                    break;
                default:
                    //console.error("Invalid search type");
                    setError("Invalid search type")
            }
        } catch (error: any) {
            //console.error("Failed to fetch cards:", error);
            setError(error ?? "Unknown error occurred.");
        }
    };

    console.log("Card Data:", cards);

    return (
        <>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <SearchBy />
                    <SearchTerm />
                    {showButton && (
                        <button
                            type="submit"
                            className={isLoading ? `button ${buttonColor} is-loading` : `button ${buttonColor}`}
                            disabled={isLoading}
                        >
                            Search
                        </button>
                    )}
                </form>
            </div>
        </>
    );
};

export default SearchControls;