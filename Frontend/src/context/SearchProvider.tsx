import { useState, type ReactNode } from "react";
import SearchContext from "./SearchContext"

interface SearchProviderType {
    children: ReactNode;
}

const SearchProvider = ({children} :SearchProviderType) => {
    const [onSearch, setOnSearch] = useState("");

    return (
        <SearchContext.Provider value={{onSearch, setOnSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;