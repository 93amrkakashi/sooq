import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useLogout } from "../assets/hooks/auth";
import { addproduct, admin, editproduct, root } from "../routes";
import Avtar from "./Avtar";
import Cart from "./Cart";

export const Navbar = () => {
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();

  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to={root}>
          <p>Home</p>
        </Link>
      </div>

      <div className="links">
        {user?.owner && <Link to={admin}>admin panel</Link>}
        {user && <Cart />}
        <div className="user">
          {user && (
            <>
              <div className="avatar">
                  <p>{user?.username}</p>
              </div>
              <button onClick={logout}>logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
