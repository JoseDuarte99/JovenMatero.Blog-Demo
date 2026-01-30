// Import Style

import style from "./SimpleHeader.module.css"

// Import React
import { Link } from "react-router";

// Import Others
import { LogoSVG } from "../SvgIcons/SvgIcons";

// Import Context

// import Type

function SimpleHeader() {

    return (
        <header className={style.header}>
            <div>
                <Link to="/home" 
                    className={style.logo}>
                    < LogoSVG fill="#fff"/>
                </Link>
                <Link to="/about"
                    className={style.about} >
                    Nosotros
                </Link>
            </div>
        </header>
    )
}

export default SimpleHeader