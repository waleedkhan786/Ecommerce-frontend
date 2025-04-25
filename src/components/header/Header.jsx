import { useEffect,useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import { AppAuth } from '../../../Context/AppContext.jsx';

export const Header = () => {
  const auth = AppAuth();
  const [path, setpath]= useState("");
  useEffect(()=>{
setpath(window.location.pathname)
  }, []);
  return (
    <div className='Header'>
        <header>
            <div className="navbar">
                <div className="left">
                  <div className="number">
                  <h1>37</h1>
                  </div>
                  <div className="line">
                  </div>
                  <div className="content">
                    <h3>Orders</h3>
                    <p>Last 7 Days</p>
                  </div>
                </div>


                <div className="center">
                    <div className="centr-content">
                     {auth.loggedIn && auth.user ? <> <Link to={"/dashboard"} className={`db ${path == "/dashboard"?"active":''}`}>Dashboard</Link>
                     <Link  to={"/website"} className={`web ${path == "/website"?"active":''}`}>Website</Link></>:<> <Link to={"/login"} className="db">Login</Link>
                     <Link  to={"/signup"} className="db">Signup</Link></>}
                    </div>
                </div>
                <div className="right">
                    <div className="cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                    </div>
                    <div className="friends"></div>
                    <div className="profile">
                    <img src='./user.JPG'></img>
                    </div>
                    <div className="name">
                      <p>{auth.user?.name}</p>
                    </div>
                </div>
            </div>
        </header>
        
    </div>
  )
}
