import React, { useEffect } from 'react'
import './App.css'
import { Routes , Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user){
        navigate('/')
        console.log('user is logged in ')
      }else{
        navigate('/login')
        console.log('user is logged out')
      }
    })
  })


  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App