import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { useAuth } from "../assets/hooks/auth";
import { useAddToCart } from "../assets/hooks/pruducts";

function CartCard({ product, size, all }) {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addToCart, isLoading: loading } = useAddToCart(user);

  async function handleIncrease(data) {
    await updateDoc(doc(db, "users", user?.id, "cart", product?.id), {
      quantity: product?.quantity + 1,
    });
    
  }

  async function handleDecrease(data) {
    if (product?.quantity > 1) {
      updateDoc(doc(db, "users", user?.id, "cart", product?.id), {
        quantity: product?.quantity - 1,
      });
    } else {
      return handleDelete();
    }
  }

  async function handleDelete(data) {
    deleteDoc(doc(db, "users", user?.id, "cart", product?.id));
  }
  // const pricces =
  return (
    <div>
      <div className="product-card" key={product?.id}>
        {/* make it for info "dont forget" */}
        <Link to={`/info/${product?.id}`}>
          <img src={product?.picture} alt={product?.pruductName} />
        </Link>
        <p>{product?.pruductName}</p>

        <p>Price : {product?.pruductPrice * product?.quantity} $</p>
        <p>quantity : {product?.quantity} </p>
        <div className="actions">
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleDelete}>remove</button>
          <button onClick={handleDecrease}>-</button>
        </div>
      </div>
      {/* <h1>{all?.length}</h1>
      <h1>{product?.pruductPrice * product?.quantity}</h1> */}
    </div>
  );
}

export default CartCard;
