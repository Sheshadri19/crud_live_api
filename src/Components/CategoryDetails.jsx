import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCatDetails, getData, getDataCat } from '../Service/Api'

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
            {
                cat.map(item => {
                    return (
                        <>
                            <div>{item.id}</div>
                            <div>{item.title}</div>
                        </>
                    )
                })
            }

        </>
    )
}

export default CategoryDetails