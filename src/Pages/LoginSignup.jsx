import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify';


function LoginSignup() {
    const [formData, setFormData] = useState({
        fullname: "",
        number: "",
        email: "",
        gender: "male",
        terms: false
      })
      const [isValid, setIsValid] = useState(true)
      const [isRegistered, setIsRegistered] = useState(true);
      const [getOtp, setGetOtp] = useState(false)
      const [otp, setOtp] = useState(null)

      const generateOtp = () => {
        let otp = Math.floor(1000 + Math.random() * 9000)
        setOtp(otp)

        
        toast.info(`Your OTP is: ${otp}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    
      const handleOnChnage = (e) => {
        const { name, type, checked, value } = e.target;
    
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value, // Use checked for checkboxes
        });
    
        if (name === "number") {
            if (value.length !== 10 || isNaN(value)) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
        }
    };
    
      console.log(formData);
      
      const handleOnSubmit = (e) => {
        e.preventDefault()
        generateOtp();

        axios.get(`http://localhost:3000/users?number=${formData.number}`)
        .then((el) => {
          console.log(el.data);
          if(el.data.length === 0) {
            setIsRegistered(false)
          } else {
            setIsRegistered(true)
            setGetOtp(true)
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }
  return (
    <div>
      <ToastContainer />
      {
        isRegistered ? <Login otp={otp} isValid={isValid} handleOnChnage={handleOnChnage} handleOnSubmit={handleOnSubmit} getOtp={getOtp} formData={formData} generateOtp={generateOtp}/>
        : <Signup otp={otp} formData={formData} handleOnChnage={handleOnChnage} generateOtp={generateOtp}/>
      }
      
    </div>
  )
}

export default LoginSignup
