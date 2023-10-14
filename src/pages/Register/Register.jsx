import React, { useState } from "react";
import "./Register.css";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Button/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Login() {
  const [areInputsValid, setAreInputsValid] = useState(false);

  const userRegister = (event) => {
    event.preventDefault();
    if (areInputsValid) {
      console.log("register");
    } else {
      console.log("Invalid inputs. Cannot register.");
    }
  };

  const handleInputChange = (isValid) => {
    setAreInputsValid(isValid);
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
              onInputChange={handleInputChange}
            />
            <Input
              type="email"
              placeholder="ایمیل"
              icon={<AiOutlineMail />}
              name="email"
              onInputChange={handleInputChange}
            />
            <Input
              type="number"
              placeholder="شماره تماس"
              icon={<HiOutlinePhone />}
              name="number"
              onInputChange={handleInputChange}
            />
            <Input
              type="password"
              placeholder="رمز عبور"
              icon={<AiOutlineEyeInvisible />}
              name="password"
              onInputChange={handleInputChange}
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
