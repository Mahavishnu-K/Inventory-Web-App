import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import '@/styles/login.css';
import LoginImage from '@/assets/LoginImage.svg';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(''); 
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Sending request with:", { email, role, password });

        axios.post('http://localhost:5000/api/login', {
            email,
            role,
            password,
        })
            .then((response) => {
                localStorage.setItem('role', response.data.role);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('authToken', response.data.token);
                alert('Login successful!');
                navigate('/dashboard');
            }) 
            .catch((err) => {
                console.error("Login Error:", err.response?.data || err.message);
                alert(err.response?.data?.error || "Login failed. Please try again.");
            });
    };

    return (
        <div className='page'>
            <div className="wave">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>

            <div className='login-card'>
                <div className='form-container'>
                    <div className='text'>
                        <p id='p1'>Welcome !</p>
                        <h2>Login to</h2>
                        <p>your account</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label className='login-label' htmlFor="email">Email</label>
                            <input
                                className='login-input'
                                type="text"
                                placeholder="Enter your email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label className='login-label' htmlFor="user-role">User role</label>
                            <select
                                className='login-select'
                                id="user-role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="">Select your role</option>
                                <option value="retailer">Retailer</option>
                                <option value="supplier">Supplier</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='login-label' htmlFor="password">Password</label>
                            <input
                                className='login-input'
                                type="password"
                                id='password'
                                placeholder='Enter your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className='submit-button' type="submit">Login</button>
                    </form>

                    <div className='login-link'>
                        <p>New User?</p>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>

                <div className='image-container'>
                    <img src={LoginImage} alt="Login" style={{ width: '450px' }} />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
