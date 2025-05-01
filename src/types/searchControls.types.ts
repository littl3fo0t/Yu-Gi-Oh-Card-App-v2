export type SearchTerm = string | [number, number] | null;

export interface SearchControlsState {
    searchBy: string,
    searchTerm: SearchTerm
};