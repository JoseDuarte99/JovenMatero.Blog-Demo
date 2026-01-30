// Import Style
import style from "./PostCardLarge.module.css"

// Import React
// Import Contexts
// Import Components
import Comments from "../Comments/Comments"
import ImageCarousel from "../ImageCarousel/ImageCarousel"

// Import Types
import type { PostType } from "../../types/Types"

// Import Others
import { TagSvg } from "../SvgIcons/SvgIcons"





function PostCardLarge ( props:PostType ) {
    const {title, subtitle, text, category, image, published, tags, images} = props

    console.log()

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
                <span className={style.category}>{category.name}</span>
                { images?.length === 0
                ? <img src={image} alt={title}/>
                :<ImageCarousel 
                    mainImage={image} 
                    images={images} 
                    alt={title} 
                /> }
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