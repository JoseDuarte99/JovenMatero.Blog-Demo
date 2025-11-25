import { createContext, type Dispatch, type SetStateAction } from "react";

interface SearchProviderType {
    onSearch: string;
    setOnSearch: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext<SearchProviderType | null>(null);

export default SearchContext;