import React from 'react'
import "./Explore.css"
const Explore = () => {
  return (
    <div> <div className='explore'>
    <div className="left-child">
        <h1>Explore</h1>
    </div>
    <div className="center-child">
        <div className="all">
        <i className="fa-solid fa-border-all"></i>
            <p>All</p>
        </div>
        <div className="men">
        <i className="fa-solid fa-person"></i>
            <p>Men</p>
        </div>
        <div className="women">
        <i className="fa-solid fa-person-dress"></i>
            <p>Women</p>
        </div>
    </div>
    <div className="right-child">
        <div className="filter">
            <h5>Filters</h5>
        </div>
        <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
        </div>
      
  </div>
  )
}

export default Explore