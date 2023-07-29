import React from 'react'
import logo from "../../assets/Airbnb-Logo-vector-image.png"
import "./Head.css"
import { Link } from 'react-router-dom'

const Head = () => {
   
  return (
  
    <div className='Navbar'>
        <img src={logo} alt="airbnb-logo" className='airbnb-logo'/>
        <div className='search-bar'>
            <div className='search-bar-text text'>Any-where</div>
            <div className='search-bar-text text'>Any week</div>
            <div className='text text-3'>Add Guests</div>
            <div className="search-icon">
            <span className="material-symbols-outlined">search</span>
            </div>
        </div>
        <div className='profile-container'>
            <div className="airbnb-your-home">Airbnb your home</div>
            <div className='globe'><span className="material-symbols-outlined">language</span>
            </div>
            <div className='profile'>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle button" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
  <span className="material-symbols-outlined menu">menu</span> 
  <span className="material-symbols-outlined account-circle">account_circle</span>
  </button>
  <ul className="dropdown-menu ">
    <li><Link to="/login" className="dropdown-item" href='/login'>Login</Link></li>
    <li><Link to="/register" className="dropdown-item login-item">Sign up</Link></li>
    <li><Link to="/"className="dropdown-item" href="#">Airbnb your home</Link></li>
    <li><a className="dropdown-item" href="#">Host an experience</a></li>
    <li><a className="dropdown-item" href="#">Help</a></li>
  </ul>
</div>
    </div>
        </div>
              </div>

   
    
  )
}

export default Head
