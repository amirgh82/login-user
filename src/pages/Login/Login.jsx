import React, { useContext, useState } from 'react'
import './Login.css'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Button/Button'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Login() {

  const userLogin = (event) => {
    event.preventDefault()
    
  }

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">ورود</h2>
          <form>
            <Input type='text' placeholder='نام کاربری' icon={<FaRegUserCircle />} name='username' />
            <Input type='password' placeholder='رمز عبور' icon={<AiOutlineEyeInvisible />} name='password' />
            <span className='forgot-password'>فراموشی رمز عبور</span>
            <Button
              type='submit'
              onClick={userLogin}
              disabled={false}
            >ورود</Button>
          </form>
          <div className="switch-register">
            <span>حساب کاربری ندارید؟</span>
            <Button to='/register'>ثبت نام</Button>
          </div>
        </div>
        <div className="login-left">
          <h2 className="login-title">به <span>وب کدینو </span>خوش اومدید</h2>
          <img className='login-picture' src="./../../../public/images/Login-amico.svg" alt="coding workshop" />
        </div>
      </div>
    </>
  )
}
