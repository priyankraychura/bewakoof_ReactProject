import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router'
import axios from 'axios'

const Navbar = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(localStorage.getItem("isLoggedin") || null)
  const [ userId, setUserId ] = useState(localStorage.getItem("userId") || null)
  const [ showUserFetatures, setShowUserFeatures ] = useState(false)
  const [ userName, setUserName ] = useState(null)

  axios.get(`http://localhost:3000/users/${userId}`)
  .then((el) => {
    setUserName(el.data.fullname)
  })
  .catch((err) => {
    console.log(err);
  })

  const handleUserEnter = () => {
    setShowUserFeatures(true)
  }

  const handleUserLeave = () => {
    setShowUserFeatures(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedin")
    localStorage.removeItem("userId")
  }
  
  console.log(userName);
  
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/"><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" /></Link>
        </div>
          <ul className="nav-actions">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>MOBILE COVERS</li>
          </ul>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder='Search by products'/>
          </div>
          <ul className="icon-actions">
            <li className='saperator'></li>
            <li>
              { isLoggedIn ? <div>
                <i className="fa-regular fa-user" onMouseEnter={handleUserEnter} onMouseLeave={handleUserLeave}></i>
                  <div className="user-features" onMouseEnter={handleUserEnter} onMouseLeave={handleUserLeave} style={{display: showUserFetatures ? 'block' : 'none'}}>
                    <ul>
                      <li>Hi, Priyank</li>
                      <li>My Account</li>
                      <li><Link to="/wishlist">My Wishlist</Link></li>
                      <li>My Orders</li>
                      <li>My Wallet</li>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
              </div>
              : <Link to="/login-signup"><h6>LOGIN</h6></Link> }
            </li>
            <li><Link to="/wishlist"><i className="fa-regular fa-heart"></i></Link></li>
            <li><Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
