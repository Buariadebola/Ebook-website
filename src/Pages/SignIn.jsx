import React, { useState } from 'react'
import axios from 'axios'
import '../Style.Module.css'
import { Link, useNavigate } from 'react-router-dom'
import lock from '../Images/login-password-3.png'
import cancel from '../Images/cancel.png'
import { FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa'
import {FaExclamationTriangle } from "react-icons/fa";

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

      const handleSignin = async (event) => {
        setLoading(true)
        event.preventDefault();
        try{
          const response = await axios.post('http://localhost:3001/api/signin', {
            username,
            password
          });
          const { token, userId } = response.data;
          localStorage.setItem('token', token)
          localStorage.setItem('userId', userId);

          navigate('/home');
        } catch (error) {
  setError(error.response?.data?.message || 'Error signing in');
} finally {
  setLoading(false)
}
      }

  return (
    <>
    <div className='signin'>
        <div className="signin-box">
            <h1>Sign In</h1>
            <form className="login-form" onSubmit={handleSignin}>
              <Link to="/"><img className='cancel' src={cancel} alt="" /></Link>
                <div className="input-box"><FaUserCircle style={{color: 'rgb(168, 255, 168)', scale: '1.3', padding: '2px'}}/>
                <input id="username" type="text" name="username" placeholder='Email or username' value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input-box"><img src={lock} alt="" />
                <input id="password" type={showPassword ? `text` : `password`} name="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                {showPassword ? <FaEyeSlash onClick={() => setShowPassword(! showPassword)} style={{color: 'rgb(168, 255, 168)', scale: '1.3', padding: '2px'}}/> : <FaEye onClick={() => setShowPassword(! showPassword)} style={{color: 'rgb(168, 255, 168)', scale: '1.3', padding: '2px'}}/> }
                </div>
                {error && <div className='signup-error'><FaExclamationTriangle className='notice-icon' style={{marginRight: '5px'}}/> {error}</div>}
                <button type="submit" id="login-button">{loading ? <div className="spinner"></div> : "Sign in" }</button>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
        </div>
    </>
  )
}

export default SignIn
