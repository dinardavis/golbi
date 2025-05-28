// client/src/pages/Success.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Payment Successful!</h1>
      <p>Thank you for your subscription!</p>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </>
  );
}
