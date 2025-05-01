export type SearchTerm = string | null;

export interface SearchControlsState {
    searchBy: string,
    searchTerm: SearchTerm
};