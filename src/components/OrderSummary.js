import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Order Summary</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default OrderSummary;
