import React, { useEffect, useState } from 'react'
import cartImg from '../assets/empty-cart.png'
import './Cart.css'
import { Link } from 'react-router'
import axios from 'axios'

function Cart() {
  const [isCartEmpty, setIsCartEmpty] = useState(true)
    useEffect(() => {
      axios.get(`http://localhost:3000/cart?email=priyank@gmail.com`)
      .then((el) => {
        if(el.data.length > 0) {
          setIsCartEmpty(false)
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }, [])
    
  return (
    <div>
        {
        isCartEmpty ?
        <div className="empty-cart">
          <img src={cartImg} alt="" />
          <h3>Hey, your bag feels so light</h3>
          <h4>Let’s add some items in your bag</h4>
          <button><Link to={"/"}>START SHOPPING</Link></button>
        </div>
        : 
        <div><h1>Cart Data</h1></div>
        }
    </div>
  )
}

export default Cart
