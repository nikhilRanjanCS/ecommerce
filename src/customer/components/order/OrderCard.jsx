import { Grid } from "@mui/material";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${7}`)}
      className="p-5 shadow-md hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/suit/a/o/v/40-pisusnsfj57682mediumblue-peter-england-original-imagy4r6ersmhszm.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men 2PC NOTCH BASIC- NEO Checkered Suit</p>
              <p className="opacity-50 text-xs font-semibold">Size : M</p>
              <p className="opacity-50 text-xs font-semibold">Color : Blue</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹5,759</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <CheckCircleOutlineOutlinedIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 07, 2024</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected delivery on Jul 01, 2024</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
