// Import Style
import style from "./PrivacyPolicy.module.css"

// Import React

// Import Contexts
// Import Components
// Import Types
// Import Others


function PrivacyPolicy() {
    
    return (

            <div>
                <section className={style.infoSection}>
                <h2>1. Información General</h2>
                <p>
                    Joven Matero (en adelante "nosotros", "nuestro sitio" o "la empresa"), 
                    con domicilio en Provincia del Chaco, Argentina, y sitio web 
                    <strong> jovenmatero.com</strong>, se compromete a proteger la privacidad 
                    de nuestros usuarios conforme a la Ley N° 25.326 de Protección de Datos 
                    Personales y su decreto reglamentario N° 1558/01.
                </p>
                </section>

                <section className={style.infoSection}>
                <h2>2. Información que Recopilamos</h2>
                <p>Actualmente recopilamos únicamente:</p>
                <ul>
                    <li>📧 Dirección de correo electrónico: proporcionada voluntariamente por el usuario.</li>
                    <li>💻 Información técnica automática (no identificable directamente):</li>
                    <ul>
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
                    </ul>
                </ul>
                </section>

                <section className={style.infoSection}>
                <h2>3. Uso de la Información</h2>
                <ul>
                    <li>✅ Enviar newsletters, ofertas y promociones relacionadas con el mate</li>
                    <li>✅ Mejorar la experiencia del usuario en el sitio</li>
                    <li>✅ Cumplir con obligaciones legales</li>
                    <li>✅ Realizar análisis estadísticos del tráfico web</li>
                </ul>
                </section>

                <section className={style.infoSection}>
                <h2>4. Cookies</h2>
                <p>Utilizamos cookies técnicas esenciales y de terceros (Google Analytics) para:</p>
                <ul>
                    <li>Funcionamiento básico del sitio web</li>
                    <li>Recordar preferencias del usuario</li>
                    <li>Analizar el tráfico web</li>
                </ul>
                <p><em>Nota:</em> No utilizamos cookies de publicidad ni remarketing en este momento.</p>
                </section>

                <section className={style.infoSection}>
                <h2>5. Menores de Edad</h2>
                <p>
                    El sitio no está dirigido a menores de 18 años. No recopilamos intencionalmente datos de menores.
                    Si un padre/madre/tutor detecta que un menor ha proporcionado datos, puede solicitar su eliminación inmediata.
                </p>
                </section>

                <section className={style.infoSection}>
                <h2>6. Compartir Información</h2>
                <p>No compartimos tu información personal con terceros, salvo:</p>
                <ul>
                    <li>Cuando sea requerido por ley</li>
                    <li>Para el funcionamiento técnico del sitio (ej. proveedores de hosting)</li>
                    <li>Herramientas de análisis web (Google Analytics, en forma anonimizada)</li>
                </ul>
                </section>

                <section className={style.infoSection}>
                <h2>7. Derechos del Usuario</h2>
                <p>Conforme a la Ley N° 25.326, puedes:</p>
                <ul>
                    <li>🔍 Acceder a tus datos personales</li>
                    <li>✏️ Rectificar información incorrecta</li>
                    <li>🗑️ Solicitar la eliminación de tus datos</li>
                    <li>✋ Oponerte al procesamiento</li>
                    <li>📤 Desuscribirte en cualquier momento</li>
                </ul>
                </section>

                <section className={style.infoSection}>
                <h2>8. Seguridad</h2>
                <p>
                    Implementamos medidas técnicas y organizacionales apropiadas según la Disposición DNPDP N° 10/2016
                    para proteger tu información contra acceso no autorizado, pérdida o destrucción.
                </p>
                </section>

                <section className={style.infoSection}>
                <h2>9. Retención de Datos</h2>
                <p>
                    Conservamos tu dirección de email únicamente mientras mantengas tu suscripción.<br />
                    Si solicitas la baja, eliminaremos tu email en un plazo máximo de 30 días.<br />
                    Los registros técnicos (logs) se conservan por un período máximo de 12 meses.
                </p>
                </section>

                <section className={style.infoSection}>
                <h2>10. Modificaciones</h2>
                <p>
                    Nos reservamos el derecho de modificar esta política. Los cambios importantes serán notificados
                    mediante un aviso en el sitio web y/o por correo electrónico a los suscriptores.
                </p>
                </section>

                <section className={style.infoSection}>
                <h2>11. Contacto</h2>
                <p>Email: contacto@jovenmatero.com</p>
                <p>Sitio web: jovenmatero.com</p>
                <p>Domicilio: Provincia del Chaco, Argentina</p>
                <p>CUIT: [agregar número de CUIT si corresponde]</p>
                </section>
            </div>
    )
}

export default PrivacyPolicy

