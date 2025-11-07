// Import Style

// Import React
import { useState, useEffect, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

// Import Contexts
import AuthContext from './AuthContext';

// Import Components
// Import Types

// Import Others
import { getProfileService, loginService, logoutService } from '../../src/api/services';



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
    const [user, setUser] = useState<UserType | null>(null);
    
    // DEBERIA PODER SIMPLIFICARSE - INVESTIGAR
    const login = async (username: string, password: string) => {
        const { accessToken} = await loginService(username, password);
        const response = await fetch('/api/users/me/', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const userData = await response.json();
        setUser(userData);
    };
    
    const logout = async () => {
        await logoutService();
        setUser({});
    };
    
    const token = localStorage.getItem('accessToken') || "";
    const isAuthenticated = !!token;
    
    const { isLoading, isError, data } = useQuery({
        queryKey:["getProfileService", token],
        queryFn: () => getProfileService(token),
        enabled: isAuthenticated,
        retry: false, 
    })
    
    useEffect(() => {
        if (data) { 
            setUser(data)
        } else if (isError) {
            logout()
        }
    }, [data, isError]);

    return isLoading 
            ? <p>Verificando sesión...</p> 
            : (
                <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
                    {children}
                </AuthContext.Provider>
            );
}

// INVESTIGAR SI CONVIENE UTILIZAR REACT QUERY
// useEffect(() => {
    
    
    // if (isAuthenticated && user === null) {
    //     fetch(`${API_URL}/users/me/`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then(res => {
    //         if (!res.ok) throw new Error('Token inválido');
    //         return res.json();
    //     })
    //     .then(data => setUser(data))
    //     .catch(() => {
    //         logout(); // Limpia token y usuario
    //     })
    //     .finally(() => setIsLoading(false));
    // } else {
        //     setIsLoading(false);
    // }
// }, [isAuthenticated, user, token]);





export default AuthProvider;