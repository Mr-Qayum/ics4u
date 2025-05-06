import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
    const user = true;

    return (
        user ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes;