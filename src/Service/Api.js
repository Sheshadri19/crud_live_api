import axios from "axios";

const Api_url='https://dummyjson.com'

export const getData=async()=>{

    try{
        return await axios.get(`${Api_url}/products`)

    }

    catch(error){

        console.log('error while fetching api data',error.message);
    }
}

export const details=async(id)=>{

    try {
      return await axios.get(`${Api_url}/products/${id}`)

    }
    catch(error){

        console.log('error while fetching api id details',error.message);

    }
}

export const getDataCat = async () =>{
    try {
        return await axios.get(`${Api_url}/products/categories`)
    }
    catch(error){
        console.log("Error while fetching catgories", error.message);
    }
}

export const getCatDetails = async(data)=>{
    try {
        return await axios.get(`${Api_url}/products/category/${data}`)
    }catch(error){
        console.log(error.message);
    }
}


