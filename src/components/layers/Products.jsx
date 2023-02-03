import React from 'react'
import { useParams } from 'react-router-dom';
import { useProducts } from '../assets/hooks/pruducts'
import { Navbar } from './Navbar';
import ProductCard from './ProductCard';
function Products() {
const {id} = useParams()
const categories = "home ware"


  const { products, isLoading } = useProducts(id)
  return (
    <div className='products' >
    <Navbar />
      {products?.map((product) =>  <ProductCard product={product} key={product?.id} /> )}
      {/* <ProductCard products={products} size={"150px"} /> */}
    </div>
  )
}

export default Products