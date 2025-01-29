import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'

function MenSubCats() {
    let subcats = [
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-1735907878.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-1735907894.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Joggers-1735907896.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-1735907918.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Classic-Fit-T-Shirts-1735907878.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Men--1--1735908077.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweatshirts-1735907896.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Msite-Trending-Category-Icon-joggers--2--1736157469.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweaters--1--1735908076.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon--2--1736160194.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Pyjamas-1735907919.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Jackets-Trending-Category-Icon-1736162737.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Full-Sleeve-T-shirts--1--1735908017.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Sneakers-Trending-Category-Icon-Plus-size-1737372173.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Trending-Category-Icon-plus-size-1737365777.jpg",
        "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon--3--1737370241.jpg"
    ]
  return (
    <div>
      <div className="man-cat">
      <h3 className='title'>Shop by Category- Men</h3>
        <div className="man-subcat">
            {
                subcats.map((subcat, index) => {
                    return (
                        <div key={index} className="subcat">
                            <Link to={`/subcatpage/${index}`} >
                                <img src={subcat} alt="" />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default MenSubCats
