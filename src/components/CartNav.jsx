import React from 'react'
import './CartNav.css'
import { Link } from 'react-router'

function CartNav() {
  return (
    <div>
      <nav>
        <Link to="/"><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" /></Link>
        <div className="user-email">
            <span>Signed as</span>
            <h3>priyankraychura@gamil.com</h3>
        </div>
      </nav>
    </div>
  )
}

export default CartNav
