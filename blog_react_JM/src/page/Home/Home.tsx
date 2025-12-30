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
    const {accessToken, refreshToken, currentUser} = authContext;

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
        <div className={style.container}>
            {accessToken ? <p>AccessToken Existente</p> : ""}
            {refreshToken ? <p>RefreshToken Existente</p> : ""}
                {posts.filter((p) => p.id == 1).map(post => {
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
            {/* {posts.map(post => {
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
                    />)})} */}
        </div>
    )
}

export default Home