
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
        
        if (!response.ok) {
            throw new Error(`Login failed - HTTP ${response.status}: ${response.statusText}`);
            
        }

        return await response.json(); // { access, refresh }
        
    } catch (error) {
        throw new Error(`Failed: ${error}`)
    };
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
