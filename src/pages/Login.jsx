import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './css/Login.css'
import { Input , Button } from 'antd';

import { auth } from '../Firebase';

import { /**getAuth, */ signInWithEmailAndPassword, updateProfile  } from 'firebase/auth';

function Login() {
   const navigate = useNavigate();
   const [email , setEmail] = useState();
   const [password , setPassword] = useState();
 
   async function handleLogin(){
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCred) => {
      console.log(userCred.user)
      navigate('/')
    }).catch((err) => {
      console.log(err)
      navigate('/register')
    });
    
   }

   useEffect(()=>{
    console.log(auth.currentUser)
    // updateProfile(auth.currentUser , {
    //   displayName : 'Rohit Wagh'
    // })
  })

  return (
    <div className="login-page">
      <div className="form">
        <Input onChange={(e)=> setEmail(e.currentTarget.value)} placeholder="Enter Email Address" />
        <Input onChange={(e)=> setPassword(e.currentTarget.value)} placeholder="Enter Password" />
        <Button onClick={()=>handleLogin()} type="primary">Login Now</Button>
      </div>
    </div>
  )
}

export default Login