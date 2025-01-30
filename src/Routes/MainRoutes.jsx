import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import UserProfile from '../Pages/UserProfile'
import CatPage from '../Pages/CatPage'
import SubCatPage from '../Pages/SubCatPage'
import LoginSignup from '../Pages/LoginSignup'
import Cart from '../Pages/Cart'
import PrivateRoute from './PrivateRoute'
import WishList from '../Pages/WishList'

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login-signup' element={<LoginSignup />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>
        <Route path='/catpage/:category' element={<CatPage />}></Route>
        <Route path='/subcatpage/:subcat' element={<SubCatPage />}></Route>
        <Route path='/wishlist' element={
          <PrivateRoute>
            <WishList />
          </PrivateRoute>  
          }></Route>
        <Route path='/cart' element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
