// Import Style
import style from "./Home.module.css"

// Import React
import { useContext } from "react"
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

    // const navigate = useNavigate();
    console.log('Usuario Actual:', currentUser)
    

    return (
        <div className={style.container}>
            {accessToken ? <p>AccessToken Existente</p> : ""}
            {refreshToken ? <p>RefreshToken Existente</p> : ""}
        </div>
    )
}

export default Home