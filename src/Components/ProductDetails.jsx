import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { details } from '../Service/Api'

const ProductDetails = () => {

  const nav=useNavigate()
    const [user,setUser]=useState([])
    const {id}=useParams()

    const ProductData=async()=>{
        const respone = await details(id)
        setUser(respone?.data)
    }

    useEffect(()=>{
         ProductData()  
    },[])

  return (

    
    <>

    <center><h1>Product Details</h1></center>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={user.thumbnail}
        title="green iguana"
      />
      <CardContent><hr />
        <Typography gutterBottom variant="h5" component="div">
          Id :{id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       Description : {user.description} <hr />
       Rating:{user.rating} <hr />
       Brand:{user.brand} <hr />
       Stock :{user.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button onClick={()=>nav(-1)}>Back to Product Page</Button>

      </CardActions>
    </Card>
    
    </>
  )
}

export default ProductDetails