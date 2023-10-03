
import {BrowserRouter as  Router, Routes,Route } from "react-router-dom";

import React from 'react'
import { Home } from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import CategoryDetails from "./CategoryDetails";

export const  Routing=() => {
  return (
   <>

<Router>
 <Navbar/>
<Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/product"  element={<Product/>}/>
    <Route path="/pdt/:id"  element={<ProductDetails/>}/>
  <Route path="/categorydetails/:category" element={<CategoryDetails/>}/>
</Routes>
</Router>
   
   </>
  )
}

