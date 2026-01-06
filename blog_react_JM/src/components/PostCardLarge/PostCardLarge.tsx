// Import Style
import style from "./PostCardLarge.module.css"

// Import React
// Import Contexts
// Import Components
import Comments from "../Comments/Comments"

// Import Types
import type { PostType } from "../../types/Types"

// Import Others
import { TagSvg } from "../SvgIcons/SvgIcons"


function PostCardLarge ( props:PostType ) {
    const {title, subtitle, text, category, image, published, tags} = props


    return (
        <div className={style.cardLarge}>
                <span className={style.published}>
                    {new Date(published).toLocaleString("es-AR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </span>
                <h1>{title}</h1>
                <span>{category.name}</span>
                <img src={image} alt={title}/>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <div>
                    {tags.map(tag => (<span key={tag.id} className={style.tags}><TagSvg/>{tag.name}</span>))}
                </div>
                <Comments />
        </div>
    )
}

export default PostCardLarge