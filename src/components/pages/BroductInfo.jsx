import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct, useProducts } from '../assets/hooks/pruducts'
import { Navbar } from '../layers/Navbar'

function BroductInfo() {

  const{id}= useParams()
  const { product, isLoading } = useProduct(id)

  return (
    <>
    <Navbar />
    <div className='product-info'>
      <img src={product?.picture} alt={product?.pruductName} />
      <div className="info">
      <h3>{product?.pruductName}</h3>
      <p>{product?.pruductDescription}</p>
      <p>Price : {product?.pruductPrice} $</p>
      </div>
    </div>
    </>
  )
}

export default BroductInfo