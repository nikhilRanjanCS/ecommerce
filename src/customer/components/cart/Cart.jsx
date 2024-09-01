import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout/?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative pt-8">
        <div className="col-span-2">
          {[1, 1, 1].map((cartItem) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-50 pb-4 pl-3 pt-2">
              Price Details
            </p>
            <Divider />
            <div className="space-y-3 ">
              <div className="flex justify-between pt-3 text-black">
                <span className="pl-3">Price</span>
                <span className="pr-3">₹249</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span className="pl-3">Discount</span>
                <span className="text-green-600 pr-3">-₹29</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span className="pl-3">Delivery Charge</span>
                <span className="text-green-600 pr-3"> Free</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 text-black font-bold text-lg">
                <span className="pl-3">Total Amount</span>
                <span className="pr-3">₹244</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
