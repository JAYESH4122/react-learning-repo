import React, { useState } from "react";

export const FormattedAmountInputField = () => {
  const [formattedValue, setFormattedValue] = useState("₹0");
  const [submittedData, setSubmittedData] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    const numsOnly = value.replace(/\D/g, "");

    const numericValue = numsOnly / 100;

    const formatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(numericValue);
    setFormattedValue(formatted);
  };

  const formSubmit = (e) => {
    const numericString = formattedValue.replace(/[^\d.]/g, "");
    const parseFloatValue = parseFloat(numericString);
    setSubmittedData(parseFloatValue);
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={formSubmit}>
        <label htmlFor="Currency">Amount:</label>
        <input
          type="text"
          id="Currency"
          value={formattedValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Form data : {submittedData}</p>
    </>
  );
};
