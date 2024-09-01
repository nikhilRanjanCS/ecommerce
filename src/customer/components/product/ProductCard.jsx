import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${9}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/t/2/-original-imahfxv2txyd2cgp.jpeg?q=70"
        />
      </div>
      <div className="productTextPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">ADIDAS </p>
          <p>IN SMU PL TEE Men Printed Round Neck Polyester Blue T-Shirt</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹1,299</p>
          <p className="line-through opacity-50">₹2,499</p>
          <p className="text-green-600 font-semibold">48% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
