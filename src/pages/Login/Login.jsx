import React from 'react'
import './Login.css'
import Input from '../../Components/Form/Input'

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <form>
            <h2 className="login-title">صفحه ورود کاربر</h2>
            <Input type='text' placeholder='نام کاربری یا ایمیل' />
            <Input type='password' placeholder='رمز عبور' />
          </form>
        </div>
        <div className="login-picture">
          
        </div>
      </div>
    </>
  )
}
