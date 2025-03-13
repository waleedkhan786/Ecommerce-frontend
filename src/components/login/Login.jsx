import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className='login-page'>
  
  <div className="info">
            <h1 id='login-head'>Buy More</h1>
            <span id='info'>Join the largest online store</span>
            <p id='login-para'>Dicsover Your Favourite Products And Save Money</p>
          
        </div>

        <form>
          <h2>Login</h2>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Enter your email' required/>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Enter your password' required/>
          <button type='submit'>Login</button>

        </form>
      </div>
    
  )
}

export default Login