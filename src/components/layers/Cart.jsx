import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../assets/hooks/auth';
import { useProductsCart } from '../assets/hooks/pruducts'

function Cart() {
  const { user, isLoading } = useAuth();

  const { productsCart }= useProductsCart(user?.id)
  return (
    <div>
      <Link to={`/cart/${user?.id}`}>
      
      <i className="fa-solid fa-cart-shopping"></i>
      </Link>
      {productsCart?.length > 0 && <p>{productsCart?.length}</p> }
      
    </div>
  )
}

export default Cart