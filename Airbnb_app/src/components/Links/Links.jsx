import React from 'react'
import "./Links.css"
import logolink from "../../assets/logolinks"
import Card from '../Cards/Card'
const Links = () => {
  return (
    <>
    <div className='logo-container'>
        {logolink.map((logo, i)=>{
             return  <div className="logo" key={i}>
             <img src={logo.imgSrc} alt="Icon" srcset="" className='image'/>
             <div className='label'>{logo.label}</div>
                </div>
        })}
           
    </div>
    <Card/>
    </>
  )
}

export default Links
