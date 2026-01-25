// Import Style
import style from "./Terms.module.css"

// Import React

// Import Contexts
// Import Components
// Import Types
// Import Others


function Terms() {
    
    const email = "jovenmatero@gmail.com"
    // const cuit = ""


    return (
                <div>
                    <section className={style.infoSection}>
                        <h2>1. Información</h2>
                        <p><strong>Denominación:</strong> Joven Matero</p>
                        <p><strong>Domicilio:</strong> Provincia del Chaco, Argentina</p>
                        <p><strong>Sitio web:</strong> jovenmatero.com</p>
                        <p><strong>Email:</strong> {email}</p>
                        {/* <p><strong>CUIT:</strong> {cuit}</p> */}
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
                        <p>Email: {email}</p>
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
                        <p>Email: {email}</p>
                        <p>Sitio web: jovenmatero.com</p>
                        <p>Domicilio: Provincia del Chaco, Argentina</p>
                        {/* <p>CUIT: {cuit}</p> */}
                    </section>
                </div>
    )
}

export default Terms
