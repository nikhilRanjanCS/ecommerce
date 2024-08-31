import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const stages = [
  "Order placed",
  "Order confirmed",
  "Shipped",
  "Out for delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {stages.map((stage) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {stage}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
