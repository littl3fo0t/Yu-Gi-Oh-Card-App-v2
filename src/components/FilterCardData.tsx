import React from "react";
import type { Card } from "@/types/card.types";

interface FilterCardData {
    cards: Card[],
    addFilterTerm: (term: string) => void,
    removeFilterTerm: (term: string) => void
};

const FilterCardData: React.FC<FilterCardData> = ({ cards, addFilterTerm, removeFilterTerm }) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.id;
        if (e.target.checked) {
            addFilterTerm(term);
        } else {
            removeFilterTerm(term);
        }
    };

    return (
        <div>
            Filter search results to only show:
            <br />
            <div className="checkboxes">
                {cards.some(card => card.frameType.includes("spell")) && (
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            id="spell"
                            onChange={handleOnChange}
                        />
                        &nbsp;Spell Cards
                    </label>
                )}
                {cards.some(card => card.frameType.includes("trap")) && (
                    <label className="checkbox">
                        <input 
                            type="checkbox"
                            id="trap"
                            onChange={handleOnChange}
                        />
                        &nbsp;Trap Cards
                    </label>
                )}
                {cards.some(card => card.frameType !== "spell" && card.frameType !== "trap") && (
                    <label className="checkbox">
                        <input 
                            type="checkbox"
                            id="monster"
                            onChange={handleOnChange}
                        />
                        &nbsp;Monster Cards
                    </label>
                )}
            </div>
        </div>
    );
};

export default FilterCardData;