import style from "./Home.module.css"
import { Link } from "react-router"


function Home() {
    return (
        <div className={style.container}>
            <Link to={"/login"}> Iniciar Sesión </Link>
            <Link to={"/login"}> Cerrar Sesión </Link>
            <Link to={"/me"}> Mi Perfil </Link>
        </div>
    )
}

export default Home