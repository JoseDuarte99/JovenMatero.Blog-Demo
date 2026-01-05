// Import Style
import style from "./PostCardMedium.module.css"

// Import React
import { Link } from "react-router"

// Import Contexts
// Import Components
// Import Types
import type { PostType } from "../../types/Types"

// Import Others
import { TagSvg } from "../SvgIcons/SvgIcons"


function PostCardMedium( props:PostType ) {
    const {title, subtitle, text, category, image, published, tags, id} = props


    return (
        <Link to={`/posteo/${id}`} className={style.cardMedium}>
            <div>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <span>{category.name}</span>
                <p>{text}</p>
                <span className={style.published}>{published.toString()}</span>
                <div>
                    {tags.map(tag => (<span key={tag.id} className={style.tags}><TagSvg/>{tag.name}</span>))}
                </div>
            </div>
            <img src={image} alt={title}/>
        </Link>
    )
}

export default PostCardMedium