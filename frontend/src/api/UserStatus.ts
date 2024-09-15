import axios from "axios";

const getUserStatus = async () => {
    try {
        // Retrieve the JWT token from localStorage
        const token = localStorage.getItem('accessToken');

        if (!token) {
            return;
        }

        // Send GET request to the protected /auth/status endpoint with the token
        const response = await axios.get('http://localhost:3000/auth/status', {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        });

        // If the request succeeds, log the user status
        console.log('User status:', response.data);
        return response.data
    } catch (error) {
        console.error('Error fetching user status:', error);
    }
};

export default getUserStatus;
