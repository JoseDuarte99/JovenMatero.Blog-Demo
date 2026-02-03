// Import Style
import style from "./DropdownMenu.module.css"

// Import React

// Import Contexts

// Import Components
// Import Types

// Import Others
import { Link } from "react-router"


type DropdownMenuType = {
    onClickDropdownMenu?: () => void;
    logoutFn?: () => void;
}

function DropdownMenu({onClickDropdownMenu} :DropdownMenuType) {


    return (
        <div className={style.itemsMenu}>
            <section className={style.profile}>
                {profileNone}
                <div>
                    <h5>Bienvenido <span className={style.soon}>Muy pronto!</span> </h5>
                    <p> Pronto podras formar parte de nuestra comunidad...</p>
                </div>
            </section>
            <ul className={style.options}>
                <li>{HomeSvg}<Link to={"/home"} onClick={onClickDropdownMenu} >Inicio</Link></li>
                <li>{SummarySvg}<Link to={"/about"} onClick={onClickDropdownMenu} >Nosotros</Link></li>
                <li>{OnSaleSvg}<Link to={"/catalog"} onClick={onClickDropdownMenu} >Catalogo</Link></li>
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

const HomeSvg = <svg xmlns="http://www.w3.org/2000/svg" id="Outline" fill="#fff" viewBox="0 0 24 24" ><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>


const SummarySvg = <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="#fff" viewBox="0 0 24 24">
    <path d="m15,0h-2v2h-2V0h-2v2h-2V0h-2v2h-2V0H1v2H0v19c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V2h-1V0Zm-1,21c0,.552-.449,1-1,1H3c-.551,0-1-.448-1-1V4h12v17Zm-2-12H4v-2h8v2Zm0,4H4v-2h8v2Zm-3,4h-5v-2h5v2ZM21,0c-1.654,0-3,1.346-3,3v17.914l3,3,3-3V3c0-1.654-1.346-3-3-3Zm1,20.086l-1,1-1-1V3c0-.552.449-1,1-1s1,.448,1,1v17.086Z"/>
</svg>


const OnSaleSvg = <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="#fff" viewBox="0 0 24 24">
    <path d="m11.253,16.97l3.925,3.907,5.682-5.771-3.941-3.935-5.665,5.799Zm8.196-1.858l-4.279,4.348-2.509-2.499,4.267-4.367,2.521,2.519Zm3.915-1.463L12.172,2.463l-8,1L.717.007.009.714l3.458,3.458-.927,8.138,11.035,11.007c.453.451,1.047.677,1.644.677.603,0,1.208-.231,1.669-.693l6.496-6.641c.817-.835.808-2.186-.02-3.011Zm-.695,2.312l-6.492,6.637c-.515.516-1.383.521-1.896.012L3.589,11.942l.782-6.867,1.904,1.904c-.176.297-.284.64-.284,1.01,0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2c-.37,0-.712.108-1.009.284l-1.914-1.914,6.743-.843,10.848,10.841c.44.439.446,1.159.011,1.604ZM7.991,6.989c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Z"/>
</svg>


