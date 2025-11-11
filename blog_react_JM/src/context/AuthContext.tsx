// Import Style

// Import React
import { createContext } from 'react';

// Import Contexts
// Import Components
// Import Types
// Import Others


interface AuthContextType {
    login: (username: string, password: string) => Promise<void>; 
    logout: () => void; 
    currentToken: {accessToken: string | null, refreshToken: string | null,} ;
}

const AuthContext = createContext <AuthContextType | null >(null);


export default AuthContext;