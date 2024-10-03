import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './loginUser.css';
import AuthContext from "../../context/AuthContext";
import { LoginUser } from "../../services/auth/authService";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };

        try {
            await LoginUser(userData, setAuth);
        } catch (error) {
            console.error(error.message || 'An error occurred during sign-in');
        }
    };

    useEffect(() => {
        if (auth) {
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }

    }, [auth, navigate])

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>"Don't have an account? <a href="#" onClick={() => navigate("/register")}>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;