import { useState } from "react";
import style from "./Register.module.css"
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { register } from "../../api/login";
import { trashIcon } from "../../svg/svg";

// Types for Data Form
export type FormDataType = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    img: File | null;
}

const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        img: null,
    };


function RegisterForm() {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [imagen, setImagen] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormDataType> (INITIAL_STATE);
    const navigate = useNavigate();

    
        
    // REACT-QUERY -----------------------------------------------------
    
    const mutation = useMutation({
        mutationFn: () => register(formData),
        onSuccess: (data) => {
            console.log("Register Success:", data);
            setFormData(INITIAL_STATE);
            navigate("/login");
        },
        onError: (error: unknown) => {
            // setFormData(INITIAL_STATE);
            setFormData(prev => ({ ...prev, password: "" }));
            setFormData(prev => ({ ...prev, em: "" }));
            setImagen(null);
            if (error instanceof Error) {
                console.error("Register Error:", error.message);
                setErrorMessage(error.message);
            } else {
                console.error("Register Error unkwon:", error);
                setErrorMessage("Register Error unkwon");
            }
        },
    });
    
    
    // -----------------------------------------------------
    
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImagen(URL.createObjectURL(file)); // Image Preview 
            setFormData(prev => ({ ...prev, img: file }));
        }
        };

    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate()
    }
    
    return (
        <div className={style.register}>
            <form onSubmit={handleSubmit} className={style.formRegister}>

                <label className={style.formField}>
                    <p>Nombre de Usuario <span>*</span></p>
                    <input 
                    type="text" 
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    required
                    />
                </label>
                
                <label className={style.formFieldPassword}>
                    <p>Contraseña <span>*</span> {iconExclamation}</p>
                    <p className={style.passwordRequirement}>Requisitos de la contraseña: Debe tener al menos 8 caracteres, incluir una letra mayúscula, una minúscula, un número y un símbolo especial. No puede ser una contraseña común ni estar compuesta solo por números.</p>
                    <input 
                    type="password" 
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                    />
                </label>
                
                <label className={style.formField}>
                    <p>Nombres <span>*</span></p>
                    <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                    />
                </label>
                
                <label className={style.formField}>
                    <p>Apellido <span>*</span></p>
                    <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                    />
                </label>
                
                <label className={style.formField}>
                    <p>Email <span>*</span></p>
                    <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    />
                </label>
                
                <label className={style.formFieldImg}>Foto de Perfil
                    <input
                    type="file"
                    id="foto"
                    accept="image/*"
                    onChange={handleImage}
                    />
                    {imagen && (
                        <div className={style.previewImg}>
                            <p>Vista previa:</p> 
                            <img src={imagen} alt="Vista previa" width="200" />
                            <button onClick={() => setImagen(null)}>{trashIcon}</button>
                        </div>
                    )}
                </label>
                
                {errorMessage && <span className={style.errorMessage}>
                        <p>Error en el registro: {errorMessage}</p>
                        <p>Por favor, verifique sus datos y vuelva a intentar.</p>
                    </span>
                }
                <button type="submit" disabled={mutation.isPending} className={mutation.isPending ? style.disabledButton : style.enabledButton}>
                {mutation.isPending ? "Enviando..." : "Enviar"}
                
                </button> 
                <span className={style.requiredDate}>(*) Datos obligatorios.</span>
            </form>
        </div>
            
        )
    }
    
    export default RegisterForm




const iconExclamation = <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <title/>
    <path d="M2,128a2,2,0,0,1-1.93-2.53l8.19-30a64,64,0,1,1,24.64,24.5l-30.39,8A1.79,1.79,0,0,1,2,128Zm31.18-12.21a2,2,0,0,1,1,.26,60,60,0,1,0-22-21.9,2,2,0,0,1,.2,1.53l-7.49,27.5,27.83-7.33A2.22,2.22,0,0,1,33.18,115.79Z"/>
    <path d="M64,108A13,13,0,1,1,77,95,13,13,0,0,1,64,108Zm0-22a9,9,0,1,0,9,9A9,9,0,0,0,64,86Z"/>
    <path d="M64,73A13,13,0,0,1,51,60V33a13,13,0,0,1,26,0V60A13,13,0,0,1,64,73Zm0-49a9,9,0,0,0-9,9V60a9,9,0,0,0,18,0V33A9,9,0,0,0,64,24Z"/>
</svg>
