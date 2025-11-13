import type { FormDataType } from "../page/Register/Register";

type currentTokenType = {accessToken: string | null; refreshToken: string | null }


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

export const logoutService = async (currentToken: currentTokenType) => {
    const { refreshToken } = currentToken;

    console.log(refreshToken)
    try {;
        const response = await fetch(`${API_URL}/auth/logout/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken })

        })

        if (response.status === 205 || response.status === 200) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            console.log(`Cierre de sesion exitoso`)
        } else {
            throw new Error ('Logout Error')
        }

    } catch {
        throw new Error ('Logout Error')
    }
}


// REFRESH TOKEN  ------------------------------------------------------------

export const getRefreshToken = async ({refreshToken}: currentTokenType) => {
    
    const response = await fetch(`${API_URL}/auth/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
    });
    
    if (!response.ok) {
        throw new Error(`Error updating token`);
    }
    
    const data = await response.json();
    
    return data.access;
}



// GET PROFILE ------------------------------------------------------------

export const getProfileService = async (currentToken: currentTokenType) => {

    const {accessToken, refreshToken} = currentToken;

    if (!accessToken && !refreshToken) throw (`No hay sesión existente.`)

    const response = await fetch(`${API_URL}/users/me/`, {
        headers: {
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    
    if (response.status === 401) {
        const newAccessToken = await getRefreshToken(currentToken);
        localStorage.setItem(`accessToken`, newAccessToken);

        // Retry obtaining profile
        const retryResponse = await fetch(`${API_URL}/users/me/`, {
            headers: { 
                Authorization: `Bearer ${newAccessToken}` 
            },
        });
        
        if (!retryResponse.ok) {
            throw new Error('Error retrieving profile after retrying');
        }
        return await retryResponse.json();
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

