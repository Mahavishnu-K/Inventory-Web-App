import './login.css'
import Signupimg from '@/assets/SignupIcon.svg'

function Login(){
    return(
        <div className='login-card'>
            <div className='form-container'>
                <div className='text'>
                    <p id='p1'>Welcome !</p>
                    <h2>Sign up to</h2>
                    <p>your account</p>
                </div>
                
                <form action="POST">
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" id="email" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="username">User name</label>
                        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your user name" id="username" required/>
                    </div> 
                    <div className='form-group'>  
                        <label htmlFor="user-role">User role</label>
                        <select id="user-role" required>
                            <option value="" disabled selected>Select your role</option>
                            <option value="retailer">Retailer</option>
                            <option value="supplier">Supplier</option>
                        </select>
                    </div>
                    <div className='form-group'>  
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='Enter your Password' required/>
                    </div>
                    <div className='form-group'> 
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id='confirm-password' placeholder='Confirm your Password' required/>
                    </div>
                    
                    <button type="submit">Register</button>
                </form>
                <div className='login-link'>
                    <p>Already have an Account? </p>
                    <a href="#">Log in</a>
                    
                </div>
                
            </div>
            <div className='image-container'>
                <img src={Signupimg} alt="Sign up Image" style={{width:'450px'}} />
            </div>
        </div>
    )
}

export default Login