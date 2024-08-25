import React from "react";

const ProductCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">GreenFlair</h3>
        <p className="mt-2 text-sm text-gray-500">
          Men Slim Fit Solid Button Down Collar Casual Shirt
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
