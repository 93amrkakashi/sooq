import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { useAuth } from "../assets/hooks/auth";
import { useForm } from "react-hook-form";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { uuidv4 } from "@firebase/util";
import { useAddToCart } from "../assets/hooks/pruducts";

function ProductCard({ product, size, cartQ }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user, isLoading } = useAuth();
  async function deleteProduct(id) {
    const res = window.confirm("Are you sure you want to delete this post?");
    if (res) {
      const fileRef = ref(storage, "products/" + id);
      const picURL = await getDownloadURL(fileRef);
      await deleteObject(fileRef);
      await deleteDoc(doc(db, "products", id));
    }
  }

  const navigate = useNavigate();




const { addToCart, isLoading:loading }=  useAddToCart(user)

async function handleAdd(data) {

  const sucsess = await addToCart({
    cart: data.product,
    picture:product?.picture,
      pruductCategory:product?.pruductCategory,
      pruductDescription:product?.pruductDescription,
      pruductName:product?.pruductName,
      pruductPrice:product?.pruductPrice,
      id:product?.id,
      quantity:1,
  
  });
  
}


  return (
    // {product?.id===product?.id?:}
    <div className="product-card" key={product?.id}>
      {/* make it for info "dont forget" */}
      <Link to={`/info/${product?.id}`}>
        <img src={product?.picture} alt={product?.pruductName} />
      </Link>
      <p>{product?.pruductName}</p>
      {/* <p>{cart.length}</p> */}
      {/* <p>{product?.pruductDescription}</p> */}
      <p>Price : {product?.pruductPrice} $</p>
      {user?.admin ? (
        <div className="actions">
          <button onClick={() => navigate(`/edit/${product?.id}`)}>edit</button>
          <button onClick={() => deleteProduct(product?.id)}>delete</button>
        </div>
      ) : (
        <button onClick={handleSubmit(handleAdd)} 
        {...register("product")}
                value={product?.id}
                disabled={loading}>{loading? "added":"add to cart"}</button>
      )}
    </div>
  );
}

export default ProductCard;
