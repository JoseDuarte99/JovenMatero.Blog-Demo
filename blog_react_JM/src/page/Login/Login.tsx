import { useMutation } from "@tanstack/react-query"
import { login } from "../../api/login"
import style  from "./Login.module.css"
import { useState } from "react"
import { useNavigate } from "react-router"


function LoginForm() {
    
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    
    // -----------------------------------------------------
    
    const mutation = useMutation({
        mutationFn: () => login(username, password),
        onSuccess: (data) => {
            console.log("Login exitoso:", data);
            setusername("");
            setpassword("");
            navigate("/Home");
        },
        onError: (error) => {
            console.error("Error:", error);
            setpassword(""); // solo borrás la contraseña si falló
        },
    });
    
    
    
    
    // -----------------------------------------------------
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate()
    }
    
    return (
        <div className={style.login}>
        <form onSubmit={handleSubmit} className={style.form}>
        <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        required
        />
        <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        required
        />
        <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Cargando..." : "Ingresar"}
        </button>
        {mutation.isError && <>
            <p>Error al iniciar sesión</p>
            <p>Por favor, verifique sus credenciales y vuelva a intentar.</p>
            </>}
            </form>
            </div>
        )
    }
    
    export default LoginForm
    