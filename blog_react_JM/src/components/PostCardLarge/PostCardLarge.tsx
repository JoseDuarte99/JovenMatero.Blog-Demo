// Import Style
import style from "./PostCardLarge.module.css"

// Import React
// Import Contexts
// Import Components
// Import Types
import type { PostType } from "../../types/Types"

// Import Others
import { TagSvg } from "../SvgIcons/SvgIcons"

function PostCardLarge ( props:PostType ) {
    const {title, subtitle, text, category, image, published, tags} = props


    return (
        <div className={style.cardLarge}>
                <span className={style.published}>{published.toString()}</span>
                <h1>{title}</h1>
                <span>{category.name}</span>
                <img src={image} alt={title}/>
                <h3>{subtitle}</h3>
                <p>{text}</p>
                <div>
                    {tags.map(tag => (<span key={tag.id} className={style.tags}><TagSvg/>{tag.name}</span>))}
                </div>
        </div>
    )
}

export default PostCardLarge