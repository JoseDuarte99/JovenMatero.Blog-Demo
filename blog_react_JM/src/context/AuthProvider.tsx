// Import Style

// Import React
import { useEffect, useState, type ReactNode } from 'react';
import { toast } from 'sonner';


// Import Contexts
import AuthContext from './AuthContext';
import { getProfileService, getRefreshToken, logoutService } from '../api/services';
import { useMutation, useQuery } from '@tanstack/react-query';


// Import Components
// Import Types

// Import Others


interface AuthProviderType {
    children: ReactNode;
}

type UserType = {
    username?: string;
    password?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    img?: string;   
}


const AuthProvider = ({ children }: AuthProviderType) => {
    
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [refreshToken, setRefreshToken] = useState<string | null>(null)
    
    // LOGOUT -------------------------------------------------------------
    const mutationLogout = useMutation({
        mutationFn: () => logoutService(accessToken!, refreshToken!),
        onMutate: () => {
            
            const toastId = toast.loading("Finalizando sesión...");
            return { toastId };
        },
        onSuccess: (_data, _variables, context) => {
            setAccessToken(null);
            setRefreshToken(null);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            
            toast.success("Sesión finalizada con éxito!", { id: context?.toastId });
        },
        onError: (error, _variables, context) => {
            console.log("Error en el cierre de sesión", error);
            
            toast.error("Error al cerrar sesión", { id: context?.toastId });
        },
    });
    
    const logout = () => {
        mutationLogout.mutate();
    };
    
    
    // TOKEN VERIFICATION -------------------------------------------------------------
    useEffect(() => {
        const storedAccess = localStorage.getItem("accessToken");
        const storedRefresh = localStorage.getItem("refreshToken");
        
        if (storedAccess) setAccessToken(storedAccess);
        if (storedRefresh) setRefreshToken(storedRefresh);
        if (storedAccess && !storedRefresh) {
            setAccessToken(null); 
            setRefreshToken(null);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            toast.success("Sesión finalizada");
        };
    }, [accessToken,refreshToken]);
    
    
    // GET PROFILE -------------------------------------------------------------
    const { data, isLoading, isError, error} = useQuery<UserType,{ status: number; message: string }> ({
        queryKey: ['getProfile', accessToken],
        queryFn: () => getProfileService(accessToken!),
        enabled: !!accessToken,
        refetchOnWindowFocus: false,
        retry: false,
    });
    
    useEffect(() => {
        if ((isError && error?.status === 401 && refreshToken) || (refreshToken && !accessToken)) {
            (async () => {
                try {
                    console.info("Starting session recovery process...");
                    toast.info("Verificando de sesión activa...");
                    
                    if (!accessToken && refreshToken) {
                        console.warn("Access token missing, attempting to use refresh token...");
                    }
                    
                    console.info("Using refresh token");
                    
                    const newToken = await getRefreshToken(refreshToken);

                    localStorage.setItem("accessToken", newToken.access);
                    localStorage.setItem("refreshToken", newToken.refresh);
                    console.info("New token successfully obtained");
                    
                    setAccessToken(newToken.access);
                    setRefreshToken(newToken.refresh);
                    
                } catch {
                    console.error("Session recovery failed. Clearing stored tokens...");
                    toast.error("Error al recuperar la sesión...")
                    setAccessToken(null);
                    setRefreshToken(null);
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                }
            })();
        }
    }, [isError, error, refreshToken, accessToken]);
    
    
    
    return isLoading ? <p>Loading Profile</p> :
    (
        <AuthContext.Provider value={{accessToken, refreshToken, currentUser: data ?? null, setAccessToken, setRefreshToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;