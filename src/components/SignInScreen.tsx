import React, { useState } from 'react';
import './SignInScreen.css';
import logo from '../assets/Group5.png';

interface SignInScreenProps {
    onLogin: () => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        // In a real app, validate credentials here.
        // For now, simulate success:
        onLogin();
    };

    return (
        <div className="signin-container">
            <div className="signin-logo-container">
                <img src={logo} alt="BHC Logo" className="signin-logo" />
            </div>

            <div className="glass-card">
                <h1 className="signin-title">Sign In to the BHC Admin Panel</h1>

                <form onSubmit={handleSubmit} className="signin-form">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Email Address or Phone"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="signin-input"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="signin-input"
                        />
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>

                <div className="signin-footer">
                    <span>Dont have an account? </span>
                    <a href="#" className="contact-link">Contact Admin</a>
                </div>
            </div>
        </div>
    );
};

export default SignInScreen;
