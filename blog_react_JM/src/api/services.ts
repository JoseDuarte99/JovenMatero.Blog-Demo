import type { FormDataType } from "../page/Register/Register";

// API URL ------------------------------------------------------------
const API_URL = 'http://localhost:8000/api';

// Login Function ------------------------------------------------------------
export const loginService = async (username: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        
        if (!response.ok) {
            const errorMessage = data?.detail || `${response.status}: ${response.statusText}`;
            throw new Error(`Login failed: ${errorMessage}`);
        }
        
        const accessToken = data.access;
        const refreshToken = data.refresh;
        
        localStorage.setItem(`accessToken`, accessToken);
        localStorage.setItem(`refreshToken`, refreshToken);
        
        return { accessToken, refreshToken };
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Login failed: ${error.message}`);
        } else {
            console.error(error);
            throw new Error('Login failed: unknown error');
        }
    }
    
};

// Logout Function ------------------------------------------------------------

export const logoutService = async () => {
    try {
        const refresh = localStorage.getItem('refreshToken');
        await fetch(`${API_URL}/auth/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${refresh}`,
            },
            body: JSON.stringify({ refresh }),
        })
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    } catch {
        throw new Error ('Logout Error')
    }
}


// GET PROFILE ------------------------------------------------------------
export const getProfileService = async (token: string | null) => {
    if (!token) throw (`No hay sesión existente.`)
    const response = await fetch(`${API_URL}/users/me/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }
    
    return await response.json(); // { id, username, email, ... }
};

// Register Function ------------------------------------------------------------
export const registerService = async (formData: FormDataType) => {
    const form = new FormData();
    form.append("username", formData.username);
    form.append("password", formData.password);
    form.append("first_name", formData.firstName);
    form.append("last_name", formData.lastName);
    form.append("email", formData.email);
    if (formData.img) {
        form.append("image", formData.img);
    }
    
    try {
        const response = await fetch(`${API_URL}/auth/register/`, {
            method: "POST",
            body: form,
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw data; 
        }
        
        return "Register Success";
    } catch (error) {
        console.error("Register Error:", error);
        throw error;
    }
};

