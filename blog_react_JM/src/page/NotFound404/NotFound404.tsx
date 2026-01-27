// Import Style
import { useContext } from "react";
import style from "./NotFound404.module.css"

// Import React
import { Link } from "react-router"

// Import Contexts
import PostContext from "../../context/PostsContext";

// Import Others
import notFound404Img  from "../../../public/NotFound404.png"
import { normalizeString } from "../../features/Features";

// Import Svg



function NotFound404(){
    
        // POSTS-CONTEXT
    const postContext = useContext(PostContext)
    if (!postContext){throw new Error('Authentication Error');}
    const { posts } = postContext;

    const randomPosts = posts .sort(() => Math.random() - 0.5) .slice(0, 4);

    return (
        
        <div className={style.notFound404}>
            <h4>La página que buscas, no existe</h4>
            <img src={notFound404Img} alt="Gaucho tomando mates, pero confundido." />
            <Link to="/" className={style.goHome}> Ir a la página principal</Link>
            <section className={style.randomSection}>
                <h4>Tal vez podria interesarte . . .</h4>
                <div>
                    {randomPosts.map(post => {
                        return (
                        <Link to={`/post/${normalizeString(post.title)}`} key={post.id} className={style.randomPost} onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
                            <img src={post.image} alt={post.title} />
                            <h5>{post.title}</h5>
                        </Link>
                    )})}
                </div>
            </section>
        </div>
    )
};

export default NotFound404
