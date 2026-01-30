// Import Style
import style from "./Register.module.css"

// Import React
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

// Import Contexts
// Import Components
// Import Types

// Import Others
import { registerService } from "../../api/services";
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

type DjangoErrorsType = {
    username?: string[];
    password?: string[];
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    img?: string[];    
};



const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        img: null,
    };


function RegisterForm() {

    const [errorMessage, setErrorMessage] = useState<DjangoErrorsType>({}) ;
    const [errorState, setErrorState] = useState(false) ;
    const [imagen, setImagen] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormDataType> (INITIAL_STATE);
    const navigate = useNavigate();

    

    // REACT-QUERY -----------------------------------------------------
    
    const mutation = useMutation({
        mutationFn: () => registerService(formData),
        onSuccess: (data) => {
            console.log("Register Success:", data);
            toast.success("Registro Exitoso!");
            setFormData(INITIAL_STATE);
            navigate("/home");
        },
        onError: (error: DjangoErrorsType) => {
            setErrorMessage(error)
            setErrorState(true)
            setFormData(prev => ({ ...prev, password: "" }));
            setImagen(null);
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
        setErrorMessage({})
        setErrorState(false)
        mutation.mutate()
        
    }
    
    return (
        <main className={style.register}>
            <form onSubmit={handleSubmit} className={style.formRegister}>

                <label className={style.formField}>
                    <p>Nombre de Usuario <span className={style.requiredInput}>*</span></p>
                    <input 
                    type="text" 
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    required
                    />
                    {errorMessage.username && <p className={style.errorMessage}>{errorMessage.username}</p>}
                </label>
                
                <label className={style.formFieldPassword}>
                    <div>
                        <p>Contraseña</p>
                        <span className={style.requiredInput}>*</span> 
                        <span>
                            {iconExclamation}
                            <p className={style.passwordRequirement}>La contraseña debe:<br />
                            - Tener al menos 8 caracteres. <br /> 
                            - Incluir almenos una letra mayúscula. <br />
                            - Incluir almenos una letra minúscula. <br />
                            - Incluir almenos un número y un símbolo especial. <br />
                            - No puede ser una contraseña común <br />
                            - No puede estar compuesta solo por números.
                            </p>
                        </span>
                    </div>
                    <input 
                        type="password" 
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        required
                    />
                    {errorMessage.password && <p className={style.errorMessage}>{errorMessage.password}</p>}
                </label>
                
                <label className={style.formField}>
                    <p>Nombres <span className={style.requiredInput}>*</span></p>
                    <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                    />
                    {errorMessage.firstName && <p className={style.errorMessage}>{errorMessage.firstName}</p>}
                </label>
                
                <label className={style.formField}>
                    <p>Apellido <span className={style.requiredInput}>*</span></p>
                    <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                    />
                    {errorMessage.lastName && <p className={style.errorMessage}>{errorMessage.lastName}</p>}
                </label>
                
                <label className={style.formField}>
                    <p>Email <span className={style.requiredInput}>*</span></p>
                    <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    />
                    {errorMessage.email && <p className={style.errorMessage}>{errorMessage.email}</p>}
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
                    {errorMessage.img && <p className={style.errorMessage}>{errorMessage.img}</p>}
                </label>
                
                {errorState && <span className={style.errorMessage}>
                        {errorMessage ? <p>Error en el registro.</p> : <></>}
                        <p>Por favor, verifique sus datos y vuelva a intentar.</p>
                    </span>
                }
                <section className={style.buttons}>
                    <button type="submit" disabled={mutation.isPending} className={mutation.isPending ? style.disabledButton : style.enabledButton}>
                    {mutation.isPending ? "Enviando..." : "Crear cuenta"}
                    </button> 
                    {mutation.isPending 
                    ? <></>
                    : <Link to={"/"} className={style.hasAccount}> Ya tengo una cuenta </Link>
                    }
                </section>
                <span className={style.requiredDate}>(*) Datos obligatorios.</span>
            </form>
        </main>
            
        )
    }
    
    export default RegisterForm




const iconExclamation = <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <title/>
    <path d="M2,128a2,2,0,0,1-1.93-2.53l8.19-30a64,64,0,1,1,24.64,24.5l-30.39,8A1.79,1.79,0,0,1,2,128Zm31.18-12.21a2,2,0,0,1,1,.26,60,60,0,1,0-22-21.9,2,2,0,0,1,.2,1.53l-7.49,27.5,27.83-7.33A2.22,2.22,0,0,1,33.18,115.79Z"/>
    <path d="M64,108A13,13,0,1,1,77,95,13,13,0,0,1,64,108Zm0-22a9,9,0,1,0,9,9A9,9,0,0,0,64,86Z"/>
    <path d="M64,73A13,13,0,0,1,51,60V33a13,13,0,0,1,26,0V60A13,13,0,0,1,64,73Zm0-49a9,9,0,0,0-9,9V60a9,9,0,0,0,18,0V33A9,9,0,0,0,64,24Z"/>
</svg>


