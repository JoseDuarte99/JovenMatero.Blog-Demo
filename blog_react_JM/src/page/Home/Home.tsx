// Import Style
import style from "./Home.module.css"

// Import React
import { useContext, useEffect } from "react"

// Import Contexts
import AuthContext from "../../context/AuthContext"
import PostContext from "../../context/PostsContext";

// Import Components
import PostCardSmall from "../../components/PostCardSmall/PostCardSmall";


// Import Types
// Import Others


function Home() {

    // AUTH-CONTEXT
    const authContext = useContext(AuthContext)
    if (!authContext){throw new Error('Authentication Error');}
    const {currentUser} = authContext;

    // POSTS-CONTEXT
    const postContext = useContext(PostContext)
    if (!postContext){throw new Error('Authentication Error');}
    const { posts } = postContext;

    // const navigate = useNavigate();
    useEffect(() => {
        console.log('Usuario Actual:', currentUser)
    },[currentUser])
    

    console.log(posts)
    return (
            
            
            <section className={style.allPosts}>
                <h2>Contenido</h2>
                <p>Mantente al dia de las ultimas novedades...</p>
                <div>
                    {posts.map(post => {
                        return (
                            <PostCardSmall
                                key={post.id}
                                id={post.id}
                                image={post.image}
                                title={post.title}
                                subtitle={post.subtitle}
                                category={post.category}
                                text={post.text}
                                published={post.published}
                                tags={post.tags}
                            />)})}
                </div>
            </section>

    )
}

export default Home