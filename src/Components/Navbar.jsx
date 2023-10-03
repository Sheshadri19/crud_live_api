

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <Box>
                <AppBar position='static'>
                    <Toolbar>

                        <Typography variant='h6' style={{ marginRight: "20px" }} > </Typography>
                        <Button color='inherit' component={Link} to='/'>Home</Button>
                        <Button style={{color:'violet', marginLeft:'20px'}} component={Link} to='/product'> Product</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}


export default Navbar