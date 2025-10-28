import { useMutation } from "@tanstack/react-query"
import { login } from "../../api/login"
import style  from "./Login.module.css"
import { useState } from "react"
import { useNavigate } from "react-router"


function LoginForm() {
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [errorMessasge, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    
    // -----------------------------------------------------
    
    const mutation = useMutation({
        mutationFn: () => login(username, password),
        onSuccess: (data) => {
            console.log("Success Login:", data);
            setusername("");
            setpassword("");
            navigate("/Home");
        },
        onError: (error: unknown) => {
            setpassword("");
            if (error instanceof Error) {
                console.error("Login error:", error.message);
                setErrorMessage(error.message);
            } else {
                console.error("Login error unknow:", error);
                setErrorMessage("Error desconocido al iniciar sesión");
            }
        },
    });
    
    
    // -----------------------------------------------------
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate()
    }
    
    return (
        <div className={style.login}>
            <div className={style.logoJovenMatero}>
                <h1>Joven</h1>
                <h1>Matero</h1>
            </div>
            <form onSubmit={handleSubmit} className={style.formLogin}>
                <span className={style.input}>
                    {usernameIcon}
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required
                    />
                </span>
                <span className={style.input}>
                    {passwordIcon}
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                    />
                </span>

                {errorMessasge && <span className={style.errorMessasge}>
                        <p>Error al iniciar sesión</p>
                        <p>Por favor, verifique sus credenciales y vuelva a intentar.</p>
                    </span>
                }

                <button type="submit" disabled={mutation.isPending} className={mutation.isPending ? style.disabledButton : style.enabledButton}>
                {mutation.isPending ? "Cargando..." : "Ingresar"}
                
                </button>
            </form>
        </div>
        )
    }
    
    export default LoginForm
    

    const usernameIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
        <path d="M256,246.296c-64.182,0-116.398-52.216-116.398-116.398S191.818,13.5,256,13.5s116.398,52.216,116.398,116.398S320.182,246.296,256,246.296z M256,38.5c-50.397,0-91.398,41.001-91.398,91.398s41.001,91.398,91.398,91.398s91.398-41.001,91.398-91.398S306.397,38.5,256,38.5z M403.196,498.5H108.804c-31.754,0-57.588-25.834-57.588-57.588v-36.027c0-74.966,60.989-135.955,135.955-135.955h137.657c74.966,0,135.955,60.989,135.955,135.955v36.027C460.784,472.666,434.95,498.5,403.196,498.5z M187.171,293.93c-61.181,0-110.955,49.774-110.955,110.955v36.027c0,17.969,14.619,32.588,32.588,32.588h294.392c17.969,0,32.588-14.619,32.588-32.588v-36.027c0-61.181-49.774-110.955-110.955-110.955H187.171z"/>
    </svg>

    const passwordIcon = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
        <path fill="#444444" d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path>
        <path fill="#444444" d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
        <path fill="#444444" d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
        <path fill="#444444" d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
    </svg>

