// import { useMutation } from "@tanstack/react-query"
// import { login } from "../../api/login"
import { useMutation } from "@tanstack/react-query";
import style  from "./Login.module.css"
import { useState } from "react"
import { login } from "../../api/login";


// type LoginPayload = {
//     username: string;
//     password: string;
// };

function LoginForm() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    
    
    
    
    // -----------------------------------------------------
    const mutation = useMutation({
        mutationFn: async () => {
            const data = await login(username, password);
                localStorage.setItem('accessToken', data.access);
                localStorage.setItem('refreshToken', data.refresh);
            return data;
        },
        onError: (error) => {
            console.error('Error al iniciar sesión:', error);
        },
        onSuccess: (data) => {
            console.log('Login exitoso:', data);
            // redirigir o mostrar mensaje
        },
    });
    // -----------------------------------------------------
    
    
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(`Enviado: ${username} y  ${password} `)
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
        {mutation.isError && <p>Error al iniciar sesión</p>}

        </form>
        </div>
    )
}

export default LoginForm
