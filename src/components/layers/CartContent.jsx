import React from "react";
import { useParams } from "react-router-dom";
import { useProductsCart } from "../assets/hooks/pruducts";
import CartCard from "./CartCard";
import { Navbar } from "./Navbar";
import ProductCard from "./ProductCard";

function CartContent() {
  const { id } = useParams();
  const { productsCart } = useProductsCart(id);
  
const prices = productsCart?.map((product) => product?.pruductPrice * product?.quantity);
  return (
    <div>
      <Navbar />
      <div className="content">
      {productsCart?.map((product) => (
        <CartCard product={product} all={productsCart} key={product?.id} />
      ))}
      </div>
      <div className="totals">
      <p>Total items in cart : {productsCart?.length} Pieces</p>
      <p>Total price :{prices?.reduce((a, b) => a + b, 0)} $ </p>
      </div>
    </div>
  );
}

export default CartContent;
