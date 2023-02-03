import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAddPruduct } from "../assets/hooks/pruducts";
import { Navbar } from "../layers/Navbar";

function Addproduct() {
  function handlepic(e) {
    setFile(e.target.files[0]);
  }
  const [pruduct, setpruduct] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setpruduct(data);
  const { addPruduct, setFile, isLoading } = useAddPruduct();
  async function handleAdd(data) {
    const sucsess = await addPruduct({
      pruductName: data.name,
      pruductDescription: data.description,
      pruductPrice: data.price,
      pruductCategory: data.categories,
    });

    reset();
  }

  return (
    
      <div className="container">
        <p>ADD PRUDUCT</p>
        <form onSubmit={handleSubmit(handleAdd)}>
          <div className="feild">
            <label>pruduct name :</label>
            <input {...register("name")} type="text" />
          </div>
          <div className="feild">
            <label>pruduct description :</label>
            <textarea {...register("description")} type="text" />
          </div>
          <div className="feild">
            <label>pruduct price :</label>
            <input {...register("price")} type="number" />
          </div>
          <div className="feild">
            <label>pruduct image :</label>
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
              <label>men's clothing :</label>
            </div>

            <div className="feild-2">
              <input
                {...register("categories")}
                type="radio"
                value={"women's clothing"}
              />
            <label>women's clothing</label>
            </div>


            <div className="feild-2">
            <input
              {...register("categories")}
              type="radio"
              value={"kids's clothing"}
            />
            <label>kids's clothing</label>
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
              value={"home-ware"}
              />
            <label>home ware</label>
              </div>
          </div>

          <button disabled={isLoading} type="submit">
            add pruduct
          </button>
        </form>
      </div>
    
  );
}

export default Addproduct;
