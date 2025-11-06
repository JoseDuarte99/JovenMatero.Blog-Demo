// src/context/AuthContext.js
import { createContext } from 'react';

interface AuthContextType {
    user: null; 
    logout: () => void; 
    isAuthenticated: boolean; 
}

const AuthContext = createContext <AuthContextType | null >(null);


export default AuthContext;