// Import Style
// Import React
import { createContext, type Dispatch, type SetStateAction } from "react";

// Import Contexts
// Import Components
// Import Types
// Import Others


interface SearchContextType {
    onSearch: string;
    setOnSearch: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext<SearchContextType | null>(null);

export default SearchContext;