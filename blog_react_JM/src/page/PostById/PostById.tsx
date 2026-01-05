// Import Style
import style from "./PostById.module.css"

// Import React
import { useContext } from "react";
import { Link, useParams } from "react-router";


// Import Contexts
import PostContext from "../../context/PostsContext";

// Import Components
import PostCardLarge from "../../components/PostCardLarge/PostCardLarge"

// Import Types
// Import Others

function PostById() {

  // POSTS-CONTEXT
  const postContext = useContext(PostContext)
  if (!postContext){throw new Error('Authentication Error');}
  const { posts } = postContext;

  const { id } = useParams<{ id: string }>();
  const postById = posts.find((p) => p.id === Number(id));

  // Posts with the same category
  const postByCategory = posts.filter(
    (p) => p.category === postById?.category && p.id !== postById?.id
  );

  // Four latest posts
  const otherPosts = posts
    .filter((p) => p.id !== postById?.id)
    .slice(-4);

  // Suggestions: prefer same category, fallback to latest
  const postSuggestions = postByCategory.length > 0 ? postByCategory : otherPosts;

  return (
    <div className={style.postById}>
      <aside className={style.asideContainer}>
        <h4>Tambien podria interesarte:</h4>
        <section>
          {postSuggestions.map(post => {
            return (
              <Link to={`/posteo/${post.id}`} key={post.id} className={style.suggestions}>
                <img src={post.image} alt={post.title} />
                <h5>{post.title}</h5>
              </Link>
          )})}
        </section>
      </aside>
      <main className={style.mainContainer}>
        {postById 
        ? <PostCardLarge
            key={postById.id}
            id={postById.id}
            image={postById.image}
            title={postById.title}
            subtitle={postById.subtitle}
            category={postById.category}
            text={postById.text}
            published={postById.published}
            tags={postById.tags}
        />
        : <p>No existe el posteo</p> }
      </main>
    </div>
  )
}

export default PostById