// API URL ------------------------------------------------------------
const API_URL = import.meta.env.VITE_API_URL;

// GET ALL POSTS SERVICE ------------------------------------------------------------
export const getAllPostsService = async () => {
    const response = await fetch(`${API_URL}/posts/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw { status: response.status, message: response.statusText };
    }

    return await response.json();
};

// SUBSCRIPTION SERVICE ------------------------------------------------------------
export const subscriptionService = async (email: string) => {
    try {
        const response = await fetch(`${API_URL}/subscriptions/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw data;
        }

        return "Subscription Success";
    } catch (error) {
        console.error("Subscription Error:", error);
        throw error;
    }
};
