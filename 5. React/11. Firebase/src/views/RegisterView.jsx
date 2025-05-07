import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useStoreContext } from '../context';
import { useNavigate } from 'react-router-dom';
import "./RegisterView.css";

export default function RegisterView() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const { setUser } = useStoreContext();
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
            setUser(result.user);
            navigate("/authenticated");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log("User signed in with Google:", result.user);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2rem auto' }}>
                <h2>Register</h2>
                <input name="username" placeholder="Username" onChange={handleChange} value={form.username} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required />
                <button type="submit">Register</button>
            </form>

            <button onClick={googleSignIn} className="google-signin-btn">Google Sign In</button>
        </>
    );
}
