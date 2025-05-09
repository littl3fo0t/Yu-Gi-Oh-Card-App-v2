import Introduction from "@/components/Introduction";
import Disclaimer from "@/components/Disclaimer";
import SearchControls from "@/features/searchControls/SearchControls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { getSearchBy } from "@/features/searchControls/searchControlsSlice";
import {
  getAllCards,
  getErrorMessage,
  failedToLoadCards,
  resetCardData
} from "@/features/cardData/cardDataSlice";
import ViewCard from "./components/ViewCard";
import Error from "@/components/Error";
import Warning from "@/components/Warning";
import CardData from "@/features/cardData/CardData";
import { useState, useEffect } from "react";
import type { Card } from "@/types/card.types";
import FilterCardData from "@/components/FilterCardData";
import filterCardData from "@/utils/filterCardData";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(getAllCards);
  const cardsLength = cards ? cards.length : 0;
  const searchBy = useSelector(getSearchBy);
  const [cardToView, setCardToView] = useState<Card | null>(null);
  const [filterTerms, setFilterTerms] = useState<string[]>([]);
  const [filteredResults, setFilteredResults] = useState<Card[]>([]);
  const [spellChkBox, setSpellChkBox] = useState(false);
  const [trapChkBox, setTrapChkBox] = useState(false);
  const [monsterChkBox, setMonsterChkBox] = useState(false);
  const onlySpellCards = cards ? cards.every(card => card.frameType === "spell") : false;
  const onlyTrapCards = cards ? cards.every(card => card.frameType === "trap") : false;
  const onlyMonsterCards = cards ? cards.every(card => "attribute" in card) : false;
  const showFilterOptions = !onlySpellCards && !onlyTrapCards && !onlyMonsterCards;

  const addFilterTerm = (term: string) => {
    setFilterTerms(prev => [...prev, term]);
  };

  const removeFilterTerm = (termToRemove: string) => {
    setFilterTerms(prev => prev.filter(term => term !== termToRemove))
  };

  // Clear card data when the search by changes
  useEffect(() => {
    dispatch(resetCardData());
  }, [searchBy, dispatch]);

  // Set the card to view
  useEffect(() => {
    if (cards && (searchBy === "name" || searchBy === "random" || cards.length === 1)) {
      setCardToView(cards[0]);
    } else {
      setCardToView(null);
    }
  }, [searchBy, cards, dispatch]);

  // Handle changes to the filter terms
  useEffect(() => {
    if (cards) {
      if (filterTerms.length === 0) {
        setFilteredResults(cards);
      } else {
        const uniqueResults = new Set<Card>();
        filterTerms.forEach(term => {
          const results = filterCardData(term, cards);
          results.forEach(card => uniqueResults.add(card));
        });
        setFilteredResults([...Array.from(uniqueResults)].sort((a, b) => {
          return a.name.localeCompare(b.name);
        }));
      }
    } else {
      setFilteredResults([]);
    }
  }, [filterTerms, cards, dispatch]);

  const errorMessage = useSelector(getErrorMessage);
  const failedToLoad = useSelector(failedToLoadCards);
  const [error, setError] = useState(errorMessage);

  return (
    <>
      <h1 className="title is-1 has-text-centered">
        Yu-Gi-Oh! Card App (Version 2)
      </h1>

      <Introduction />

      <Disclaimer />

      <SearchControls
        setError={setError}
        setSpellChkBox={setSpellChkBox}
        setTrapChkBox={setTrapChkBox}
        setMonsterChkBox={setMonsterChkBox}
        setFilterTerms={setFilterTerms}
      />

      {cardToView && <ViewCard card={cardToView} />}

      {failedToLoad && <Error error={error} />}

      {cardsLength > 1000 && <Warning />}

      {(cards && cards.length > 1) && (
        <div className="box">
          {showFilterOptions && (
            <FilterCardData
              cards={cards}
              addFilterTerm={addFilterTerm}
              removeFilterTerm={removeFilterTerm}
              spellChkBox={spellChkBox}
              trapChkBox={trapChkBox}
              monsterChkBox={monsterChkBox}
              setSpellChkBox={setSpellChkBox}
              setTrapChkBox={setTrapChkBox}
              setMonsterChkBox={setMonsterChkBox}
            />
          )}
          <CardData cards={filterTerms.length > 0 ? filteredResults.slice(0, 1000) : cards.slice(0, 1000)} setCardToView={setCardToView} />
        </div>
      )}
    </>
  )
}

export default App
