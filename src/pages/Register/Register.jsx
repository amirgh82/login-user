import React, { useEffect, useState } from "react";
import "./Register.css";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Button/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import regex from "../../validator/regex";

export default function Register() {
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [formError, setFormError] = useState(
    "لطفاً اطلاعات را درست وارد کنید."
  );

  const userRegister = (event) => {
    event.preventDefault();

    if (!usernameValid && !passwordValid && !emailValid && !phoneValid) {
      setFormError("لطفاً اطلاعات را درست وارد کنید.");
    } else {
      setFormError("فرم با موفقیت ارسال شد!");
    }
    alert(formError);
  };

  return (
    <>
      <div className="register-container">
        <div className="register-right">
          <h2 className="register-title">
            به <span>وب کدینو </span>خوش اومدید
          </h2>
          <img
            className="register-picture"
            src="./../../../public/images/Mobile login-amico.svg"
            alt="coding workshop"
          />
        </div>
        <div className="register-form">
          <h2 className="register-title">ثبت نام</h2>
          <form>
            <Input
              type="text"
              placeholder="نام کاربری"
              icon={<FaRegUserCircle />}
              name="username"
              regexPattern={regex.testUsername}
              onValidation={(name, isValid) => setUsernameValid(isValid)}
            />
            <Input
              type="email"
              placeholder="ایمیل"
              icon={<AiOutlineMail />}
              name="email"
              regexPattern={regex.testEmail}
              onValidation={(name, isValid) => setEmailValid(isValid)}
            />
            <Input
              type="number"
              placeholder="شماره تماس"
              icon={<HiOutlinePhone />}
              name="phone"
              regexPattern={regex.testPhone}
              onValidation={(name, isValid) => setPhoneValid(isValid)}
            />
            <Input
              type="password"
              placeholder="رمز عبور"
              icon={<AiOutlineEyeInvisible />}
              name="password"
              regexPattern={regex.testPassword}
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
