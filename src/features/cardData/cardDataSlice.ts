import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardDataState } from "@/types/cardData.types";
import { Card, MonsterCard } from "@/types/card.types";
import { RootState } from "@/store";

const cardDataInitialState: CardDataState = {
    cards: null,
    isLoadingCards: false,
    failedToLoadCards: false,
    error: null
}

const apiURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";

const fetchCardData = async (endpoint: string): Promise<Card[]> => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Error when trying to fetch the data");
        }
        const data = await response.json();
        if (!data?.data) {
            throw new Error("No data returned from API");
        }
        return data.data as Card[];
    } catch (error: any) {
        throw new Error(error.message ?? "Unknown error occurred during data fetching");
    }
};

export const loadCardDataByName = createAsyncThunk<
    Card[],                     // Success return type
    string,                     // Argument type of cardName
    { rejectValue: string }     // Error type
>(
    "cardData/loadCardDataByExactName",
    async (cardName, { rejectWithValue }) => {
        try {
            const endpoint = `${apiURL}name=${encodeURIComponent(cardName)}`;
            return await fetchCardData(endpoint);
        } catch (error: any) {
            return rejectWithValue(error.message ?? "Unknown error occured when trying to search by exact name");
        }
    }
);

export const loadCardDataByFuzzyName = createAsyncThunk<
    Card[],
    string,
    { rejectValue: string }
>(
    "cardData/loadCardDataByFuzzyName",
    async (cardName, { rejectWithValue }) => {
        try {
            const endpoint = `${apiURL}fname=${encodeURIComponent(cardName)}`;
            return await fetchCardData(endpoint);
        } catch (error: any) {
            return rejectWithValue(error.message ?? "Unknown error occured when trying to search by fuzzy name");
        }
    }
);

export const loadCardDataByLevel = createAsyncThunk<
    MonsterCard[],          // Only monster cards should be returned when searching by level
    [number, number],
    { rejectValue: string }
>(
    "cardData/loadCardDataByLevel",
    async ([minLevel, maxLevel], { rejectWithValue }) => {
        try {
            const endpoint = "https://db.ygoprodeck.com/api/v7/cardinfo.php";   // return ALL cards
            const cards = await fetchCardData(endpoint);

            // Filter monster cards
            const monsterCards = cards?.filter(
                (card): card is MonsterCard =>
                    "level" in card || "linkval" in card
            );

            if (!monsterCards || monsterCards.length === 0) {
                return rejectWithValue("No monster cards found");
            }

            const filteredCards = monsterCards.filter(card => {
                const level = card.level ?? 0;
                const linkval = card.linkval ?? 0;
                return (
                    (card.frameType === "link" && linkval >= minLevel && linkval <= maxLevel) ||
                    (card.frameType !== "link" && level >= minLevel && level <= maxLevel)
                );
            });

            return filteredCards;
        } catch (error: any) {
            return rejectWithValue(error.message ?? "Unknown error occured when trying to search by level");
        }
    }
);

export const loadRandomCardData = createAsyncThunk<
    Card[],
    void,
    { rejectValue: string }
>(
    "cardData/loadRandomCardData",
    async (_, { rejectWithValue }) => {
        try {
            const endpoint = "https://db.ygoprodeck.com/api/v7/randomcard.php";
            return await fetchCardData(endpoint);
        } catch (error: any) {
            return rejectWithValue(error.message ?? "Unknown error occured when trying to fetch random card");
        }
    }
);

export const cardDataSlice = createSlice({
    name: "cardData",
    initialState: cardDataInitialState,
    reducers: {
        resetCardData: () => {
            return cardDataInitialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCardDataByName.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
                state.cards = null;
                state.error = null;
            })
            .addCase(loadCardDataByName.fulfilled, (state, action: PayloadAction<Card[]>) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = false;
                state.cards = action.payload;
                state.error = null;
            })
            .addCase(loadCardDataByName.rejected, (state, action) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = true;
                state.cards = null;
                state.error = typeof action.payload === "string" ? action.payload : "Unexpected error occurred";
            })
            .addCase(loadCardDataByFuzzyName.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
                state.cards = null;
                state.error = null;
            })
            .addCase(loadCardDataByFuzzyName.fulfilled, (state, action: PayloadAction<Card[]>) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = false;
                state.cards = action.payload;
                state.error = null;
            })
            .addCase(loadCardDataByFuzzyName.rejected, (state, action) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = true;
                state.cards = null;
                state.error = typeof action.payload === "string" ? action.payload : "Unexpected error occurred";
            })
            .addCase(loadCardDataByLevel.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
                state.cards = null;
                state.error = null;
            })
            .addCase(loadCardDataByLevel.fulfilled, (state, action: PayloadAction<MonsterCard[]>) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = false;
                state.cards = action.payload;
                state.error = null;
            })
            .addCase(loadCardDataByLevel.rejected, (state, action) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = false;
                state.cards = null;
                state.error = typeof action.payload === "string" ? action.payload : "Unexpected error occurred";
            })
            .addCase(loadRandomCardData.pending, (state) => {
                state.isLoadingCards = true;
                state.failedToLoadCards = false;
                state.cards = null;
                state.error = null;
            })
            .addCase(loadRandomCardData.fulfilled, (state, action: PayloadAction<Card[]>) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = false;
                state.cards = action.payload;
                state.error = null;
            })
            .addCase(loadRandomCardData.rejected, (state, action) => {
                state.isLoadingCards = false;
                state.failedToLoadCards = false;
                state.cards = null;
                state.error = typeof action.payload === "string" ? action.payload : "Unexpected error occurred";
            })
    }
});

export const { resetCardData } = cardDataSlice.actions;
export const getAllCards = (state: RootState) => state.cardData.cards;
export const isLoadingCards = (state: RootState) => state.cardData.isLoadingCards;
export const failedToLoadCards = (state: RootState) => state.cardData.failedToLoadCards;
export const getErrorMessage = (state: RootState) => state.cardData.error;

export default cardDataSlice.reducer;