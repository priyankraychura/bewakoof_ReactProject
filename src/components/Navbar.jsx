import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'

const Navbar = () => {
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
            <li><Link to="/login-signup"><i className="fa-regular fa-user"></i></Link></li>
            <li><Link to="/wishlist"><i className="fa-regular fa-heart"></i></Link></li>
            <li><Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
