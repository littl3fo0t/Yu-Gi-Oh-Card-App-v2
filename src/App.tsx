import Introduction from "@/components/Introduction";
import Disclaimer from "@/components/Disclaimer";
import SearchControls from "@/features/searchControls/SearchControls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getSearchBy, getSearchTerm } from "@/features/searchControls/searchControlsSlice";
import {
  getAllCards,
  getErrorMessage,
  failedToLoadCards
} from "@/features/cardData/cardDataSlice";
import ViewCard from "./components/ViewCard";
import Error from "@/components/Error";
import Warning from "@/components/Warning";
import CardData from "@/features/cardData/CardData";
import { useState } from "react";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(getAllCards);
  const cardsLength = cards ? cards.length : 0;

  const errorMessage = useSelector(getErrorMessage);
  const failedToLoad = useSelector(failedToLoadCards);
  const [error, setError] = useState(errorMessage);

  return (
    <>
      <h1 className="title is-1 has-text-centered">Yu-Gi-Oh! Card App (Version 2)</h1>
      <Introduction />
      <Disclaimer />
      <SearchControls setError={setError} />
      {cards?.length === 1 && <ViewCard card={cards[0]} />}
      {failedToLoad && <Error error={error} />}
      {cardsLength > 1000 && <Warning />}
      {cardsLength > 1 && <CardData cards={cards?.slice(0, 999)} />}
    </>
  )
}

export default App
