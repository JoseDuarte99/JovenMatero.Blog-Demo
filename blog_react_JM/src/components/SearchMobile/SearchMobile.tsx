// Import Style
import style from "./SearchMobile.module.css"

// Import React}
import { useContext } from "react";

// Import Contexts
import SearchContext from "../../context/SearchContext";

// Import Components
import Search from "../Search/Search";
import SearchResult from "../SearchResult/SearchResult";

// Import Types
// Import Others

function CategoriesMenu() {

    // SEARCH CONTEXT 
    const search = useContext(SearchContext);
    if (!search){throw new Error('Search must be used within a SearchProvider')}
    const {onSearch, setOnSearch} = search;


    return (
        <div className={style.searchMobile}>
            <Search onSearch={onSearch} setOnSearch={setOnSearch} />
            { onSearch && <SearchResult/>}
        </div>
    )
}

export default CategoriesMenu