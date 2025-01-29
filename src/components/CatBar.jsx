import React from 'react'
import { Link } from 'react-router'

function CatBar() {
  return (
    <div>
      <div className="catbar">
        <ul>
            <li><Link to="catpage/men">MEN</Link></li>
            <li><Link to="catpage/women">WOMEN</Link></li>
            <li><Link to="catpage/winterwear">WINTERWEAR</Link></li>
            <li><Link to="catpage/plus-size">PLUS SIZE</Link></li>
            <li><Link to="catpage/accessories">ACCESSORIES</Link></li>
            <li><Link to="catpage/off-march">OFFICIAL MERCH</Link></li>
            <li><Link to="catpage/sneakers">SNEAKERS</Link></li>
            <li><Link to="catpage/weakoog-air">WEWAKOOG AIR</Link></li>
            <li><Link to="catpage/hevy-duty">HEVY DUTY</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default CatBar
