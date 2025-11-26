// Import Style
import style from "./DropdownMenu.module.css"

// Import React
import { useContext } from "react";

// Import Contexts
import AuthContext from "../../context/AuthContext";

// Import Components
// Import Types

// Import Others
import { HomeSvg, SummarySvg, OnSaleSvg, LoginSvg, RegisterSvg, LogoutSvg, ProfileSvg,
        // FashionSvg, OfferSvg, SuperMarketSvg, PlaySvg, HistorySvg, HeadsetSvg, BestSellingSvg, OfficialStoreSvg, CategoriesSvg, DownloadSvg 
    } from "./DropdownMenuIcons"
import { Link } from "react-router"


type DropdownMenuType = {
    onClickDropdownMenu: () => void;
    logoutFn: () => void;
}

function DropdownMenu({onClickDropdownMenu, logoutFn} :DropdownMenuType) {

    // AUTH-CONTEXT
    const authContext = useContext(AuthContext)
    if (!authContext){throw new Error('Authentication Error');}
    const {currentUser} = authContext;


    return (
        <div className={style.itemsMenu}>
            <section className={style.profile}>
                {profileNone}
                <div>
                    <h5>Bienvenido</h5>
                    <p> Pronto podras formar parte de nuestra comunidad...</p>
                </div>
            </section>
            <ul className={style.options}>
                { currentUser 
                ? <>
                    <li>{LogoutSvg}<Link to={"/home"} onClick={logoutFn} >Cerrar Sesión</Link></li>
                    <li>{ProfileSvg}<Link to={"/me"} onClick={onClickDropdownMenu} >Mi Perfil</Link></li>
                </>
                : <>
                    <li>{LoginSvg}<Link to={"/login"} onClick={onClickDropdownMenu} >Iniciar Sesión</Link></li>
                    <li>{RegisterSvg}<Link to={"/register"} onClick={onClickDropdownMenu} >Registrarme</Link></li>
                </>
                }
                <li>{HomeSvg}<Link to={"/home"} onClick={onClickDropdownMenu} >Inicio</Link></li>
                <li>{SummarySvg}<Link to={"/*"} onClick={onClickDropdownMenu} >Ayuda</Link></li>
                <li>{OnSaleSvg}<Link to={"/*"} onClick={onClickDropdownMenu} >Catalogo</Link></li>
            </ul>
        </div>
    )
}

export default DropdownMenu


const profileNone = <svg className="avatar-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo de fondo */}
    <circle cx="100" cy="100" r="100" fill="#e2e8f0"/>
    
    {/* Cabeza (círculo superior) */}
    <circle cx="100" cy="75" r="35" fill="#94a3b8"/>
    
    {/* Cuerpo (forma semicircular) */}
    <path d="M 100 110 Q 65 110 45 135 Q 45 160 45 200 L 155 200 Q 155 160 155 135 Q 135 110 100 110 Z" fill="#94a3b8"/>
</svg>