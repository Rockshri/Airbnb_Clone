import { useState } from 'react'
import './App.css'
import Head from './components/Head/Head'
import Links from './components/Links/Links'
import Card from './components/Cards/Card'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Error from "./components/Error"
import { Routes, Route} from "react-router-dom"



function App() {
  const [loginUser, setloginUser] = useState({});
  
  return (
    <>
    <Head/>
    
    <Routes>
      <Route path='/' element={loginUser && loginUser._id ? <Links/> : <Login setloginUser = {setloginUser}/>} />
      <Route path='/login' element={<Login setloginUser = {setloginUser}/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path="*" element={<Error/>}></Route>
      
    </Routes>
    
      
      {/* <Links/>  */}
      {/* <Card/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      
    </>
  )
}

export default App
