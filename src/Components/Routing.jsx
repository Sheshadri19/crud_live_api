
import {BrowserRouter as  Router, Routes,Route } from "react-router-dom";

import React from 'react'
import { Home } from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import CategoryDetails from "./CategoryDetails";
import Register from "../AuthPages/Register";
import Login from "../AuthPages/Login";
import { AuthUse } from "../AuthPages/Context";
import { ToastContainer } from "react-toastify";


export const  Routing=() => {
  return (
   <>
<AuthUse>
<Router>
<ToastContainer/>
 <Navbar/>
<Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/product"  element={<Product/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/register"  element={<Register/>}/>
    <Route path="/pdt/:id"  element={<ProductDetails/>}/>
  <Route path="/categorydetails/:category" element={<CategoryDetails/>}/>
</Routes>
</Router>
</AuthUse>
   
   </>
  )
}

