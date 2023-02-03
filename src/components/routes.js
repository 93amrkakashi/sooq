import { createBrowserHistory } from "@remix-run/router";
import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import CartContent from "./layers/CartContent";
import Products from "./layers/Products";
import User from "./layers/User";
import Addproduct from "./pages/Addproduct";
import Adminpage, { Users } from "./pages/Adminpage";
import BroductInfo from "./pages/BroductInfo";
import Editproduct from "./pages/Editproduct";
import { Homepage } from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import  from "./pages/Register";

export const root = "/";
export const login = "/login";
export const register = "/register";
export const editproduct = "/edit/:id";
export const productinfo = "/info/:id";
export const products = "/products/:id";
export const cart = "/cart/:id";
export const admin = "/admin";
export const addproduct = "/admin/addproduct";
export const users = "/admin/users";
export const user = "/admin/users/user/:id";

export const routes = createBrowserRouter([
  { path: login, element: <Login /> },
  { path: register, element: <Register /> },
  { path: editproduct, element: <Editproduct /> },
  { path: productinfo, element: <BroductInfo /> },
  { path: products, element: <Products /> },
  { path: root, element: <Homepage /> },
  { path: cart, element: <CartContent /> },
  {
    path: admin,
    element: <Adminpage />,
    children: [
      { path: users, element: <Users /> },
      { path: addproduct, element: <Addproduct /> },
      { path: user, element: <User /> },
    ],
  },
]);
