import React, { useRef } from 'react'
import './Login.css'
import './Signup.css'
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router';

function Signup({otp, formData, handleOnChnage, generateOtp}) {
  let isValid = true
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

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let userOTP = Number(titleRef.current.value + "" + titleRef2.current.value + "" +  titleRef3.current.value + "" + titleRef4.current.value);
    console.log(userOTP);

    if(otp === userOTP) {
      console.log('otp matched');

      axios.post('http://localhost:3000/users', formData)
      .then((el) => {
        console.log(el);
        toast.success('Registered! Redirecting...', {
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

          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("userId", el.data.id);
          
          setTimeout(() => { navigator('/') }, 3000);
      })
      .catch((err) => {
        console.log(err);
      })
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
    <div>
      <div className="login-main">
        <div className="left-img">
          <img src="https://images.bewakoof.com/web/ik-signup-desktop-v2.jpg" alt="" />
        </div>
        <div className="form">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="title">
              <h4>Just few more details</h4>
              <p>We need few more details to personalize your experience.</p>
            </div>
            <div>
              <label htmlFor="">Full Name</label>
              <input className="num-input input" type="text" placeholder='Ex - Jhon Sharma' name='fullname' onChange={handleOnChnage}/>
            </div>
            <div>
            <label htmlFor="">Mobile Number</label>
            <div className="num-input number">
              <span>
                <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
                +91
              </span>
              <input type="text" placeholder='Enter Mobile Number' name='number' value={formData.number} onChange={handleOnChnage} disabled/>
            </div>
            </div>
            <div>
              <label htmlFor="">Email ID</label>
              <input className="num-input input" type="text" placeholder='ex:yourmailid@gmail.com' name='email' onChange={handleOnChnage}/>
            </div>
            <div>
              <label htmlFor="">Gender</label>
              <div className="radios">
                <div className="option selected">Male</div>
                <div className="option">Female</div>
                <div className="option">Other</div>
              </div>
            </div>
            <div>
              <label htmlFor="">OTP</label>
              <div className="otps">
                <input type="text" className='otp-field' ref={titleRef} onChange={(e) => handleInput(e, titleRef2, null)}/>
                <input type="text" className='otp-field' ref={titleRef2} onChange={(e) => handleInput(e, titleRef3, titleRef)}/>
                <input type="text" className='otp-field' ref={titleRef3} onChange={(e) => handleInput(e, titleRef4, titleRef2)}/>
                <input type="text" className='otp-field' ref={titleRef4} onChange={(e) => handleInput(e, null, titleRef3)}/>
              </div>
            </div>
            <span className='resend-otp' onClick={generateOtp}>Resend OTP</span>
            <div className="terms">
              <input type="checkbox" name="terms" id="terms" onChange={handleOnChnage}/>
              <span>I want to receive order updates on whatsapp</span>
            </div>
            <button type='submit' className={isValid ? 'btn valid' : 'btn'}>CONTINUE</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup