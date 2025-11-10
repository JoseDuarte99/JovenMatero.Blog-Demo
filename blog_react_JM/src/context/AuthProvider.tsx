// Import Style

// Import React
import { useEffect, useState, type ReactNode } from 'react';
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

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);




    const login = async (username: string, password: string) => {
        try {
        await loginService(username, password);
        // setIsAuthenticated(true);
        } catch (error) {
        console.error(error);
        throw error;
        }
    };

    const logout = () => logoutService;


    const token = localStorage.getItem('accessToken');

    // Get Profile --------------------------------------------- 
    const getProfile= useQuery({
        queryKey: [`useProfile`, token],
        queryFn: () => getProfileService(token),
        enabled: !!token,
        retry: false,
    });

    if (getProfile.isError) logout();

    useEffect(() => {
        if (getProfile.data) {
            console.log('Perfil cargado:', getProfile.data);
            setUser(getProfile.data)
        } else {
            console.log(`Sin sesión existente`);
        }
    }, [getProfile.data]);

    return getProfile.isLoading 
            ? <p>Verificando sesión...</p> 
            : (
                <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
                    {children}
                </AuthContext.Provider>
            );
}


export default AuthProvider;