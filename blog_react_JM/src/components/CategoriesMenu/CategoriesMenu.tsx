// Import Style
import style from "./CategoriesMenu.module.css"

// Import React
import { useContext, useState } from "react";
import { Link } from "react-router";

// Import Contexts
import PostContext from "../../context/PostsContext";

// Import Components
// Import Types
// Import Others

function CategoriesMenu() {

    const [ selectedCategory, setSelectedCategory ] = useState("");

    // POSTS-CONTEXT
    const postContext = useContext(PostContext)
    if (!postContext){throw new Error('Authentication Error');}
    const { posts } = postContext;

    // Categories of all posts
    const categories = posts.map(post => post.category);
    console.log(new Set(categories))


    // Posts with the same category
    const postByCategory = posts.filter((p) => p.category.name === selectedCategory );

    const filterPosts =  selectedCategory ? postByCategory : posts;

    return (
        <div className={style.categoriesMenu}>
            <ul>
                { categories.map(category => {
                    return (
                        <li key={category.id} onClick={() => setSelectedCategory(category.name)}>
                            {category.name}
                        </li>
                    )
                })}
            </ul>
            <section>
            {filterPosts.map(post => {
                return (
                <Link to={`/post/${post.id}`} key={post.id} className={style.suggestions}>
                    <img src={post.image} alt={post.title} />
                    <span>{post.title}</span>
                </Link>
            )})}
            </section>
        </div>
    )
}

export default CategoriesMenu