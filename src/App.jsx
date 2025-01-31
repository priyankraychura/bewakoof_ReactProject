import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router'
import CartNav from './components/CartNav'

function App() {
  let {pathname} = useLocation();
  let user = JSON.parse(localStorage.getItem('user'));

  console.log(user);
  
  
  return (
    <>
      { pathname === '/cart' ? <CartNav /> : <Navbar /> }
      <MainRoutes />
    </>
  )
}

export default App
