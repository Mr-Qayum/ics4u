import React from 'react';
import { useStoreContext } from '../context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import KeyTest from '../components/KeyTest';

export default function AuthenticatedView() {
    const { user, setUser } = useStoreContext();
    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        signOut(auth);
        navigate("/");
    }

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <button onClick={() => logout()}>Logout</button>
            <h1>Authenticated</h1>
            <h2>{`Hello ${user.displayName}`}</h2>

            <KeyTest />
        </div>
    );
}
