// Import Style
import style from "./Catalog.module.css"

// Import React
import { Link } from "react-router"

// Import Contexts
// Import Components
// Import Types
// Import Others
import soonCatalog  from "../../../public/GauchoTomandoMates.png"




function Catalog() {
    return (
        <section className={style.catalog}>
                <div className={style.catalogHeader}>
                    <div>
                        <h3>Catalogo de Productos</h3>
                        <span className={style.soon}>Muy pronto!</span>
                    </div>
                    <SvgCatalog />
                </div>
                <div className={style.catalogBody}>
                    <img src={ soonCatalog } alt="A la espera del catalogo, con unos buenos mates." />
                    <p>Pronto podras conocer de todos nuestros productos disponibles.</p>
                </div>

                <Link to="/home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>Ir a la pagina principal</Link>
        </section>
    )
}

export default Catalog


const SvgCatalog = () => (
    <svg
    
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fill="#dfdfdf"
        stroke="#dfdfdf"
        viewBox="0 0 496 496"
    >
        <path d="M304 416H16V64h304V24c0-13.232-10.768-24-24-24H24C10.768 0 0 10.768 0 24v448c0 13.232 10.768 24 24 24h272c13.232 0 24-10.768 24-24v-56h-16zM16 24c0-4.416 3.584-8 8-8h272c4.416 0 8 3.584 8 8v24H16V24zm288 448c0 4.416-3.584 8-8 8H24c-4.416 0-8-3.584-8-8v-40h288v40z" />
        <path d="M128 448h64v16h-64zM280 160c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80zm-144 0c0-35.288 28.712-64 64-64s64 28.712 64 64-28.712 64-64 64-64-28.712-64-64zM264 80h200v16H264zM480 80h16v16h-16zM264 224h184v16H264zM464 224h16v16h-16zM296 128h152v16H296zM464 128h16v16h-16zM312 176h152v16H312zM480 176h16v16h-16z" />
        <path d="M208 216v-16c13.232 0 24-10.768 24-24s-10.768-24-24-24h-16c-4.416 0-8-3.584-8-8s3.584-8 8-8h16c4.416 0 8 3.584 8 8h16c0-13.232-10.768-24-24-24v-16h-16v16c-13.232 0-24 10.768-24 24s10.768 24 24 24h16c4.416 0 8 3.584 8 8s-3.584 8-8 8h-16c-4.416 0-8-3.584-8-8h-16c0 13.232 10.768 24 24 24v16h16zM384 320h95.384l-12.904 32.248c-.824-.08-1.632-.248-2.48-.248-10.416 0-19.216 6.712-22.528 16H406.52a23.901 23.901 0 0 0-19.32-15.672L365.768 288H336v16h18.232l17.216 51.64C364.608 359.872 360 367.384 360 376c0 13.232 10.768 24 24 24 10.416 0 19.216-6.712 22.528-16h34.952c3.312 9.288 12.112 16 22.528 16 13.232 0 24-10.768 24-24 0-6.6-2.68-12.584-7.008-16.928l15-37.536V304H384v16zm0 64c-4.416 0-8-3.584-8-8 0-2.792 1.52-5.128 3.688-6.56L384 368c4.416 0 8 3.584 8 8s-3.584 8-8 8zm80 0c-4.416 0-8-3.584-8-8s3.584-8 8-8 8 3.584 8 8-3.584 8-8 8zM176 384h168v16H176zM144 384h16v16h-16zM192 336h152v16H192zM176 288h144v16H176zM144 288h16v16h-16zM160 336h16v16h-16z" />
    </svg>
)

