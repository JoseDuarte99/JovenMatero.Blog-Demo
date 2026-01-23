// Import Style
import style from "./SimpleFooter.module.css"

// Import React
// Import Others
import { SvgGitHubIcon, SvgInstagramIcon, SvgFacebookIcon, SvgWhatsappIcon} from "../../components/SvgIcons/SvgSocialNetworks"

// Import Contexts
// Import Components
// Import Types



function SimpleFooter() {
    
    
    return (
        <footer className={style.simpleFooter}>
            <div>
                <section className={style.socialNetworks}>
                        <a href="https://www.instagram.com/jovenmatero/#"><SvgInstagramIcon height="100" fill="#000a"/></a>
                        <a href="https://www.facebook.com.ar/share/1A2YbPoZK7/"><SvgFacebookIcon height="100" fill="#000a"/></a>
                        <a href="https://wa.me/c/5493624082562/"> <SvgWhatsappIcon height="100" fill="#000a"/></a>
                </section>
                <section className={style.by}>
                    <p>Desarrollado por<a href="https://github.com/JoseDuarte99" target="_blank"><SvgGitHubIcon height="100" fill="#000a"/> Jose Duarte</a></p>
                    <span>© Todos los derechos reservados</span> 
                </section>
            </div>
        </footer>
    )
}

export default SimpleFooter

