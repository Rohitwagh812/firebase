import React, { useState } from 'react'

import './css/Register.css'

import { Input , Button } from 'antd';

import { auth } from '../Firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
   const navigate = useNavigate();
   const [email , setEmail] = useState();
   const [password , setPassword] = useState();
 
   async function handleLogin(){
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential)
      navigate('/')
    }).catch((err) => {
      console.log(err)
      alert(err.message)
    });
    
   }

  return (
    <div className="register-page">
        <div className="form">
        <Input onChange={(e)=> setEmail(e.currentTarget.value)} placeholder="Enter Email Address" />
        <Input onChange={(e)=> setPassword(e.currentTarget.value)} placeholder="Enter Password" />
        <Button onClick={()=>handleLogin()} type="primary">Register Now</Button>
      </div>
    </div>
  )
}

export default Register