// Import Style
import style from "./About.module.css"

// Import React
import { Link } from "react-router"

// Import Contexts
// Import Components
// Import Types
// Import Others




function About() {
    return (
        <section className={style.about}>
                <div>
                    <h3>Acerca de nosotros</h3>
                    <SvgAbout />
                </div>
                <div>
                    <p>En nuestro emprendimiento creemos que el mate es mucho más que una bebida: es un símbolo de encuentro, tradición y momentos compartidos. Por eso nos dedicamos a ofrecer productos que acompañen cada cebada, desde mates de distintos estilos hasta vasos térmicos, botellas y accesorios que hacen más práctica y placentera la experiencia.</p>

                    <p>Nuestro blog nace con la idea de estar cerca de vos, brindándote novedades, consejos, información útil y promociones exclusivas. Queremos que encuentres aquí un espacio donde aprender más sobre el mundo matero, descubrir tips para cuidar tus productos y estar al tanto de todo lo que tenemos para vos.</p>

                    <p>Cada artículo refleja nuestra pasión por esta costumbre que nos une y nuestro compromiso de ofrecer calidad, innovación y cercanía. Porque sabemos que detrás de cada mate hay una historia, y queremos ser parte de la tuya.</p>
                </div>

                <Link to="/home">Ir a la pagina principal</Link>
        </section>
    )
}

export default About


const SvgAbout = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fill="#dfdfdf"
        stroke="#dfdfdf"
        viewBox="0 0 70 70"

    >
        <path d="M63.679 9.583h-56c-2.209 0-5.096.25-5.096 4.346v42c0 2.209.563 3.654 4.096 3.654h57c2.209 0 2.904-1.445 2.904-3.654v-42c0-2.209-.695-4.346-2.904-4.346zm-1.096 4v5h-56v-5h56zm-56 42v-35h56v35h-56z" />
        <path d="M28.988 24.583H13.176c-2.218 0-2.593 1-2.593 3.169v21c0 1.104.488 1.831 1.593 1.831h16.813c1.104 0 1.595.273 1.595-.831v-22c-.001-1.105.437-3.169-1.596-3.169zm-.405 24h-16v-22h16v22zM33.417 26.583h12a1 1 0 1 0 0-2h-12a1 1 0 1 0 0 2zM58.417 24.583h-9a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zM33.417 31.583h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2zM14.417 17.583h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM53.417 17.583h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM50.417 29.583h-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zM33.417 36.583h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zM46.417 35.583a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1zM58.417 29.583h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM33.417 44.583h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2zM58.417 42.583h-13a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zM48.417 47.583h-15a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2zM58.417 47.583h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" />
    </svg>
)
