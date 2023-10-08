import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCatDetails, getData, getDataCat } from '../Service/Api'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const CategoryDetails = () => {
    const [cat, setCat] = useState([])

    const { category } = useParams()
    console.log('cat', category);

    const getCatInfo = async () => {
        const response = await getCatDetails(category)
        setCat(response?.data.products)
        console.log('data', cat);
    }

    // const categories = cat.filter((obj)=>obj==category)

    useEffect(() => {
        getCatInfo()
    }, [])

    
    return (
        <>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} mt={5} >
                
                {
                   cat.map(item=>{

                    return (

                        <>
                          <Grid item xs={4} columnSpacing={{mt:20}} >
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
                            <CardActions>

                            <Button variant='contained' size="small" sx={{ ml: 1 }}>
                                    Add to cart
                                </Button>

                                <Button variant='contained' size="small" sx={{ ml: 1 }}>
                                    Buy Now 
                                </Button>

                            </CardActions>
                              </CardContent>


                           </Card>
                              
                              </Grid>
                        </>
                        )
                   } )



                }
                   
                    
            </Grid>
                
        </>
    )
}

export default CategoryDetails