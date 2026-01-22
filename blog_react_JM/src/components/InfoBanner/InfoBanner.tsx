import { useState, useEffect } from "react";
import styles from "./InfoBanner.module.css";
import { Link } from "react-router";

function InfoBanner() {
    const [visible, setVisible] = useState(true);
    const termsUrl = "";
    const privacyUrl = "";


    useEffect(() => {
        const closed = sessionStorage.getItem("bannerClosed");
        if (closed) setVisible(false);
    }, []);

    const closeBanner = () => {
        setVisible(false);
        sessionStorage.setItem("bannerClosed", "true");
    };

    if (!visible) return null;

    return (
        <div className={styles.infoBanner}>
                <span className={styles.infoText}>
                    📄 Si quieres conocer nuestros{" "}
                    <a href={termsUrl} className={styles.infoLink}>Términos y Condiciones</a> o{" "}
                    <a href={privacyUrl} className={styles.infoLink}>Política de Privacidad</a>, visitá los siguientes enlaces.
                    <Link to="/terms_and_privacy">Términos y Condiciones</Link>
                </span>
            <button onClick={closeBanner} className={styles.closeButton}>Cerrar</button>
        </div>
    );
}

export default InfoBanner;