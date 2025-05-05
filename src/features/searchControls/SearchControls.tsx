import React from "react";
import SearchBy from "@/components/SearchBy";
import SearchTerm from "@/components/SearchTerm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getSearchBy, getSearchTerm } from "@/features/searchControls/searchControlsSlice";
import {
    getAllCards,
    loadCardDataByFuzzyName,
    loadCardDataByName,
    isLoadingCards
} from "@/features/cardData/cardDataSlice";

const SearchControls: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cards = useSelector(getAllCards);
    const isLoading = useSelector(isLoadingCards);
    const searchTerm = useSelector((state: RootState) => getSearchTerm(state.searchControls));
    const searchBy = useSelector((state: RootState) => getSearchBy(state.searchControls));

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
                default:
                    console.error("Invalid search type");
            }
        } catch (error) {
            console.error("Failed to fetch cards:", error);
        }
    };

    console.log("Card Data:", cards);

    return (
        <div className="box">
            <form onSubmit={handleSubmit}>
                <SearchBy />
                <SearchTerm />
                <button 
                    type="submit"
                    className={ isLoading ? "button is-white is-loading" : "button is-white" }
                    disabled={isLoading}
                >
                    Fetch Card Data
                </button>
            </form>
        </div>
    );
};

export default SearchControls;