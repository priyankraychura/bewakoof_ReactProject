import React from 'react'
import cartImg from '../assets/empty-cart.png'
import './Cart.css'
import { Link } from 'react-router'

function Cart() {
    
    
  return (
    <div>
        <div className="empty-cart">
          <img src={cartImg} alt="" />
          <h3>Hey, your bag feels so light</h3>
          <h4>Let’s add some items in your bag</h4>
          <button><Link to={"/"}>START SHOPPING</Link></button>
        </div>
    </div>
  )
}

export default Cart
