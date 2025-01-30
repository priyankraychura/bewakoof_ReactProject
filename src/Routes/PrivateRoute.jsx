import React, { useState } from 'react'
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedin')) || false);
    console.log(isLoggedIn);
    
    return (
        <div>
            { isLoggedIn ? children : <Navigate to={"/login-signup"}></Navigate>}
        </div>
  )
}

export default PrivateRoute
