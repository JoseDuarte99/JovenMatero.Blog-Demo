// Import Style
import style from "./SearchResult.module.css"

// Import React
import { useContext } from "react";
import { Link } from "react-router";


// Import Contexts
import SearchContext from "../../context/SearchContext";
import PostContext from "../../context/PostsContext";


// Import Components
// Import Types
// Import Others


function SearchResult() {

    // POSTS-CONTEXT
    const postContext = useContext(PostContext)
    if (!postContext){throw new Error('Authentication Error');}
    const { posts } = postContext;

    // SEARCH CONTEXT 
    const search = useContext(SearchContext);
    if (!search){throw new Error('Search must be used within a SearchProvider')}
    const { onSearch, setOnSearch } = search;

    // Filtering posts that start with the input
    const searchedPost = posts.filter(post => post.title.toLowerCase().includes(onSearch.toLowerCase()));

    
    return (
        <div className={style.searchResult}>

            { searchedPost.length != 0
            ? <div className={style.searchedPost}>
                {searchedPost.map(post => {
                    return (
                    <Link to={`/post/${post.id}`} key={post.id} className={style.suggestions} onClick={() => setOnSearch("")}>
                        <img src={post.image} alt={post.title} />
                        <span>{post.title}</span>
                    </Link>
                )})}
                </div>
            : <p>Sin Resultados</p>
            }


        </div>
    )
}

export default SearchResult