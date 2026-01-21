// Import Style
import style from "./TermsAndConditions.module.css"

// Import React
import { Link } from "react-router"

// Import Contexts
// Import Components
// Import Types
// Import Others




function TermsAndConditions() {
    return (
        <section className={style.termsAndConditions}>
                <div>
                    <div>
                        <h3>TÉRMINOS Y CONDICIONES</h3>
                        <span>Última actualización: Enero 2026</span>
                    </div>
                    <SvgTerms />
                </div>
                <div>

                    <section className={style.infoSection}>
                        <h2>1. Información de la Empresa</h2>
                        <p><strong>Denominación:</strong> Joven Matero</p>
                        <p><strong>Domicilio:</strong> Provincia del Chaco, Argentina</p>
                        <p><strong>Sitio web:</strong> jovenmatero.com</p>
                        <p><strong>Email:</strong> contacto@jovenmatero.com</p>
                        <p><strong>CUIT:</strong> [agregar número de CUIT si corresponde]</p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>2. Aceptación de Términos</h2>
                        <p>
                        Al acceder y usar jovenmatero.com, aceptas estos términos y condiciones.
                        Si no estás de acuerdo, no uses nuestro sitio web.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>3. Descripción del Servicio</h2>
                        <ul>
                            <li>✅ Contenido gratuito para lectura</li>
                            <li>✅ Suscripción por email para recibir ofertas y promociones</li>
                            <li>✅ Material educativo sobre el mate</li>
                        </ul>
                    </section>

                    <section className={style.infoSection}>
                        <h2>4. Uso Permitido</h2>
                        <p>Puedes:</p>
                        <ul>
                            <li>Leer todo el contenido disponible</li>
                            <li>Suscribirte a nuestras comunicaciones</li>
                            <li>Compartir nuestro contenido citando la fuente</li>
                        </ul>
                        <p>NO puedes:</p>
                        <ul>
                            <li>❌ Reproducir contenido sin autorización</li>
                            <li>❌ Usar el sitio para actividades ilegales</li>
                            <li>❌ Intentar acceder a áreas restringidas</li>
                            <li>❌ Interferir con el funcionamiento del sitio</li>
                        </ul>
                    </section>

                    <section className={style.infoSection}>
                        <h2>5. Propiedad Intelectual</h2>
                        <p>
                        Todo el contenido (textos, imágenes, diseño) es propiedad de Joven Matero.
                        Protegido por derechos de autor según legislación argentina.
                        Uso comercial requiere autorización expresa por escrito.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>6. Derechos del Consumidor</h2>
                        <ul>
                        <li>Información clara y veraz</li>
                        <li>Trato digno y equitativo</li>
                        <li>Derecho a reclamo y respuesta</li>
                        </ul>
                    </section>

                    <section className={style.infoSection}>
                        <h2>7. Suscripción por Email</h2>
                        <p>
                        La suscripción es gratuita y voluntaria. Puedes desuscribirte en cualquier momento.
                        Enviaremos contenido relacionado con mate y cultura argentina.
                        No compartimos tu email con terceros.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>8. Disponibilidad del Servicio</h2>
                        <p>
                        Nos esforzamos por mantener el sitio disponible 24/7.
                        Pueden ocurrir interrupciones por mantenimiento programado.
                        No garantizamos disponibilidad absoluta del servicio.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>9. Limitación de Responsabilidad</h2>
                        <p>
                        Joven Matero no se hace responsable por daños derivados del uso de la información,
                        interrupciones temporales del servicio, enlaces externos incluidos en el sitio,
                        ni decisiones tomadas basadas en nuestro contenido.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>10. Reclamos y Consultas</h2>
                        <p>Email: contacto@jovenmatero.com</p>
                        <p>Tiempo de respuesta: 10 días hábiles</p>
                        <p>Autoridad de aplicación: Dirección Nacional de Defensa del Consumidor</p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>11. Modificaciones</h2>
                        <p>
                        Nos reservamos el derecho de modificar estos términos, actualizar el contenido del sitio
                        y suspender temporalmente el servicio por mantenimiento.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>12. Marco Legal Aplicable</h2>
                        <ul>
                        <li>Ley N° 24.240 - Defensa del Consumidor</li>
                        <li>Ley N° 25.326 - Protección de Datos Personales</li>
                        <li>Código Civil y Comercial de la Nación Argentina</li>
                        <li>Ley N° 11.683 - Procedimientos Tributarios</li>
                        </ul>
                    </section>

                    <section className={style.infoSection}>
                        <h2>13. Jurisdicción</h2>
                        <p>
                        Cualquier controversia será resuelta por los tribunales competentes de la Provincia del Chaco,
                        Argentina, renunciando las partes a cualquier otro fuero o jurisdicción.
                        </p>
                    </section>

                    <section className={style.infoSection}>
                        <h2>14. Contacto</h2>
                        <p>Email: contacto@jovenmatero.com</p>
                        <p>Sitio web: jovenmatero.com</p>
                        <p>Domicilio: Provincia del Chaco, Argentina</p>
                        <p>CUIT: [agregar número de CUIT si corresponde]</p>
                    </section>
                </div>

                <Link to="/home" className={style.goHome} onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>Ir a la pagina principal</Link>
        </section>
    )
}

export default TermsAndConditions


const SvgTerms = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fill="#dfdfdf"
        stroke="#dfdfdf"
        viewBox="0 0 420 420"
    >
        <path d="M252.877 92.823h53.791l.005 62.757 27.271-42.343V77.743a8.204 8.204 0 0 0-2.396-5.787L261.984 2.395A8.184 8.184 0 0 0 256.199 0H41.113C27.579 0 16.566 11.008 16.566 24.543v370.914c0 13.534 11.012 24.543 24.547 24.543h268.283c13.533 0 24.545-11.009 24.545-24.543V290.15l-27.264 41.721.004 60.854H43.84V27.274h198.906v55.417a10.129 10.129 0 0 0 10.131 10.132z" />
        <path d="m364.398 195.123-11.271-7.364a3.978 3.978 0 0 0-5.506 1.154l-60.688 92.866-11.67-7.625 60.688-92.867a3.975 3.975 0 0 0-1.153-5.506l-11.271-7.365a3.977 3.977 0 0 0-5.506 1.154l-90.869 139.053a3.99 3.99 0 0 0-.643 1.979l-2.375 48.258a3.978 3.978 0 0 0 5.746 3.754l43.243-21.553a3.964 3.964 0 0 0 1.558-1.385l90.867-139.052a3.97 3.97 0 0 0-1.15-5.501zM401.631 138.145l-40.869-26.708a3.979 3.979 0 0 0-5.506 1.154l-27.563 42.179a3.98 3.98 0 0 0 1.154 5.508l40.869 26.706a3.977 3.977 0 0 0 5.506-1.154l27.562-42.178a3.976 3.976 0 0 0-1.153-5.507zM83.563 87.462h78c5.523 0 10-4.478 10-10s-4.477-10-10-10h-78c-5.523 0-10 4.478-10 10s4.479 10 10 10zM231.563 127.462c0-5.522-4.479-10-10-10h-138c-5.523 0-10 4.478-10 10s4.477 10 10 10h138c5.523 0 10-4.478 10-10zM83.563 187.462h78c5.523 0 10-4.478 10-10s-4.477-10-10-10h-78c-5.523 0-10 4.478-10 10s4.479 10 10 10zM83.563 237.462h78c5.523 0 10-4.478 10-10 0-5.521-4.477-10-10-10h-78c-5.523 0-10 4.479-10 10 0 5.522 4.479 10 10 10zM87.796 366.694c-1.947 2.516 1.565 6.082 3.536 3.533 6.213-8.026 11.344-16.671 15.629-25.795 2.674 1.679 6.185 1.343 9.065.205 4.151-1.637 7.67-4.796 11.021-7.655 1.981-1.69 4.287-4.481 7.029-4.748 2.094-.201 4.922 1.485 7.015 1.844 5.469.932 11.857-.651 17.137-1.956 5.011-1.237 10.879-3.194 13.828-7.731 1.763-2.712-2.568-5.216-4.317-2.521-2.361 3.632-8.126 4.764-12.022 5.726-4.573 1.131-9.879 2.246-14.592 1.442-3.552-.604-6.425-2.752-10.077-1.125-4.892 2.18-8.629 6.761-12.949 9.854-1.933 1.384-4.142 2.714-6.56 2.901-.995.077-1.806-.288-2.48-.896.532-1.234 1.06-2.474 1.563-3.725 4.876-12.104 7.081-24.396 9.344-37.146 1.15-6.479 3.063-16.688-6.223-17.311-8.205-.548-15.296 11.287-17.918 17.524-2.345 5.578-2.606 12.058-2.427 18.014.111 3.712 1.447 7.566 2.432 11.404-7.874 1.263-14.814 9.216-13.598 17.1 1.197 7.758 10.898 3.752 14.521.881 3.667-2.905 4.854-6.534 4.893-10.448.731 1.205 1.342 2.65 1.974 4.002-4.225 9.477-9.522 18.485-15.824 26.627zm8.764-28.301c-.74 3.298-4.913 6.554-8.199 6.858-2.585.24-1.008-4.377-.497-5.409 1.604-3.242 5.578-5.358 8.919-6.27.156 1.627.131 3.239-.223 4.821zm4.176-9.681c-.851-3.976-2.032-7.969-2.338-11.583-.592-6.975.647-14.284 4.106-20.384 2.161-3.812 6.566-9.654 11.239-10.154 4.173-.444 1.628 9.705 1.267 11.744-1.117 6.294-1.914 12.541-3.471 18.763a140.452 140.452 0 0 1-5.469 17.095c-1.165-2.899-2.682-4.755-5.334-5.481z" />
    </svg>
)

