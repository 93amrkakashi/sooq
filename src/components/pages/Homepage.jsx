import React, { useEffect } from "react";
// import Broducts from "../layers/Products";
import { Navbar } from "../layers/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../assets/hooks/pruducts";
import ProductCard from "../layers/ProductCard";
import PoSlider from "../layers/PoSlider";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { login, path, root } from "../routes";
import { useAuth } from "../assets/hooks/auth";
export const Homepage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  // const { products, isLoading } = useProducts("women's clothing")
  // const settings = {
  //   dots: true,
  //     infinite: true,
  //     slidesToShow: 5,
  //     slidesToScroll: 3,
  //     autoplay: true,
  //     speed: 500,
  //     autoplaySpeed: 2000,
  //     cssEase: "linear"
  // };
  const { id } = useParams();
  useEffect(() => {
    // isLoading()
    if (!isLoading && !user) {
      navigate(login);
    }
    if (user) {
      navigate(root);
    }
  }, [isLoading, user]);

  return (
    <div>
      <Navbar />

      {/* <Outlet /> */}

      {user && (
        <>
          <PoSlider categories={"women's clothing"} />
          <PoSlider categories={"men's clothing"} />
          <PoSlider categories={"kids's clothing"} />
          <PoSlider categories={"electronics"} />
        </>
      )}
    </div>
  );
};
