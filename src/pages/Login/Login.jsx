import React, { useContext, useState, useEffect } from "react";
import "./Login.css";
// Input and Button component
import Input from "../../Components/Form/Input";
import Button from "../../Components/Button/Button";
// icon
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// regex to validate forms
import regex from "../../validator/regex";
// swal library for modal display
import Swal from "sweetalert2";

export default function Login() {
  // Getting the validity of the inputs
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrorTitle, setFormErrorTitle] = useState(
    "لطفاً اطلاعات را درست وارد کنید."
  );

  // submit login form and its operations
  const userLogin = (event) => {
    event.preventDefault();

    // swal alert code
    Swal.fire({
      title: formErrorTitle,
      icon: isFormValid ? "success" : "error",
      confirmButtonText: isFormValid ? "ورود" : "تکمیل اطلاعات",
      customClass: ".swal",
    });
  };
  // validate inputs
  useEffect(() => {
    if (usernameValid && passwordValid) {
      setIsFormValid(true);
      setFormErrorTitle("به کدینو خوش اومدید");
    } else {
      setIsFormValid(false);
      setFormErrorTitle("لطفاً اطلاعات را درست وارد کنید.");
    }
  }, [usernameValid, passwordValid]);

  return (
    // login html code
    <>
      <div className="form-container">
        <div className="form">
          <h2 className="form-title">ورود</h2>
          <form>
            <Input
              type="text"
              placeholder="نام کاربری"
              icon={<FaRegUserCircle />}
              name="username"
              // regex prop
              regexPattern={regex.testEmail}
              // validate input
              onValidation={(name, isValid) => setUsernameValid(isValid)}
            />
            <Input
              type="password"
              placeholder="رمز عبور"
              icon={<AiOutlineEyeInvisible />}
              name="password"
              // regex prop
              regexPattern={regex.testPassword}
              // validate input
              onValidation={(name, isValid) => setPasswordValid(isValid)}
            />
            <span className="forgot-password">فراموشی رمز عبور</span>
            <Button type="submit" onClick={userLogin} disabled={false}>
              ورود
            </Button>
          </form>
          <div className="switch-register">
            <span>حساب کاربری ندارید؟</span>
            <Button to="/register">ثبت نام</Button>
          </div>
        </div>
        <div className="login-left">
          <h2 className="form-title">
            به <span>وب کدینو </span>خوش اومدید
          </h2>
          <img
            className="form-picture"
            src="/public/images/Login-amico.svg"
            alt="coding workshop"
          />
        </div>
      </div>
    </>
  );
}
