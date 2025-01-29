import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" />
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
            <li><Link to="/login"><i className="fa-regular fa-user"></i></Link></li>
            <li><i className="fa-regular fa-heart"></i></li>
            <li><i className="fa-solid fa-bag-shopping"></i></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
