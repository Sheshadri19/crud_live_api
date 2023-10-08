import { Button, FormControl, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [answer,setAnswer]=useState('')

    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
         e.preventDefault()

         try{
            const res=await axios.post(`${process.env.REACT_APP_API}/api/auth/register`,{
                name,
                email,
                address,
                phone,
                password,
                answer
            })

            if(res && res.data.success){
                toast.success(res.data && res.data.message)
                console.log("a",res.data);
                navigate('/login')
              
            }

            else{
                toast.error(res.data.message)
                console.log("a",res.data);
            }
         }catch(error){
            toast.error("something went wrong")
           
         }
    }
  return (
    <>
     <center><h1>Sign up</h1></center>
    <div  className='container' style={{marginTop:"80px",marginLeft:"660px"}} >
    <form onSubmit={handleSubmit}>
    <div>

    <FormControl defaultValue="" required>

  <TextField placeholder="Write your name here" label="name" type='text' value={name} style={{marginBottom:"20px"}} onChange={(e)=>setName(e.target.value)}/>
   
  <TextField placeholder="Write your email here" label='email' type='email' value={email} style={{marginBottom:"20px"}} onChange={(e)=>setEmail(e.target.value)}/>
 
  <TextField placeholder="Write your phone number here" label='phone' type='number' value={phone} style={{marginBottom:"20px"}} onChange={(e)=>setPhone(e.target.value)}/>

  <TextField placeholder="Write your password here" label='password' type='password' value={password} style={{marginBottom:"20px"}} onChange={(e)=>setPassword(e.target.value)}/>

  <TextField placeholder="Write your address here" label='Address' type='text' value={address} style={{marginBottom:"20px"}} onChange={(e)=>setAddress(e.target.value)}/>

  <TextField placeholder="Write your answer here" label="What is your mother's maiden name" value={answer} type='text' style={{marginBottom:"20px"}} onChange={(e)=>setAnswer(e.target.value)}/>

</FormControl>

<div style={{marginLeft:"70px"}}>
<Button  type="submit" variant='contained'>
   Sign Up
</Button>

</div>

  </div>

    </form>

    </div>
    </>
  )
}

export default Register