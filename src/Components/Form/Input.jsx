import React, { useEffect, useState } from "react";
import "./Input.css";
import regex from "../../validator/regex";

export default function Input({ type, placeholder, icon, name, onValidation }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.trim();
    setInputValue(inputValue);
    let isValid = false;
    if (name === "email") {
      isValid = regex.testEmail(inputValue);
    } else if (name === "username") {
      isValid = regex.testUsername(inputValue);
    } else if (name === "phone") {
      isValid = regex.testPhone(inputValue);
    } else if (name === "password") {
      isValid = regex.testPassword(inputValue);
    }

    setError(isValid ? "" : "ورودی نامعتبر!");

    onValidation(name, isValid);
  };

  return (
    <div className="form-control">
      <span className="icon">{icon}</span>
      <input
        type={type}
        className="form-input"
        name={name}
        required
        onChange={handleChange}
        value={inputValue}
      />
      <span className="error">{error}</span>
      <label>{placeholder}</label>
    </div>
  );
}
