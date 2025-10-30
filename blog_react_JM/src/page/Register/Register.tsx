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

    const [errorMessasge, setErrorMessage] = useState<string | null>(null);
    const [imagen, setImagen] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormDataType> (INITIAL_STATE);
    const navigate = useNavigate();

    
        
    // REACT-QUERY -----------------------------------------------------
    
    const mutation = useMutation({
        mutationFn: () => register(formData),
        onSuccess: (data) => {
            console.log("Register Success:", data);
            setFormData(INITIAL_STATE);
            navigate("/auth/login");
        },
        onError: (error: unknown) => {
            setFormData(INITIAL_STATE);
            if (error instanceof Error) {
                console.error("Register Error:", error.message);
                setErrorMessage(error.message);
            } else {
                console.error("Register Error unkwon:", error);
                setErrorMessage("Error desconocido al iniciar sesión");
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
                
                <label className={style.formField}>
                    <p>Contraseña <span>*</span></p>
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
                
                {errorMessasge && <span className={style.errorMessasge}>
                        <p>Error en el registro</p>
                        <p>Por favor, verifique sus datos y vuelva a intentar.</p>
                    </span>
                }

                <button type="submit" className={style.enabledButton}>
                Enviar
                </button>

                {/* 
                    <button type="submit" disabled={mutation.isPending} className={mutation.isPending ? style.disabledButton : style.enabledButton}>
                    {mutation.isPending ? "Cargando..." : "Ingresar"}
                    
                    </button> */}
                <span className={style.requiredDate}>(*) Datos obligatorios.</span>
            </form>
        </div>
            
        )
    }
    
    export default RegisterForm