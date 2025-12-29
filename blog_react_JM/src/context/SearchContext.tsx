import { createContext, type Dispatch, type SetStateAction } from "react";

interface SearchContextType {
    onSearch: string;
    setOnSearch: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext<SearchContextType | null>(null);

export default SearchContext;