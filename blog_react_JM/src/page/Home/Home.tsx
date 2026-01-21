// Import Style
import style from "./Home.module.css"

// Import React
import { useContext, useEffect, useState } from "react"

// Import Contexts
import AuthContext from "../../context/AuthContext"
import PostContext from "../../context/PostsContext";

// Import Components
import PostCardSmall from "../../components/PostCardSmall/PostCardSmall";
import PostCardMedium from "../../components/PostCardMedium/PostCardMedium";
import InfoBanner from "../../components/InfoBanner/InfoBanner";

// Import Types
// Import Others
import image1 from "../../../public/imagen1.jpg"

// import image2 from "../../../public/imagen2.jpg"


function Home() {
    const [ mostRelevantSelect, 
        // setMostRelevantSelect 
    ] = useState(true);

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

    return (<>
        <main className={style.mainContainer}>

            <div className={style.carousel}>
                    <img src={image1} alt="Imagen 1"/>
                    <div className={style.slider}>
                            <h1>El mate, tradición que nos une</h1>
                            <h3>El comienzo de cada encuentro.</h3>
                    </div>
            </div>


            <section className={style.mostRelevant}>
                <ul>
                    <li className={ mostRelevantSelect ? style.mostRelevantSelect : ""} > 
                        <button 
                        // onClick={() => setMostRelevantSelect(!mostRelevantSelect)}
                        >Novedades</button>
                    </li>
                    {/* <li className={ mostRelevantSelect ? "" : style.mostRelevantSelect } > 
                        <button onClick={() => setMostRelevantSelect(!mostRelevantSelect)}>Lo mas relevante</button>
                    </li> */}
                </ul>
                {posts.filter((p => p.id < 3)).map(post => {
                    return (
                        <PostCardMedium
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
            </section>
            
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
        </main>
        <InfoBanner/>
    </>
    )
}

export default Home


