// Import Style

// Import React
import { useState, type ReactNode } from 'react';

// Import Contexts
import AuthContext from './AuthContext';

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

    const [ currentUser, setCurrentUser ] = useState<UserType>({})

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const currentToken = {accessToken , refreshToken};

    // Get Profile --------------------------------------------- 

    return 
            (
                <AuthContext.Provider value={{currentToken, currentUser, setCurrentUser }}>
                    {children}
                </AuthContext.Provider>
            );
}


export default AuthProvider;