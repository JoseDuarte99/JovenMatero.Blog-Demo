// Import Style

// Import React
import { createContext } from 'react';

// Import Contexts
// Import Components
// Import Types
// Import Others


export type UserType = {
    username?: string;
    password?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    image?: string;   
}

interface AuthContextType {
    accessToken: string | null;    
    setAccessToken: (accessToken: string ) => void;
    refreshToken: string | null;
    setRefreshToken: (refreshToken: string ) => void;
    currentUser: UserType | null;
    logout: (accessToken: string, refreshToken: string  ) => void; 
}

const AuthContext = createContext <AuthContextType | null >(null);


export default AuthContext;