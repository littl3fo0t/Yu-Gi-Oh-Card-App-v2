import React from "react";
import type { Card } from "@/types/card.types";

interface FilterCardData {
    cards: Card[],
    addFilterTerm: (term: string) => void,
    removeFilterTerm: (term: string) => void,
    spellChkBox: boolean,
    trapChkBox: boolean,
    monsterChkBox: boolean,
    setSpellChkBox: (checked: boolean) => void,
    setTrapChkBox: (checked: boolean) => void,
    setMonsterChkBox: (checked: boolean) => void
};

const FilterCardData: React.FC<FilterCardData> = (
    {
        cards,
        addFilterTerm,
        removeFilterTerm,
        spellChkBox,
        trapChkBox,
        monsterChkBox,
        setSpellChkBox,
        setTrapChkBox,
        setMonsterChkBox
    }) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.id;
        const isChecked = e.target.checked;
        if (isChecked) {
            addFilterTerm(term);
        } else {
            removeFilterTerm(term);
        }

        switch (term) {
            case "spell":
                setSpellChkBox(isChecked);
                break;
            case "trap":
                setTrapChkBox(isChecked);
                break;
            case "monster":
                setMonsterChkBox(isChecked);
                break;
        };
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
                            checked={spellChkBox}
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
                            checked={trapChkBox}
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
                            checked={monsterChkBox}
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