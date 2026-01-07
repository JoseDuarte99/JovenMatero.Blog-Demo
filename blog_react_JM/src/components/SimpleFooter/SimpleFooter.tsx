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
                        <a href=""><SvgInstagramIcon height="100" fill="#000a"/></a>
                        <a href=""><SvgFacebookIcon height="100" fill="#000a"/></a>
                        <a href=""> <SvgWhatsappIcon height="100" fill="#000a"/></a>
                        {/* <a href=""><SvgInstagramIcon height="100" fill="#000a"/> joven_matero</a>
                        <a href=""><SvgFacebookIcon height="100" fill="#000a"/> Joven Matero</a>
                        <a href=""> <SvgWhatsappIcon height="100" fill="#000a"/> 3624xxxxxx</a> */}
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

