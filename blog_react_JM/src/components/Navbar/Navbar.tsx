// Import Style
import style from "./Navbar.module.css"

// Import React
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

// Import Contexts
import AuthContext from "../../context/AuthContext";

// Import Components
import Search from "../Search/Search"


// Import Types
// Import Others
import { LogoSVG } from "../SvgIcons/SvgIcons";

function Navbar() {

    // Dropdown Menu Status
    const [menuValue] = useState(false); 

    // AUTH-CONTEXT
    const authContext = useContext(AuthContext)
    if (!authContext){throw new Error('Authentication Error');}
    const {accessToken, refreshToken, currentUser, logout} = authContext;

    const navigate = useNavigate();

    const logoutFn = () => {
        logout(accessToken!,refreshToken!)
        navigate("/home")
        
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
                <span className={style.search}>
                    {lupSvg}
                </span>
                <div className={style.logo}>
                    <LogoSVG fill="#fff" />
                </div>
                <ul className={style.menu}>
                    <Link to={"/home"}>Inicio</Link>
                    <Link to={"*"}>Nosotros</Link>
                    { currentUser 
                        ?<>
                            <Link to={"/me"}>Mi Perfil</Link>
                            <Link to={"/home"} onClick={logoutFn}>Cerrar Sesion</Link>
                        </>
                        : <>
                            <Link to={"/register"}>Registrarme</Link>
                            <Link to={"/login"} >Iniciar Sesion</Link>
                        </>
                    }
                </ul>

                <label htmlFor="menu" className={style.activeMenu}>
                    { menuValue   
                    ?   <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                            <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                    :   <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                            <path d="M4 6h16v1H4zM4 11h16v1H4zM4 16h16v1H4z" />
                        </svg>}
                </label>
                    {/* <div className={style.itemsMenu}>
                        <DropdownMenu onClickDropdownMenu={() => setMenuValue(!menuValue)}/>
                    </div> */}

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


const lupSvg = <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z" stroke="#fff5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z" fill="#fff5"></path> </g></svg>