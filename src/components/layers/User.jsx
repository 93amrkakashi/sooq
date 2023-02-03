import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { useAuth } from "../assets/hooks/auth";
import { Navbar } from "./Navbar";

function User() {
  const navigate = useNavigate();
  const { user, isLoading: loading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function updateUser(data) {
    const docRef = doc(db, "users", user?.id);
    await updateDoc(docRef, {
      admin: data.admin,
    });
    navigate(0);
  }
  return (
    <div className="user-edit">
      <h3> User Name : {user?.username}</h3>
      <h3> User Email : {user?.email}</h3>
      
        {user?.admin ? (
          <p>
            This user is an "{" "}
            <h3 style={{ color: "green", display: "inline" }}>Admin</h3> "
          </p>
        ) : (
          <p>This user is " <h3 style={{color:"red" , display:"inline"}}>Not Admin</h3> "</p>
        )}
    
      <form onSubmit={handleSubmit(updateUser)}>
        <div className="feild-2">
          <input {...register("admin")} type="radio" value={true} />
          <label>Admin</label>
        </div>

        <div className="feild-2">
          <input {...register("admin")} type="radio" value={false} />
          <label>Not admin</label>
        </div>
        <button disabled={loading} type="submit">
          edit user
        </button>
      </form>
    </div>
  );
}

export default User;
