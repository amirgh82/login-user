import React, { useContext } from 'react'
import './Login.css'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Button/Button'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">به <span>web codino </span>خوش اومدید</h2>
          <form>
            <Input type='text' placeholder='نام کاربری یا ایمیل' icon={<FaRegUserCircle />} />
            <Input type='password' placeholder='رمز عبور' icon={<AiOutlineEyeInvisible />} />
            <span className='forgot-password'>فراموشی رمز عبور</span>
            <Button>ورود</Button>
          </form>
          <div className="switch-register">
            <span>حساب کاربری ندارید؟</span>
            <Link to='/register'>ثبت نام</Link>
          </div>
        </div>
        <div className="login-picture">

        </div>
      </div>
    </>
  )
}
