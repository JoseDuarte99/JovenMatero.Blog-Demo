// API URL ------------------------------------------------------------
const API_URL = 'http://localhost:8000/api';


// GET ALL POSTS SERVICE ------------------------------------------------------------

export const getAllPostsService = async () => {
    
    const response = await fetch(`${API_URL}/posts/`, {
        headers: {
            "Content-Type": "application/json" ,
        },
    });
    
    if (!response.ok) {
        throw { status: response.status, message: response.statusText };
    }
    
    return await response.json();
};

