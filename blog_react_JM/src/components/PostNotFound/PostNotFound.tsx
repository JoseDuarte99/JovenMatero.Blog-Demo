// Import Style
import style from "./PostNotFound.module.css"

// Import React
import { Link } from "react-router"

// Import Contexts
// Import Others
import postNotFound from "../../../public/PostNoFound.png"
// Import Svg



function PostNotFound(){
    
    return (
        
        <section className={style.postNoFound}>
            <img src={postNotFound} alt="Gaucho tomando mates, desconcertado al no ver ninguna publicacion" />
            <p>PUBLICACION NO ENCONTRADA</p>
            <Link to="/" className={style.goHome}> Ir a la página principal</Link>
        </section>
    )
};

export default PostNotFound

