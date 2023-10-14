import React, { useEffect, useState } from "react";
import "./Input.css";
import regex from "../../validator/regex";

export default function Input({
  type,
  placeholder,
  icon,
  name,
  onInputChange,
}) {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState([]);
  const [isValidAllInputs, setIsValidAllInputs] = useState(false);

  useEffect(() => {
    onInputChange(Object.keys(errors).length === 0);
  }, [errors, onInputChange]);

  const handleChange = (event) => {
    setValue(event.target.value.trim());
    setErrors(validateInput(event.target.value));
  };

  const validateInput = (value) => {
    const error = {};

    if (type === "email") {
      if (!regex.testEmail(value)) {
        error.email = "ایمیل باید انگلیسی باشد و شامل @ و  پسوند باشد";
      }
    }
    if (type === "password") {
      if (value.length < 8) {
        error.password =
          "رمز عبور باید با حروف و اعداد انگلیسی باشد و حداقل 8 کاراکتر باشد";
      }
    }

    if (type === "number") {
      if (!regex.testPhone(value)) {
        error.phone = "شماره باید با 09 شروغ شود و 11 رقم باشد";
      }
    }

    if (type === "text") {
      if (value.length < 4) {
        error.username = "نام کاربری باید حداقل 4 کاراکتر داشته باشد";
      }
    }

    return error;
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
        value={value}
      />
      {errors.username && <span className="error">{errors.username}</span>}
      {errors.password && <span className="error">{errors.password}</span>}
      {errors.email && <span className="error">{errors.email}</span>}
      {errors.phone && <span className="error">{errors.phone}</span>}
      <label>{placeholder}</label>
    </div>
  );
}
