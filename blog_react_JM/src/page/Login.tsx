import { useState } from "react"
import useLogin from "../hooks/useLogin" // o la ruta donde tengas tu hook

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const loginMutation = useLogin()
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        loginMutation.mutate({ username, password })
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loginMutation.isLoading}>
        {loginMutation.isLoading ? "Cargando..." : "Ingresar"}
        </button>
        {loginMutation.isError && <p>Error al iniciar sesión</p>}
        </form>
    )
}

export default LoginForm
