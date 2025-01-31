import React, { useEffect, useState } from 'react'
import './CartNav.css'
import { Link } from 'react-router'
import axios from 'axios'

function CartNav() {
  const [ userId, setUserId ] = useState(localStorage.getItem("userId") || null);
  const [ userEmail, setUserEmail ] = useState(null)
  console.log(userId);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${userId}`)
    .then((el) => {
      setUserEmail(el.data.email);
    })
  }, [])
  
  return (
    <div>
      <nav>
        <Link to="/"><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" /></Link>
        <div className="user-email">
            <span>Signed as</span>
            <h3>{userEmail}</h3>
        </div>
      </nav>
    </div>
  )
}

export default CartNav
