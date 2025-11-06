import { useState, useEffect, type ReactNode } from 'react';
import AuthContext from './AuthContext';
import { login as loginService, logout as logoutService } from '../../src/api/login';


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

export const AuthProvider = ({ children }: AuthProviderType) => {
    const [user, setUser] = useState<UserType>({});
    
    const login = async (username: string, password: string) => {
        const { accessToken, refreshToken } = await loginService(username, password);
        const response = await fetch('/api/users/me/', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const userData = await response.json();
        setUser(userData);
    };
    
    const logout = async () => {
        await logoutService();
        setUser(null);
    };
    
    const isAuthenticated = !!localStorage.getItem('accessToken');
    
    useEffect(() => {
        if (isAuthenticated && !user) {
            fetch('/api/users/me/', {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(() => logout());
        }
    }, []);
    

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
        {children}
        </AuthContext.Provider>
    );
};
