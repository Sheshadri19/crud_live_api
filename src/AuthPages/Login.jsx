import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Context'
import axios from 'axios'
import { Button, FormControl, TextField } from '@mui/material'
import { toast } from 'react-toastify'



const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [auth,setAuth]=useAuth()

const navigate=useNavigate()

const handleSubmit=async(e)=>{
e.preventDefault() 

try{
    const res=await axios.post(`${process.env.REACT_APP_API}/api/auth/login`,{
       email,
       password
    })
       if(res && res.data.sucess){
        toast.success(res.data && res.data.message)
        console.log("a",res.data);

        setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token
        }) 
        navigate('/')
        localStorage.setItem('auth',JSON.stringify(res.data))
       }
       
       else{
        toast.error(res.data.message)
     
       }

}catch(error){
toast.error("something went wrong")

}

}
  return (
    <>
      <center><h1>Login </h1></center>

<div className='container' style={{ marginTop: "150px", marginLeft: "660px" }} >
  <form onSubmit={handleSubmit}>
    <div>
      <FormControl defaultValue="" required>
        <TextField placeholder="Write your email here" label="email" type='email' value={email} style={{ marginBottom: "20px" }} onChange={(e) => setEmail(e.target.value)} />

        <TextField placeholder="Write your password here" label='password' type='password' value={password} style={{ marginBottom: "20px" }} onChange={(e) => setPassword(e.target.value)} />

      </FormControl>
    </div >

    <div style={{ marginLeft: "65px" }}>
      <Button type="submit" variant='contained' >
        Login
      </Button>
   
    </div>


  </form>

</div>
    </>
  )
}

export default Login