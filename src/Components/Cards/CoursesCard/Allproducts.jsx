import React from 'react'
import Card from './ProductCards'
import './ProductCard.css'
import Products from "./ProductCardApi"
import { useState } from 'react'
const Allproducts= () => {
  
  const [productData, setProductData] = useState(Products);
  
  return (
    
    <>
     <Card productData = {productData}/>
   
     </>
  )
}

export default Allproducts