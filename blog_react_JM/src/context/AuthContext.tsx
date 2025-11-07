// Import Style

// Import React
import { createContext } from 'react';

// Import Contexts
// Import Components
// Import Types
// Import Others


interface AuthContextType {
    user: object | null; 
    login: (username: string, password: string) => Promise<void>; 
    logout: () => void; 
    isAuthenticated: boolean; 
}

const AuthContext = createContext <AuthContextType | null >(null);


export default AuthContext;