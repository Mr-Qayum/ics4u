import { Navigate, Outlet } from 'react-router-dom';
import { useStoreContext } from '../context';

export default function ProtectedRoutes() {
    const { user } = useStoreContext();

    return (
        user ? <Outlet /> : <Navigate to="/login" />
    );
}
