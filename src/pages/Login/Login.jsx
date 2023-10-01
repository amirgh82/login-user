import React from 'react'
import './Login.css'
import Input from '../../Components/Form/Input'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">به <span>web codino </span>خوش اومدید</h2>
          <form>
            <Input type='text' placeholder='نام کاربری یا ایمیل' icon={<FaRegUserCircle />} />
            <Input type='password' placeholder='رمز عبور' icon={<AiOutlineEye />} />
            <span className='forgot-password'>فراموشی رمز عبور</span>
          </form>
        </div>
        <div className="login-picture">

        </div>
      </div>
    </>
  )
}
