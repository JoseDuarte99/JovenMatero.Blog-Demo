// Import Style
import styles from "./InfoBanner.module.css";

// Import React
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";

// Import Contexts
import TermsOrPrivacyContext from "../../context/TermsOrPrivacyContext";

// Import Components
// Import Types
// Import Others

function InfoBanner() {
    const [visible, setVisible] = useState(true);

    // TERMS-OR-PRIVACY-CONTEXT
    const termsOrPrivacyContext = useContext(TermsOrPrivacyContext)
    if (!termsOrPrivacyContext){throw new Error('TermsAndPrivacy Error');}
    const { setTermsOrPrivacy } = termsOrPrivacyContext;

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
                    Puedes conocer sobre nuestras 
                    <Link to="/terms_and_privacy" onClick={ () => {setTermsOrPrivacy(true); window.scrollTo({ top: 0, behavior: "smooth"})} }>Terminos y Condiciones</Link>
                    o
                    <Link to="/terms_and_privacy" onClick={ () => {setTermsOrPrivacy(false); window.scrollTo({ top: 0, behavior: "smooth"})} }>Política de privacidad</Link>
                    aquí.
                </span>
            <button onClick={closeBanner} className={styles.closeButton}>Cerrar</button>
        </div>
    );
}

export default InfoBanner;