import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../redux/order/Action";
import { updatePayment } from "../../../redux/payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../order/OrderTracker";
import AddressCard from "../address/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_link_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = { orderId, paymentId };
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="outlined"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Congratulations!</AlertTitle>
          Order placed successfully
        </Alert>
      </div>
      <OrderTracker activeStep={1} />

      <Grid container className="space-y-5 py-5 pt-20">
        {[1, 1, 1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/o/k/xl-usshtfx0111-u-s-polo-assn-original-imagzg4ekxez7mvj.jpeg?q=70"
                  alt="cart-item-image"
                />
                <div className="ml-5 space-y-2">
                  <p>item.product.title</p>
                  <div className="flex flex-col opacity-50 text-xs font-semibold space-x-5">
                    <span>Color : </span>
                    <span>Size : </span>
                  </div>
                  <p>Seller : </p>
                  <p>Price : </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard shippingAddress={1}></AddressCard>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
