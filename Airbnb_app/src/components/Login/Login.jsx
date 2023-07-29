import React, { useState } from 'react'
import axios from 'axios';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import img from "../../assets/hotel/h0RgLAG.jpg"
const Login = ({setloginUser}) => {
  let data = {
    email:"",
    password:""
  }
  const [loginDetails, setloginDetails] = useState(data);
  const navigate = useNavigate();

  function loginHandler(e){
   let name = e.target.name;
   let value = e.target.value;

    setloginDetails({...loginDetails, [name]:value})
  }

  function loginbuttonHandler(e){
    e.preventDefault();
    const {email, password} = loginDetails
    if(email && password){
      axios.post("http://localhost:1100/login", loginDetails).then((res)=>{
        console.log(res);
        alert(res.data.message);
        setloginUser(res.data.user);
        navigate("/");
      }).catch((error)=>{
        console.log(error.message);
      })
    }
  }

  function signupHandler(){
        navigate("/register");  
  }


  return (
    <>
   <div className='Container'>
    
    <div className='image-container'><img src={img} alt="Loading" className='background-image'/></div>
    <div className='login-box'>
    <div className='login-or-signup'>Login or Signup</div>
    <div className='welcome-div'>Welcome to Airbnb</div>
    <div className='email-id'>
    <label htmlFor="Email-id">Enter your Email id</label>
    <input type="email" name="email" id="" className='input-email' placeholder='abc@gmail.com' value={loginDetails.email} onChange={loginHandler} required/>
    <label htmlFor="Password">Enter Password</label>
    <input type="password" name="password" id="" className='input-password' placeholder='Password' value={loginDetails.password} onChange={loginHandler} required/>
   </div>
   <button className='login-button' onClick={loginbuttonHandler}>Login</button>
   <button className='signup-button' onClick={signupHandler}>Sign up</button>
   </div>
   

   </div>
    </>
  )
}

export default Login
