import type { FormDataType } from "../page/Register/Register";


// API URL ------------------------------------------------------------
const API_URL = 'http://localhost:8000/api';

// LOGIN SERVICE ------------------------------------------------------------
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

// LOGOUT SERVICE ------------------------------------------------------------

export const logoutService = async ( accessToken: string, refreshToken: string ): Promise<unknown> => {
    try {
        const response = await fetch(`${API_URL}/auth/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ refresh: refreshToken }),
        });
        if (response.ok) {
            console.warn("Refresh token has been blacklisted.")
            console.info("Session ended")
        }
        return response.json();
    } catch {
        throw new Error('Logout Error');
    }
};


// REFRESH TOKEN SERVICE ------------------------------------------------------------

export const getRefreshToken = async (refreshToken: string) => {
    const response = await fetch(`${API_URL}/auth/refresh/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            refresh: refreshToken,
        }),
    });
    if (!response.ok) {
        throw new Error(`Error updating token`);
    } 
    const data = await response.json();
    
    
    
    return data;
}



// GET PROFILE SERVICE ------------------------------------------------------------

export const getProfileService = async (accessToken: string) => {
    
    const response = await fetch(`${API_URL}/users/me/`, {
        headers: {
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    
    if (!response.ok) {
        throw { status: response.status, message: response.statusText };
    }
    
    return await response.json(); // { id, username, email, ... }
};

// REGISTER SERVICE ------------------------------------------------------------
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

