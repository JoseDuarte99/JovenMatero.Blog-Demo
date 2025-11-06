import type { FormDataType } from "../page/Register/Register";

// API URL ------------------------------------------------------------
const API_URL = 'http://localhost:8000/api';

// Login Function ------------------------------------------------------------
export const login = async (username: string, password: string) => {
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

export const logout = async () => {
    const refresh = localStorage.getItem('refresh');
    await fetch('/api/token/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refresh}`,
        },
        body: JSON.stringify({ refresh }),
    });
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
};


// GET PROFILE ------------------------------------------------------------
export const getProfile = async (token: string) => {
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
export const register = async (formData: FormDataType) => {
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


// export const register = async (formData: FormDataType) => {

//     try {
//         const form = new FormData();
//         form.append(`username`, formData.username);
//         form.append(`password`, formData.password);
//         form.append(`first_name`, formData.firstName);
//         form.append(`last_name`, formData.lastName);
//         form.append(`email`, formData.email);
//         if (formData.img) {
//             form.append(`image`, formData.img);
//         }

//         const response = await fetch(`${API_URL}/auth/register/`, {
//             method: 'POST',
//             body: form,
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             let errorMessage = `${response.statusText}`;
//             if (data.username) {
//                 errorMessage=`Usuario no valido: ${data.username}`
//                 throw new Error (errorMessage)
//             } 
//             if (data.password) {
//                 errorMessage=`Contraseña no valida: ${data.password}`
//                 throw new Error (errorMessage)
//             } 
//             if (data.email) {
//                 errorMessage=`Email no valido: ${data.email}`
//                 throw new Error (errorMessage)
//             } 
//             if (data.first_name) {
//                 errorMessage=`Nombre no valido: ${data.first_name}`
//                 throw new Error (errorMessage)
//             } 
//             if (data.last_name) {
//                 errorMessage=`Apellido no valido: ${data.last_name}`
//                 throw new Error (errorMessage)
//             } 
//         }

//         return `Register Success`;
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             throw new Error(error.message);
//         } else {
    //             throw new Error('Register failed: unknown error');
//         }
//     }

// };
