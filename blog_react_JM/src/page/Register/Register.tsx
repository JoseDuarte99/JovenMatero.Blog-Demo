import { useState } from "react";
import style from "./Register.module.css"






function RegisterForm() {

    const [imagen, setImagen] = useState<string | null>(null);


        const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
            const archivo = (e.target as HTMLInputElement).files?.[0];
            if (archivo) {
                setImagen(URL.createObjectURL(archivo));
            }
        };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className={style.register}>
            <form onSubmit={handleSubmit} className={style.formRegister}>
            
                <label className={style.formField}>
                    Nombre de Usuario
                    <input 
                        type="text" 
                    />
                </label>

                <label className={style.formField}>
                    Contraseña
                    <input 
                        type="password" 
                    />
                </label>

                <label className={style.formField}>
                    Nombres
                    <input 
                        type="text" 
                    />
                </label>

                <label className={style.formField}>
                    Apellido
                    <input 
                        type="text" 
                    />
                </label>

                <label className={style.formField}>
                    Email
                    <input 
                        type="email" 
                    />
                </label>

                <label>Subí tu foto:</label>
                    <input
                        type="file"
                        id="foto"
                        accept="image/*"
                        onChange={manejarCambio}
                    />
                    {imagen && (
                        <div>
                        <p>Vista previa:</p>
                        <img src={imagen} alt="Vista previa" width="200" />
                        </div>
                    )}

                <button type="submit" className={style.enabledButton}>
                    Enviar
                </button>
{/* 
                <button type="submit" disabled={mutation.isPending} className={mutation.isPending ? style.disabledButton : style.enabledButton}>
                {mutation.isPending ? "Cargando..." : "Ingresar"}
                
                </button> */}
            </form>
        </div>
    
    )
}

export default RegisterForm