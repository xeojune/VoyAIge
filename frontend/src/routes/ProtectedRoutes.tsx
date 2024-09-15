import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import getUserStatus from "../api/UserStatus";
import { useRecoilState } from "recoil";
import { isAuthenticatedState } from "../states/atoms/authState";

const ProtectedRoutes: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            setIsLoading(true); // Start loading state
            
            // Call the getUserStatus function to check if the user is authenticated
            const userStatus = await getUserStatus();

            if (userStatus) {
                setIsAuthenticated(true); // User is authenticated
            } else {
                setIsAuthenticated(false); // User is not authenticated
            }

            setIsLoading(false); // End loading state
        };

        checkAuthentication(); // Call the function on component mount
    }, []);

    // Show a loading spinner or some UI while checking authentication
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If authenticated, allow access to the protected route, otherwise redirect to login
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
