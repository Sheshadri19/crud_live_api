
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getData, getDataCat } from '../Service/Api'
import { Link } from 'react-router-dom'
import { Hourglass } from 'react-loader-spinner'
import { useAuth } from '../AuthPages/Context'

const Product = () => {

  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(true)
  const [catg, setCatg] = useState([])

  const catDetails = async () => {
    const catResponse = await getDataCat()
    setCatg(catResponse?.data)
  }

  // console.log("Cat", category);

  const GetDetails = async () => {

    const response = await getData()
    setProduct(response?.data.products)
    setLoader(false)
    // console.log('details',response.data.products);


  }
  useEffect(() => {
    GetDetails()
    catDetails()
  }, [])


  const newrow = 3
  const [load, setLoadmore] = useState(newrow)
  const handlemore = () => {

    setLoadmore(newrow + load)
  }

    const [auth]=useAuth()  

  return (
    <>
    {
      !auth.user ? (<h1>Please Login</h1>) :
    (
      <>

     {
        loader ? <center><Hourglass 
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      /></center> :
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>

          <h1 style={{ textAlign: "center" }}>Category</h1>
          {
            catg.map((item, index) => {
              return (
                <>
                  <List component="nav" aria-label="mailbox folders">
                    <ListItem>
                      <Link to={`/categorydetails/${item}`} underline="none">
                        {item}
                      </Link>
                    </ListItem>
                    <Divider />
                  </List>
                </>
              )
            })
          }
        </Grid>
        <Grid item xs={9} sx={{ mt: 4 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


            {
              

                product?.slice(0, load)?.map((item, index) => {

                  return (

                    <>
                      <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            sx={{ height: 150 }}
                            image={item.thumbnail}

                          />




                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Title :{item.title}
                            </Typography><hr />
                            <Typography variant="body2" color="text.secondary">
                              Descriptions:{item.description} <hr />
                              Rating:{item.rating} <hr />
                              Brand:{item.brand} <hr />
                              Stock :{item.stock}


                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Link to={`/pdt/${item.id}`}><Button variant='contained' size="small" >Product Details</Button></Link>
                            <Button variant='contained' size="small" sx={{ ml: 1 }} >Learn More</Button>
                          </CardActions>
                        </Card>

                      </Grid>

                    </>
                  )
                }

                )

            }
          </Grid>
          {
            // product.length > load ? <Button onClick={handlemore}>Load More</Button>:null
            load < product.length && <Button variant='contained' onClick={handlemore}>More Products</Button>
          }
        </Grid>
      </Grid>

        }
        </>
    )
      }
    </>
  )
}

export default Product