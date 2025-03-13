import React from 'react'
import "./Signup.css"
const Signup = () => {
  return (
    <div>
       
 <div className='signup-page'>
  
 <div className="info">
            <h1 id='signup-head'>Buy More</h1>
            <span id='info'>Join the largest online store</span>
            <p id='signup-para'> Create an account and enjoy exclusive deals offers and discounts</p>
        </div>

  <form>
    <h2>Sign Up</h2>
    <label htmlFor='name'>Name</label>
    <input type='text' id='name' placeholder='Enter your Name'/>

    <label htmlFor='email'>Email</label>
    <input type='email' id='email' placeholder='Enter your email' required/>
    <label htmlFor='password'>Password</label>
    <input type='password' id='password' placeholder='Enter your password' required/>
    <button type='submit'>Sign Up</button>

  </form>
</div>
    </div>
  )
}

export default Signup