import React, { useState } from 'react'
import axios from 'axios'
import '../Style.Module.css'
import { Link } from 'react-router-dom'
import lock from '../Images/login-password-3.png'
import mail from '../Images/mail.png'
import cancel from '../Images/cancel.png'
import { FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa'
import {FaExclamationTriangle } from "react-icons/fa";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (event) => {
    setLoading(true)
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:3001/api/signup', {
        username,
        email,
        password
      });
      console.log(response.data)
      setError(null);
    alert("Signup successful! You can now sign in.");
    } catch (error) {
  setError(error.response?.data?.message || 'Error signing in');
} finally {
  setLoading(false)
}
  }

  return (
    <div>
      <div className='signup'>
        <div className="signup-box">
            <h1>Sign Up</h1>
            <form className="login-form" onSubmit={handleSignup}>
                <Link to="/"><img className='cancel' src={cancel} alt="" /></Link>
                <div className="input-box"><FaUserCircle style={{color: 'rgb(168, 255, 168)', scale: '1.3', padding: '2px'}}/>
                <input id="username" type="text" name="username" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input-box"><img className='mail' src={mail} alt="" />
                <input id="email" type="email" name="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="input-box"><img src={lock} alt="" />
                <input id="password" type={showPassword ? `text` : `password`} name="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                {showPassword ? <FaEyeSlash onClick={() => setShowPassword(! showPassword)} style={{color: 'rgb(168, 255, 168)', scale: '1.3', padding: '2px'}}/> : <FaEye onClick={() => setShowPassword(! showPassword)} style={{color: 'rgb(168, 255, 168)', scale: '1.3', padding: '2px'}}/> }
                </div>
                {error && <div className='signup-error'><FaExclamationTriangle className='notice-icon' style={{marginRight: '5px'}}/> {error}</div>}
                <button type="submit" id="login-button" >{loading ? <div className="spinner"></div> : "Sign up" }</button>
                <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignUp
