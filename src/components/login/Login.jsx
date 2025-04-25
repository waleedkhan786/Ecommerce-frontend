import React, { useState } from "react";

import "./Login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { AppAuth } from "../../../Context/AppContext";
const Login = () => {
  const auth = AppAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  try{
const data = await auth?.Login(email,password);
if(data){
   toast.success("User LogedIn Successfully", "login")
   return window.location.pathname = "/website"
}

  }catch(err){
    return toast.error(err.message, "login")

  }
    
  };

  return (
    <div className="login-page">
      <div className="info">
        <h1 id="login-head">Buy More</h1>
        <span id="info">Join the largest online store</span>
        <p id="login-para">Dicsover Your Favourite Products And Save Money</p>
      </div>

      <form>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
