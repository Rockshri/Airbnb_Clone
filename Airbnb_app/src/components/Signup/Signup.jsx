import React, { useState } from 'react'
import "./signup.css"
import axios from "axios"
const Signup = () => {
      const data = {
           first_name:"",
           mid_name:"",
           last_name:"",
           mobile:0,
           email:"",
           password:"",
           cnf_password:"",
           address:"",
           city:"",
           state:"",
           pincode:0
         }
     const [RegistrationInput, setRegistrationInput] = useState(data);


     function inputHandler(e){
      let name = e.target.name;
      let value = e.target.value;

      setRegistrationInput({...RegistrationInput, [name]:value})

     }

     function submitHandler(e){
            e.preventDefault(); 
            const {first_name, mid_name, last_name, mobile, email, password, cnf_password, address, city, state, pincode} =  RegistrationInput
            if(first_name && last_name && mobile && email && password && cnf_password && address && city && state && pincode && (password ===cnf_password)){
              axios.post("http://localhost:1100/register", RegistrationInput).then((response)=>{
                console.log(response);
              }).catch((error)=>{
                console.log(error.message);
              })
            }else{
              alert("Enter all sections")
            }
            
     }
    
  return (
    <>
    <div className='signup-user-container'>
        <div className="sign-up-form">
            <label htmlFor="First_name">First name</label>
            <input type="text" name="first_name" id="" value={RegistrationInput.first_name} onChange={inputHandler} required/>
            <label htmlFor="Middle_name">Middle name</label>
            <input type="text" name='mid_name' value={RegistrationInput.mid_name} onChange={inputHandler}/>
            <label htmlFor="Last_name">Last name</label>
            <input type="text" name="last_name" id="" value={RegistrationInput.last_name} onChange={inputHandler} required/><br></br>
            <label htmlFor="Mobile">Mobile </label>
            <input type="number" name="mobile" id="" value={RegistrationInput.mobile} onChange={inputHandler} required/><br></br>
            <label htmlFor="Email-id">Email-id</label>
            <input type="email" name="email" id="" value={RegistrationInput.email} onChange={inputHandler} required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" value={RegistrationInput.password} onChange={inputHandler} required/>
            <label htmlFor="Confirm_password">Confirm Password</label>
            <input type="password" name="cnf_password" id="" value={RegistrationInput.cnf_password} onChange={inputHandler} required/><br></br>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="" value={RegistrationInput.address} onChange={inputHandler} required/><br></br>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="" value={RegistrationInput.city} onChange={inputHandler} required/>
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="" value={RegistrationInput.state} onChange={inputHandler} required/>
            <label htmlFor="zipcode">Zipcode</label>
            <input type="number" name="pincode" id="" value={RegistrationInput.pincode} onChange={inputHandler} required/><br></br><br></br>
            <button type="submit" onClick={submitHandler}>Register Now</button>

        </div>
      
    </div>
    </>
  )
}

export default Signup
