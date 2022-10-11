import { useLocation, Navigate, Outlet } from "react-router-dom";

import { validateAuthentication } from "../localStorageService/auth";

const RequiredAuth = () => {
    const location = useLocation();
    const isAuthenticated = validateAuthentication();

    return (
        isAuthenticated
            ? <Outlet/>
            : <Navigate to="/" state={{ from: location }} replace />

    )
}

export default RequiredAuth;