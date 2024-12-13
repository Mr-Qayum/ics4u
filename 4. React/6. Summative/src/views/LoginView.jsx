import React from 'react';
import './LoginView.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

function LoginView() {
  const email = useRef('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useStoreContext();

  async function loginByEmail(event) {
    event.preventDefault();

    try {
      const user = (await signInWithEmailAndPassword(auth, email.current.value, password)).user;
      navigate('/movies/all');
      setUser(user);
    } catch (error) {
      console.log(error);
      alert("Error signing in!");
    }
  }

  async function loginByGoogle() {
    try {
      const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
      navigate('/movies/all');
      setUser(user);
    } catch (error) {
      console.log(error);
      alert("Error signing in!");
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={(event) => { loginByEmail(event) }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={email} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required />

          <button type="submit" className="login-button">Login by Email</button>
        </form>
        <button onClick={() => loginByGoogle()} type="submit" className="login-button">Login by Google</button>
        <p className="register-link">New to Netflix? <a href="#">Register now</a></p>
      </div>
    </div>
  );
}

export default LoginView;
