// Import Style

// Import React
import { createContext } from 'react';

// Import Contexts
// Import Components
// Import Types
// Import Others


type UserType = {
    username?: string;
    password?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    img?: string;   
}

interface AuthContextType {
    currentToken: {accessToken: string | null, refreshToken: string | null,} ;
    currentUser: UserType;
    // login: (username: string, password: string) => Promise<void>; 
    // logout: () => void; 
}

const AuthContext = createContext <AuthContextType | null >(null);


export default AuthContext;