

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthPages/Context'
import { toast } from 'react-toastify'

const Navbar = () => {

const [auth,setAuth]=useAuth()

const navigate=useNavigate()

const handleOut=()=>{
    setAuth({
        ...auth,
        user: null,
        token:""
    })

    localStorage.removeItem('auth')
    toast.success("logout successfully")
    navigate('/login')
}
   

    return (
        <>
            <Box>
                <AppBar position='static'>
                    <Toolbar>

                        <Typography variant='h6' style={{ marginRight: "20px" }} > </Typography>
                        <Button color='inherit' component={Link} to='/'>Home</Button>
                        <Button style={{ color: 'violet', marginLeft: '20px' }} component={Link} to='/product'> Product</Button>

                        {
                            !auth.user ? (
                                <>
                                    <Button color='inherit' component={Link} to='/register' >Sign Up</Button>
                                    <Button color='inherit' component={Link} to='/login' >Login</Button>

                                </>
                            ) : (
                                <>

                                    <Button color='inherit' component={Link} to='/' >{auth.user.name}</Button>
                                    <Button color='inherit' component={Link} to='/login' onClick={handleOut} >Logout</Button>

                                </>

                            )
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}


export default Navbar