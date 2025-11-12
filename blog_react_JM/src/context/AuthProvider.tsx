// Import Style

// Import React
import { useState, type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

// Import Contexts
import AuthContext from './AuthContext';

// Import Components
// Import Types

// Import Others
import { getProfileService, logoutService } from '../../src/api/services';


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

    const [ currentUser, setCurrentUser ] = useState<UserType>({})

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const currentToken = {accessToken , refreshToken};

    // Get Profile --------------------------------------------- 
    const getProfile = useQuery({
        queryKey: [`useProfile`, accessToken],
        queryFn: () => getProfileService(currentToken),
        enabled: !!accessToken || !!refreshToken,
        retry: false,
    });

    if (getProfile.isError) {
        console.error(`No se pudo restablecer la sesión.`);
        logoutService(currentToken);
    };

    if (getProfile.isSuccess) {
        console.log(getProfile.data);
        setCurrentUser(getProfile.data)
    };

    return getProfile.isLoading 
            ? <p>Verificando sesión...</p> 
            : (
                <AuthContext.Provider value={{currentToken, currentUser }}>
                    {children}
                </AuthContext.Provider>
            );
}


export default AuthProvider;