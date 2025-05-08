import type { Card } from "@/types/card.types"

const filterCardData = (term: string, cards: Card[]) => {
    switch (term) {
        case "spell":
            return cards.filter(card => card.frameType === "spell");
        case "trap":
            return cards.filter(card => card.frameType === "trap");
        case "monster":
            return cards.filter(card => card.frameType !== "spell" && card.frameType !== "trap");
        default:
            return cards;
    };
};

export default filterCardData;