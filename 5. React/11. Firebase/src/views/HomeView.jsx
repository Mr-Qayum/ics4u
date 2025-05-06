import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeView() {
    const navigate = useNavigate();

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: '#f0f0f0',
                borderBottom: '1px solid #ccc'
            }}>
                <h1 style={{ margin: 0 }}>My App</h1>
                <div>
                    <button onClick={() => { navigate("/login") }} style={{ marginRight: '1rem' }}>Login</button>
                    <button onClick={() => { navigate("/register") }}>Register</button>
                </div>
            </header>
            <main style={{ padding: '2rem' }}>
                <h2>Welcome to the Homepage</h2>
                <p>This is a simple React homepage layout.</p>
            </main>
        </div>
    );
}
