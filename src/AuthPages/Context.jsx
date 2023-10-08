import React, { createContext, useContext, useEffect, useState } from 'react'

const ContextAuth=createContext()
const AuthUse = ({children}) => {

    const [auth,setAuth]=useState({
        user:null,
        token:''

    })
useEffect(()=>{

    const data=localStorage.getItem('auth')
    if(data){
        const parseData=JSON.parse(data)

        setAuth({
          ...auth,
          user:parseData.user,
          token:parseData.token
        })
    }

},[])

  return (
     <>
    <ContextAuth.Provider value={[auth,setAuth]}>
        {children}
    </ContextAuth.Provider>

    </>
  )
}

const useAuth=()=>useContext(ContextAuth)

export {AuthUse,useAuth}