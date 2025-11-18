// Import Style
import style from "./Navbar.module.css"

// Import React
import { useContext } from "react";
import { Link } from "react-router";

// Import Contexts
import AuthContext from "../../context/AuthContext";

// Import Components
import Search from "../Search/Search"


// Import Types
// Import Others


function Navbar() {

    // AUTH-CONTEXT
    const authContext = useContext(AuthContext)
    if (!authContext){throw new Error('Authentication Error');}
    const {accessToken, refreshToken, currentUser, logout} = authContext;


    const logoutFn = () => {
        logout(accessToken!,refreshToken!)
        // navigate("/home")
    }


    return (
        <header className={style.header}>
            <nav className={style.navbar}>

        
                <div className={style.searchAndCategories}>
                    <span>
                        <p>Categorías</p>
                        {chevronDownCircleSvg}
                    </span>
                    <Search />
                </div>
                <div className={style.logo}>Logo</div>
                <ul className={style.menu}>
                    <Link to={"/home"}>Inicio</Link>
                    <Link to={"*"}>Nosotros</Link>
                    { currentUser 
                        ?<>
                            <Link to={"/me"}>Mi Perfil</Link>
                            <li onClick={logoutFn}>Cerrar Sesion</li>
                        </>
                        : <>
                            <Link to={"/register"}>Registrarme</Link>
                            <Link to={"/login"}>Iniciar Sesion</Link>
                        </>
                    }
                </ul>

            </nav>
        </header> 
        
    )
}

export default Navbar


const chevronDownCircleSvg = <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        >
        <title>chevron-down-circle</title>
        <desc>Created with Sketch Beta.</desc>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-204, -1087)" fill="white">
            <path d="M227.121,1098.46 L220,1105.59 L212.879,1098.46 C212.488,1098.07 211.855,1098.07 211.464,1098.46 C211.074,1098.86 211.074,1099.49 211.464,1099.88 L219.122,1107.54 C219.361,1107.78 219.689,1107.85 220,1107.79 C220.311,1107.85 220.639,1107.78 220.879,1107.54 L228.536,1099.88 C228.926,1099.49 228.926,1098.86 228.536,1098.46 C228.145,1098.07 227.512,1098.07 227.121,1098.46 Z M220,1117 C212.268,1117 206,1110.73 206,1103 C206,1095.27 212.268,1089 220,1089 C227.732,1089 234,1095.27 234,1103 C234,1110.73 227.732,1117 220,1117 Z M220,1087 C211.164,1087 204,1094.16 204,1103 C204,1111.84 211.164,1119 220,1119 C228.837,1119 236,1111.84 236,1103 C236,1094.16 228.837,1087 220,1087 Z" />
            </g>
        </g>
            </svg>