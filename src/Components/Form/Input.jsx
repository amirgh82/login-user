import React, { useEffect, useState, useContext } from 'react'
import './Input.css'
import regex from '../../validator/regex'

export default function Input({ type, placeholder, icon, name }) {

    const [value, setValue] = useState('')
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValue(event.target.value)
        setErrors(validateInput(event.target.value))
    }

    const blurHandler = () => {
        setErrors({})
    }

    const validateInput = (value) => {
        const errors = {}

        if (type === "email") {
            if (!regex.testEmail(value)) {
                errors.email = "ایمیل باید انگلیسی باشد و شامل @ و  پسوند باشد";
            }
        }
        if (type === "password") {
            if (value.length < 8) {
                errors.password = "رمز عبور باید با حروف و اعداد انگلیسی باشد و حداقل 8 کاراکتر باشد";
            }
        }

        if (type === "number") {
            if (!regex.testPhone(value)) {
                errors.phone = "شماره باید با 09 شروغ شود و 11 رقم باشد"
            }
        }

        if (type === "text") {
            if (value.length < 4) {
                errors.username = "نام کاربری باید حداقل 4 کاراکتر داشته باشد";
            }
        }
        return errors
    }

    return (
        <div className="form-control">
            <span className='icon'>{icon}</span>
            <input type={type} className='form-input' name={name} required onChange={handleChange} value={value} onBlur={blurHandler} />
            {errors.username && <span className="error">{errors.username}</span>}
            {errors.password && <span className="error">{errors.password}</span>}
            {errors.email && <span className="error">{errors.email}</span>}
            {errors.phone && <span className="error">{errors.phone}</span>}
            <label>{placeholder}</label>
        </div>
    )
}
