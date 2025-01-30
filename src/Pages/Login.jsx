import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Login({otp, isValid, handleOnChnage, getOtp, formData, handleOnSubmit, generateOtp}) {
    const titleRef = useRef(null);
    const titleRef2 = useRef(null);
    const titleRef3 = useRef(null);
    const titleRef4 = useRef(null);
    let navigator = useNavigate();
  
    const handleInput = (e, nextRef, prevRef) => {
      if(e.target.value.length === 1 && nextRef) {
          nextRef.current.focus();
      }
  
      if(e.target.value.length === 0 && prevRef) {
          prevRef.current.focus();
      }
    }

    const handleLogin = (e) => {
      e.preventDefault();
      let userOTP = Number(titleRef.current.value + "" + titleRef2.current.value + "" +  titleRef3.current.value + "" + titleRef4.current.value);

      if(otp === userOTP) {
        console.log('otp matched');
        toast.success('Success! Redirecting...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });

          axios.get(`http://localhost:3000/users?number=${formData.number}`)
          .then((el) => {
            localStorage.setItem("isLoggedin", true);
            localStorage.setItem("userId", el.data[0].id);
          })
          .catch((err) => {
            console.log(err);
          })

          setTimeout(() => { navigator('/') }, 3000);
      } else {
        console.log('otp not matched');
        toast.warn('Incorrect OTP!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }

  return (
    <>
    <div>
      <div className="login-main">
        <div className="left-img">
          <img src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" alt="" />
        </div>
        {
          getOtp ? 
          <>
            <div className="form otp-form">
              <form action="">
              <h3>OTP Varification</h3>
              <div className='title'>We have sent Verification code to <br />
              <p><span className='number'>+91 {formData.number}</span> <span className='edit-btn'>Edit</span></p>
              </div>
              <div className="otps">
              <input type="text" className='otp-field' ref={titleRef} onChange={(e) => handleInput(e, titleRef2, null)}/>
                <input type="text" className='otp-field' ref={titleRef2} onChange={(e) => handleInput(e, titleRef3, titleRef)}/>
                <input type="text" className='otp-field' ref={titleRef3} onChange={(e) => handleInput(e, titleRef4, titleRef2)}/>
                <input type="text" className='otp-field' ref={titleRef4} onChange={(e) => handleInput(e, null, titleRef3)}/>
              </div>
              <span className='resend-otp' onClick={generateOtp}>Resend OTP</span>
              <button type='submit' className="btn valid" onClick={handleLogin}>CONTINUE</button>
              </form>
            </div>
          </>
          : <div className="form">
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
              <input type="text" placeholder='Enter Mobile Number' name='number' onChange={handleOnChnage}/>
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
      }
      </div>
    </div>
    </>
  )
}

export default Login
