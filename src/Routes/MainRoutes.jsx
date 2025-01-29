import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import UserProfile from '../Pages/UserProfile'
import CatPage from '../Pages/CatPage'
import SubCatPage from '../Pages/SubCatPage'

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/userprofile' element={<UserProfile />}></Route>
        <Route path='/catpage/:category' element={<CatPage />}></Route>
        <Route path='/subcatpage/:subcat' element={<SubCatPage />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
