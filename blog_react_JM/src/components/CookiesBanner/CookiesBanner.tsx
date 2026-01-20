    import { useEffect, useState } from "react";

    type CookieBannerProps = {
    privacyUrl?: string;
    className?: string;
    onAccept?: () => void;
    onDecline?: () => void;
    };

    const STORAGE_KEY = "cookiesAccepted"; // "true" | "false"

    export default function CookieBanner({
    privacyUrl = "/politica-privacidad",
    className,
    onAccept,
    onDecline,
    }: CookieBannerProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        setVisible(saved === null); // mostrar solo si no hay decisión previa
    }, []);

    const accept = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setVisible(false);
        onAccept?.();
    };

    const decline = () => {
        localStorage.setItem(STORAGE_KEY, "false");
        setVisible(false);
        onDecline?.();
    };

    if (!visible) return null;

    return (
        <div
        className={className}
        style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "#222",
            color: "#fff",
            padding: "14px 16px",
            fontSize: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 9999,
            gap: 12,
        }}
        role="dialog"
        aria-live="polite"
        aria-label="Aviso de cookies"
        >
        <span style={{ lineHeight: 1.4 }}>
            🍪 Usamos cookies técnicas y de análisis para mejorar tu experiencia. Al
            continuar, aceptás nuestra{" "}
            <a
            href={privacyUrl}
            style={{ color: "#4CAF50", textDecoration: "underline" }}
            >
            Política de Privacidad
            </a>
            .
        </span>

        <div style={{ display: "flex", gap: 8 }}>
            <button
            onClick={decline}
            style={{
                background: "#f44336",
                border: "none",
                color: "#fff",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: 4,
            }}
            >
            Rechazar
            </button>
            <button
            onClick={accept}
            style={{
                background: "#4CAF50",
                border: "none",
                color: "#fff",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: 4,
            }}
            >
            Aceptar
            </button>
        </div>
        </div>
    );
    }
