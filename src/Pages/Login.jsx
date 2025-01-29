import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [fotmData, setFormData] = useState({
    number: "",
  })
  const [isValid, setIsValid] = useState(true)

  const handleOnChnage = (e) => {
    setFormData({
      ...fotmData,
      [e.target.name]: e.target.value
    })
    if(e.target.value.length !== 10 || isNaN(e.target.value)) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }
  
  const handleOnSubmit = (e) => {
    console.log("clicked");
    
  }

  return (
    <div>
      <div className="login-main">
        <div className="left-img">
          <img src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" alt="" />
        </div>
        <div className="form">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="title">
              <h4>Login / Signup</h4>
              <p>Join us now to be a part of Bewakoof® family.</p>
            </div>
            <div className="num-input">
              <span>
                <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
                +91
              </span>
              <input type="text" placeholder='Enter Mobile Number' onChange={handleOnChnage}/>
            </div>
            { isValid ? null : <span className='err-msg'>Mobile number must be 10 digits</span>}
            <button type='submit' className={isValid ? 'btn valid' : 'btn'}>CONTINUE</button>
            <div className="or-div">
              <div className="lline"></div>
              <span>OR</span>
              <div className="lline"></div>
            </div>
            <div className="login-btns">
              <button>
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" />
                <span>Google</span>
              </button>
              <button>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="" />
                <span>Facebook</span>
              </button>
            </div>
            <p>By creating an account or logging in, you agree with Bewakoof®’s <span className='link'>Terms and Conditions</span> and <span className='link'>Privacy Policy</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
