// Import Style

// Import React
import { useEffect, useState, type ReactNode } from 'react';

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
    const mutationLogout = useMutation ({
        mutationFn: () => logoutService(accessToken!, refreshToken!),
        onSuccess: () => {
            setAccessToken(null)
            setRefreshToken(null)
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            console.log('Cierre de Sesión Exitoso')
        },
        onError: (error) => {
            console.log("Error en el cierre de sesion", error);
        },
    })

    if (mutationLogout.isPending) {
        console.log("Finalizando Sesión")
    }

    const logout = () => {
        mutationLogout.mutate();
    }

// TOKEN VERIFICATION -------------------------------------------------------------
    useEffect(() => {
        const storedAccess = localStorage.getItem("accessToken");
        const storedRefresh = localStorage.getItem("refreshToken");
        
        if (storedAccess) setAccessToken(storedAccess);
        if (storedRefresh) setRefreshToken(storedRefresh);
        if (!storedAccess || !storedRefresh) {
            setAccessToken(null); 
            setRefreshToken(null);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        };
    }, []);


// GET PROFILE -------------------------------------------------------------
    const { data, isLoading, isError, error} = useQuery<UserType,{ status: number; message: string }> ({
        queryKey: ['getProfile', accessToken],
        queryFn: () => getProfileService(accessToken!),
        enabled: !!accessToken,
        refetchOnWindowFocus: false,
        retry: false,
    })

    useEffect(() => {
    if (isError && error.status === 401 && refreshToken || refreshToken && !accessToken) {
        (async () => {
        try {
            const newToken = await getRefreshToken(refreshToken);
            localStorage.setItem("accessToken", newToken);
            setAccessToken(newToken);
        } catch {
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