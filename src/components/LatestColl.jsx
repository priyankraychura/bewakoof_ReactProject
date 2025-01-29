import React from 'react'
import './Navbar.css'

function LatestColl() {
  return (
    <div>
      <h3 className='title'>Latest Collections</h3>
      <div className="coll-slider">
        <div className="img"><img src="https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Hoodies---Sweatshirts-Common-1738079273.jpg" alt="" /></div>
        <div className="img"><img src="https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Jackets-Common-1738079272.jpg" alt="" /></div>
        <div className="img"><img src="https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Baggy-Joggers-Common-1738079271.jpg" alt="" /></div>
        <div className="img"><img src="https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Graphic-Printed-OS-Tshirts-Common-1738079271.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default LatestColl
