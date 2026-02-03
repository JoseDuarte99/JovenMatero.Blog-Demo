// Import Style
import style from "./CategoriesMenu.module.css"

// Import React
import { useContext, useState } from "react";
import { Link } from "react-router";

// Import Contexts
import PostContext from "../../context/PostsContext";
import { normalizeString } from "../../features/Features";

// Import Components
// Import Types
// Import Others

type CategoriesMenuType = {
    setCategoryState: () => void;
}

function CategoriesMenu( { setCategoryState }: CategoriesMenuType) {

    const [ selectedCategory, setSelectedCategory ] = useState("");

    // POSTS-CONTEXT
    const postContext = useContext(PostContext)
    if (!postContext){throw new Error('Authentication Error');}
    const { posts, isError } = postContext;

    // Categories of all posts
    const categories = [...new Set(posts.map(post => post.category.name))];

    // Posts with the same category
    const postByCategory = posts.filter((p) => p.category.name === selectedCategory );

    const filterPosts =  selectedCategory ? postByCategory : posts;

    return (
        <div className={style.categoriesMenu}>
            { isError ? <p className={style.error}>Sin resultados</p>
            : <>
                <ul className={style.categoriesList}>
                    { categories.map((category, index) => {
                        return (
                            <li key={index} onClick={() => setSelectedCategory(category)} className={selectedCategory == category ? style.selectedCategory : ""}>
                                {category} {selectedCategory == category && chevronRightCircleSvg }
                            </li>
                        )
                    })}
                </ul>
                <div className={style.filteredPosts}>
                {filterPosts.map(post => {
                    return (
                    <Link to={`/post/${normalizeString(post.title)}`} key={post.id} className={style.suggestions} onClick={() => setCategoryState()}>
                        <img src={post.image} alt={post.title} />
                        <span>{post.title}</span>
                    </Link>
                )})}
                </div>
            </> }
        </div>
    )
}

export default CategoriesMenu

const chevronRightCircleSvg = (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>chevron-right-circle</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-204, -1087)" fill="white">
            <g transform="rotate(270 220 1103)">
            <path d="M227.121,1098.46 L220,1105.59 L212.879,1098.46 C212.488,1098.07 211.855,1098.07 211.464,1098.46 C211.074,1098.86 211.074,1099.49 211.464,1099.88 L219.122,1107.54 C219.361,1107.78 219.689,1107.85 220,1107.79 C220.311,1107.85 220.639,1107.78 220.879,1107.54 L228.536,1099.88 C228.926,1099.49 228.926,1098.86 228.536,1098.46 C228.145,1098.07 227.512,1098.07 227.121,1098.46 Z M220,1117 C212.268,1117 206,1110.73 206,1103 C206,1095.27 212.268,1089 220,1089 C227.732,1089 234,1095.27 234,1103 C234,1110.73 227.732,1117 220,1117 Z M220,1087 C211.164,1087 204,1094.16 204,1103 C204,1111.84 211.164,1119 220,1119 C228.837,1119 236,1111.84 236,1103 C236,1094.16 228.837,1087 220,1087 Z" />
            </g>
        </g>
        </g>
    </svg>
);
