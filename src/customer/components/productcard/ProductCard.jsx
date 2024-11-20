import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
      onClick={handleProductClick}
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product?.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
