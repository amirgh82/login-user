import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
export default function Index() {
    return (
        <div className="container">
            <div className="login-links">
                <Link to='/login' className='link'>ورود</Link>
                <Link to='/register' className='link'>ثبت نام</Link>
            </div>
        </div>
    )
}
