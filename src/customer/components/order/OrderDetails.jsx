import React from "react";
import AddressCard from "../address/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/suit/t/j/c/40-pisusnsfj57682mediumblue-peter-england-original-imagyjggadunh7zg.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men 2 PC Suit Textured Suit</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Size : M</span>
                    <span>Color : Blue</span>
                  </p>
                  <p className="opacity-40">Seller : HSAtlastradeFashion</p>
                  <p>Price : ₹5,759</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderOutlinedIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2"
                />
                <span>Rate & review product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/suit/t/j/c/40-pisusnsfj57682mediumblue-peter-england-original-imagyjggadunh7zg.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men 2 PC Suit Textured Suit</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Size : M</span>
                  <span>Color : Blue</span>
                </p>
                <p className="opacity-40">Seller : HSAtlastradeFashion</p>
                <p>Price : ₹5,759</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderOutlinedIcon
                sx={{ fontSize: "2rem" }}
                className="px-2"
              />
              <span>Rate & review product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
