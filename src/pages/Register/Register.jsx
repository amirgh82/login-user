import React, { useEffect, useState } from "react";
import "./Register.css";
// Input and Button component
import Input from "../../Components/Form/Input";
import Button from "../../Components/Button/Button";
// icon
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
// regex to validate forms
import regex from "../../validator/regex";
// swal library for modal display
import Swal from "sweetalert2";

export default function Register() {
  // Getting the validity of the inputs
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrorTitle, setFormErrorTitle] = useState(
    "لطفاً اطلاعات را درست وارد کنید."
  );

  // submit register form and its operations
  const userRegister = (event) => {
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
    if (usernameValid && passwordValid && emailValid && phoneValid) {
      setIsFormValid(true);
      setFormErrorTitle("به کدینو خوش اومدید");
    } else {
      setIsFormValid(false);
      setFormErrorTitle("لطفاً اطلاعات را درست وارد کنید.");
    }
  }, [usernameValid, passwordValid, emailValid, phoneValid]);

  return (
    // register html code
    <>
      <div className="form-container">
        <div className="register-right">
          <h2 className="form-title">
            به <span>وب کدینو </span>خوش اومدید
          </h2>
          <img
            className="form-picture"
            src="/public/images/amico.svg"
            alt="coding workshop"
          />
        </div>
        <div className="form">
          <h2 className="form-title">ثبت نام</h2>
          <form>
            <Input
              type="text"
              placeholder="نام کاربری"
              icon={<FaRegUserCircle />}
              name="username"
              // regex prop
              regexPattern={regex.testUsername}
              // validate input
              onValidation={(name, isValid) => setUsernameValid(isValid)}
            />
            <Input
              type="email"
              placeholder="ایمیل"
              icon={<AiOutlineMail />}
              name="email"
              // regex prop
              regexPattern={regex.testEmail}
              // validate input
              onValidation={(name, isValid) => setEmailValid(isValid)}
            />
            <Input
              type="number"
              placeholder="شماره تماس"
              icon={<HiOutlinePhone />}
              name="phone"
              // regex prop
              regexPattern={regex.testPhone}
              // validate input
              onValidation={(name, isValid) => setPhoneValid(isValid)}
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
            <Button type="submit" onClick={userRegister} disabled={false}>
              ثبت نام
            </Button>
          </form>
          <div className="switch-register">
            <span>حساب کاربری دارم</span>
            <Button to="/login">ورود</Button>
          </div>
        </div>
      </div>
    </>
  );
}
