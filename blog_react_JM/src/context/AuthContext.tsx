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
    accessToken: string | null;    
    setAccessToken: (accessToken: string ) => void;
    refreshToken: string | null;
    setRefreshToken: (refreshToken: string ) => void;
    currentUser: UserType | null;
    // setCurrentUser: (currentUser: UserType) => void;
    // login: (username: string, password: string) => Promise<void>; 
    logout: (accessToken: string, refreshToken: string  ) => void; 
}

const AuthContext = createContext <AuthContextType | null >(null);


export default AuthContext;