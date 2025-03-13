import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='container'>
            <div className='heading'>
            <h1>BuyMore</h1>
            <span></span>
            </div>
            <div className='menus'>
<div className="menu">
<i className="fa-solid fa-bolt"></i>
<p>Popular Products</p>
</div>
<div className="menu">
<i className="fa-solid fa-bullseye"></i>
<p>Explore New</p>
</div>
<div className="menu">
<i className="fa-solid fa-cart-shopping"></i>
<p>Clothing & Shoes</p>
</div>
<div className="menu">
<i className="fa-solid fa-gifts"></i>
<p>Gifts & Living</p>
</div>
<div className="menu">
<i className="fa-solid fa-lightbulb"></i>
<p>Inspiration</p>
</div>

            </div>
            <hr></hr>
            <div className="actions">
                <div className="act-heading">
                    <p id='small'>Quick Actions</p>
                </div>
                <div className="links">
                    <div className="link">
                    <i className="fa-solid fa-plus act-icon"></i>
                    <p id='small'>
                        Request & Product
                    </p>
                    </div>
                    <div className="link">
                    <i className="fa-solid fa-plus act-icon" ></i>
                    <p id='small'>
                        Add Member
                    </p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="orders">
                <div className='ord-heading'>
                    <p>Last Orders</p>
                </div>
                <div className='image'>
                    <img src='./download.png'></img>
                    <p>DXC Nike</p>
                </div>
                <div className='image'>
                    <img src='./download.png'></img>
                    <p>Outer Wear</p>
                </div>
                <p className='ord-heading'>See all</p>
            </div>
           
           <div className="logout">
           <i className="fa-solid fa-right-from-bracket"></i>
            <p>LogOut</p>
           </div>
        </div>

        
    </div>
  )
}

export default Sidebar