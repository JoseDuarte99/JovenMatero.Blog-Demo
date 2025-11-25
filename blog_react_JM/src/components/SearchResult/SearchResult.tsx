// Import Style
import style from "./SearchResult.module.css"

// Import React
import { useContext } from "react";

// Import Contexts
import SearchContext from "../../context/SearchContext";

// Import Components
// Import Types
// Import Others


function SearchResult() {

    // SEARCH CONTEXT 
    const search = useContext(SearchContext);
    if (!search){throw new Error('Search must be used within a SearchProvider')}
    const {onSearch} = search;

    return (
        <div className={style.searchResult}>
            {onSearch}
        </div>
    )
}

export default SearchResult