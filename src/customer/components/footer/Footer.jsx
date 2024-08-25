import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            ABOUT
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Contact Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              About Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Careers
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Stories
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Corporate Information
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            HELP
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Payments
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Shipping
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Cancellation & Returns
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              FAQ
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Report Infringement
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            GROUP COMPANIES
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              ContactPro
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Clone
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Todo
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            CONSUMER POLICY
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Cancellation & Returns
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Terms Of Use
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Security
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Grievance Redressal
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography component="p" variant="body2" align="center">
            &copy; 2024 NikhilEcommerce. All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
