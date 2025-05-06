import SearchControls from "./features/searchControls/SearchControls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getSearchBy, getSearchTerm } from "@/features/searchControls/searchControlsSlice";
import {
  getAllCards,
  loadCardDataByFuzzyName,
  loadCardDataByName,
  isLoadingCards
} from "@/features/cardData/cardDataSlice";
import ViewCard from "./components/ViewCard";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(getAllCards);
  const searchTerm = useSelector(getSearchBy);
  const searchBy = useSelector(getSearchTerm);
  return (
    <>
      <h1 className="title is-1 has-text-centered">Yu-Gi-Oh! Card App (Version 2)</h1>
      <SearchControls />
      {cards?.length === 1 && <ViewCard card={cards[0]} />}
    </>
  )
}

export default App
