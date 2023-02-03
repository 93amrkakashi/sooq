import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { db, storage } from "../../firebase";
import { useProduct } from "../assets/hooks/pruducts";
import { Navbar } from "../layers/Navbar";

function Editproduct() {
  const [file, setFile] = useState(null);
  const [loading, setloading] = useState(false);

  const { id } = useParams();
  const { product } = useProduct(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function handlepic(e) {
    setFile(e.target.files[0]);
  }
  async function updatePruduct(data) {
    const docRef = doc(db, "products", id);
    const fileRef = ref(storage, "products/" + id);
    if(file){
      setloading(true)

      await uploadBytes(fileRef, file);
    setloading(false)

    }else{

    
    const picURL = await getDownloadURL(fileRef);
    setloading(true)

    await updateDoc(docRef, {
      pruductName: data.name || product?.pruductName,
      pruductDescription: data.description || product?.pruductDescription,
      pruductPrice: data.price || product?.pruductPrice,
      pruductCategory: data.categories || product?.pruductCategory,
      picture:  product?.picture || picURL 
    });
    setloading(false)

  }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>EDIT PRUDUCT</h2>
        <form onSubmit={handleSubmit(updatePruduct)}>
          <div className="feild">
            <label>pruduct name</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={product?.pruductName}
            />
          </div>

          <div className="feild">
            <label>pruduct description</label>
            <textarea
              {...register("description")}
              type="text"
              defaultValue={product?.pruductDescription}
            />
          </div>

          <div className="feild">
            <label>pruduct price</label>
            <input
              {...register("price")}
              type="number"
              defaultValue={product?.pruductPrice}
            />
          </div>

          <div className="feild">
            <label>pruduct image</label>
            <input type="file" accept="image/*" onChange={handlepic} />
          </div>

          <h3>pruduct categories</h3>
          <div className="radios">
            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"men's clothing"}
              />
              <label>men-clothes</label>
            </div>

            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"women's clothing"}
              />
              <label>women-clothes</label>
            </div>

            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"kids's clothing"}
              />
              <label>kids-clothes</label>
            </div>

            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"electronics"}
              />
              <label>electronics</label>
            </div>

            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"jewelery"}
              />
              <label>jewelery</label>
            </div>

            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"home ware"}
              />
              <label>home ware</label>
            </div>
          </div>

          <button disabled={loading} type="submit">edit pruduct</button>
        </form>
      </div>
    </div>
  );
}

export default Editproduct;
