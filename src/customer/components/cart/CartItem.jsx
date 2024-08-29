import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/v/v/xs-10-combo-465-313-tigersnake-original-imagxzawrkphjcch.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Men Regular Fit Printed Spread Collar Casual Shirt (Pack of 2)
          </p>
          <p className="opacity-70">Size : L, White </p>
          <p className="opacity-70 mt-2">Seller : AKENTERPRISE9</p>
          <div className="flex space-x-5 items-center  text-gray-900 mt-6">
            <p className="font-semibold text-lg">₹249</p>
            <p className="opacity-50 line-through ">₹999</p>
            <p className="text-green-600 font-semibold">75% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg: space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "#616566" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">2</span>
          <IconButton sx={{ color: "#5046e5" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
