import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { useProducts } from "../assets/hooks/pruducts";
import { Link } from "react-router-dom";

function PoSlider({ categories }) {
  const { products, isLoading } = useProducts(categories);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",

    dots: false,
    // centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {!isLoading && (
        <div className="poslider">
          <div className="link">
          <Link to={`products/${categories}`}>
          {categories}
          </Link>
          </div>
          <Slider {...settings}>
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}

export default PoSlider;
