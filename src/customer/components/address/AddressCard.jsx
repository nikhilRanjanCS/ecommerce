import React from "react";

const AddressCard = ({ shippingAddress }) => {
  console.log("shipping mobile number----->>>>", shippingAddress);

  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {shippingAddress?.firstName + " " + shippingAddress?.lastName}
        </p>
        <p>
          {shippingAddress?.streetAddress +
            ", " +
            shippingAddress?.city +
            ", " +
            shippingAddress?.state +
            " - " +
            shippingAddress?.pinCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Mobile Number</p>
          <p>{shippingAddress?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
