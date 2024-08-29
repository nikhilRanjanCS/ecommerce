import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#5046e5" }}
            >
              O
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 ">
            <div>
              <p className="font-semibold text-lg">Onkar</p>
              <p className="opacity-70">Aug 26, 2024</p>
            </div>
          </div>
          <Rating value={3.5} name="half-rating" readOnly precision={0.5} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            laudantium dolorem, minima modi repellat ratione.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
