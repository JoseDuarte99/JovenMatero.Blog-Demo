// Import Style
import style from "./Home.module.css"

// Import React
import { useContext } from "react"
import { Link} from "react-router"

// Import Contexts
import AuthContext from "../../context/AuthContext"

// Import Components
// Import Types
// Import Others


function Home() {

    // AUTH-CONTEXT
    const authContext = useContext(AuthContext)
    if (!authContext){throw new Error('Authentication Error');}
    const {accessToken, refreshToken, currentUser} = authContext;

    console.log('Usuario Actual:', currentUser)

    return (
        <div className={style.container}>
            { currentUser 
                ? <button> Cerrar Sesión </button>
                : <Link to={"/login"}> Iniciar Sesión </Link>
            }
            {accessToken ? <p>AccessToken Existente</p> : ""}
            {refreshToken ? <p>RefreshToken Existente</p> : ""}
            <Link to={"/me"}> Mi Perfil </Link>
        </div>
    )
}

export default Home