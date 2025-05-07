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
    loadRandomCardData
} from "@/features/cardData/cardDataSlice";

interface SearchControlsProps {
    setError: (error: string | null) => void
};

const SearchControls: React.FC<SearchControlsProps> = ({setError }) => {
    const dispatch = useDispatch<AppDispatch>();

    const cards = useSelector(getAllCards);
    const isLoading = useSelector(isLoadingCards);
    const searchTerm = useSelector(getSearchTerm);
    const searchBy = useSelector(getSearchBy);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                    <button
                        type="submit"
                        className={isLoading ? "button is-white is-loading" : "button is-white"}
                        disabled={isLoading}
                    >
                        Fetch Card Data
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchControls;