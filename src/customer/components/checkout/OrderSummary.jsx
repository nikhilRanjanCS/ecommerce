import React, { useEffect } from "react";
import AddressCard from "../address/AddressCard";
import { Divider } from "@mui/material";
import CartItem from "../cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../redux/order/Action";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  console.log;
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard shippingAddress={order.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative pt-8">
          <div className="col-span-2">
            {order.order?.orderItems.map((cartItem) => (
              <CartItem item={cartItem} />
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
                  <span className="pr-3">{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="pl-3">Discount</span>
                  <span className="text-green-600 pr-3">
                    {order.order?.totalPrice -
                      order.order?.totaldiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span className="pl-3">Delivery Charge</span>
                  <span className="text-green-600 pr-3"> Free</span>
                </div>
                <Divider />
                <div className="flex justify-between pt-3 text-black font-bold text-lg">
                  <span className="pl-3">Total Amount</span>
                  <span className="pr-3">
                    {order.order?.totaldiscountedPrice}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
