import type { Card, MonsterCard } from "@/types/card.types";

export interface CardDataState {
    cards: Card[] | MonsterCard[] | null,
    isLoadingCards: boolean,
    failedToLoadCards: boolean,
    error: string | null
};