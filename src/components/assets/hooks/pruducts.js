import {
  collection,
  deleteDoc,
  doc,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../../firebase";
import { uuidv4 } from "@firebase/util";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { notifybad, notifygood } from "./notify";

// a costum hook to add products
export function useAddPruduct() {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  async function addPruduct(pruduct) {
    setLoading(true);
    const id = uuidv4();
    const fileRef = ref(storage, "products/" + id);
    await uploadBytes(fileRef, file);
    const avatarURL = await getDownloadURL(fileRef);
    await setDoc(doc(db, "products", id), {
      ...pruduct,
      id,
      picture: avatarURL,
      date: Date.now(),
    });
    notifygood("Product added");
    setLoading(false);
  }
  return { addPruduct, setFile, isLoading };
}

// a costum hook to get all products
export function useProducts(categories) {
  const q = !categories
    ? query(collection(db, "products"))
    : query(
        collection(db, "products"),
        where("pruductCategory", "==", categories)
      );

  const [products, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { products, isLoading };
}

// a costum hook to get single product
export function useProduct(id) {
  const q = doc(db, "products", id);
  const [product, isLoading] = useDocumentData(q);

  return { product, isLoading };
}

// a costum hook to delete single product
export function useDeleteProduct(id) {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function deleteProduct() {
    const res = window.confirm("Are you sure you want to delete this post?");
    if (res) {
      setLoading(true);
      await deleteDoc(doc(db, "products", id));
      notifybad("product deleted");
      setLoading(false);
    }
  }

  return { deleteProduct, isLoading };
}

// a costum hook to add single product to user cart
export function useAddToCart(user) {
  const [isLoading, setLoading] = useState(false);
  async function addToCart(pruduct) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "users", user?.id, "cart", id), {
      ...pruduct,
      id,
    });
    notifygood("added to cart");
  }
  return { addToCart, isLoading };
}

// a costum hook to get all products in users cart
export function useProductsCart(id) {
  const q = query(collection(db, `users/${id}/cart`));
  const [productsCart, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { productsCart, isLoading };
}
