// Import Style

// Import React
import { type ReactNode } from 'react';
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

// type UserType = {
//     username?: string;
//     password?: string;
//     email?: string;
//     firstName?: string;
//     lastName?: string;
//     img?: string;   
// }

const AuthProvider = ({ children }: AuthProviderType) => {

    // const [user, setUser] = useState<UserType | null>(null)
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
        logout();
        console.error(`No se pudo restablecer la sesión.`);
        console.error(getProfile.error)
    };

    if (getProfile.isSuccess) {
        console.log(getProfile.data);
    };

    return getProfile.isLoading 
            ? <p>Verificando sesión...</p> 
            : (
                <AuthContext.Provider value={{login, logout, currentToken }}>
                    {children}
                </AuthContext.Provider>
            );
}


export default AuthProvider;