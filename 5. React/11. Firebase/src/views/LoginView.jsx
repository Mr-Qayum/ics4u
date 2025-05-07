import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useStoreContext } from '../context';
import { useNavigate } from 'react-router-dom';
import './LoginView.css';

export default function LoginView() {
    const [form, setForm] = useState({ email: '', password: '' });
    const { setUser } = useStoreContext();
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, form.email, form.password);
            setUser(result.user);
            navigate("/authenticated");
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            navigate("/authenticated");
        } catch (error) {
            console.error("Google sign-in error:", error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Login</h2>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required />
                <button type="submit">Login</button>
            </form>

            <button onClick={googleSignIn} className="google-signin-btn">Google Sign In</button>
        </>
    );
}
