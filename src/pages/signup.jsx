import React from 'react';
import { Link } from 'react-router-dom';
import '@/styles/signup.css';
import Signupimg from '@/assets/SignupIcon.svg';

function SignupPage() {
    return (
        <div className='page'>
            {/* SVG Wave */}
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

            {/* Signup Card */}
            <div className='login-card'>
                <div className='form-container'>
                    <div className='text'>
                        <p id='p1'>Welcome !</p>
                        <h2>Sign up to</h2>
                        <p>your account</p>
                    </div>

                    <form>
                        <div className='form-group'>
                            <label className='signup-label' htmlFor="email">Email</label>
                            <input
                                className='signup-input'
                                type="email"
                                placeholder="Enter your email"
                                id="email"
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label className='signup-label' htmlFor="username">User name</label>
                            <input
                                className='signup-input'
                                type="text"
                                placeholder="Enter your user name"
                                id="username"
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label className='signup-label' htmlFor="user-role">User role</label>
                            <select className='signup-select' id="user-role" required>
                                <option value="">Select your role</option>
                                <option value="retailer">Retailer</option>
                                <option value="supplier">Supplier</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='signup-label' htmlFor="password">Password</label>
                            <input
                                className='signup-input'
                                type="password"
                                id='password'
                                placeholder='Enter your Password'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label className='signup-label' htmlFor="confirm-password">Confirm Password</label>
                            <input
                                className='signup-input'
                                type="password"
                                id='confirm-password'
                                placeholder='Confirm your Password'
                                required
                            />
                        </div>

                        <Link to="/dashboard"><button className='submit-button' type="submit">Register</button></Link>
                    </form>

                    <div className='signup-link'>
                        <p>Already have an Account?</p>
                        <Link to="/login">Log in</Link> 
                    </div>
                </div>

                <div className='image-container'>
                    <img src={Signupimg} alt="Sign up" style={{ width: '450px' }} />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
