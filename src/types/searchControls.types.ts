type searchTerm = string | [number, number] | null;

export interface SearchControlsInitialState {
    searchBy: string,
    searchTerm: searchTerm
};

export type SearchControlsAction = 
    | { type: "SET_SEARCHBY", payload: { text: string } }
    | { type: "SET_SEARCHTERM", payload: { searchTerm: searchTerm } }